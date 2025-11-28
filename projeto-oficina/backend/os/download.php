<?php
// Configuração de Cabeçalho e Autoload
header("Access-Control-Allow-Origin: *");

require_once '../vendor/autoload.php';

use Dompdf\Dompdf;
use Dompdf\Options;

require_once '../config/db.php';

$id_ordem = $_GET['id'] ?? null;

if (!$id_ordem) {
    http_response_code(404);
    echo 'ID não fornecido';
    exit;
}

try {
    $stmt = $pdo->prepare('SELECT ORDEM_SERVICO_REALIZADO, ORDEM_VALOR_TOTAL, FUN_NOME, CLI_NOME, MOTO_PLACA, MARCA_NOME, MODELO_NOME 
    FROM tb_ordem_de_servico
    INNER JOIN tb_funcionario ON tb_ordem_de_servico.ORDEM_FUNCIONARIO = tb_funcionario.FUN_ID
    INNER JOIN tb_cliente ON tb_ordem_de_servico.ORDEM_CLIENTE = tb_cliente.CLI_ID
    INNER JOIN tb_moto ON tb_ordem_de_servico.ORDEM_MOTO = tb_moto.MOTO_ID 
    INNER JOIN tb_marca ON tb_moto.MOTO_MARCA = tb_marca.MARCA_ID
    INNER JOIN tb_modelo ON tb_moto.MOTO_MODELO = tb_modelo.MODELO_ID 
    WHERE ORDEM_ID = ?');
    $stmt->execute([$id_ordem]);
    $dados_os = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$dados_os) {
        http_response_code(404);
        echo 'Ordem de serviço não encontrada';
        exit;
    }

    $valor_formatado = number_format($dados_os['ORDEM_VALOR_TOTAL'], 2, ',', '.');
    $data_geracao = date('d/m/Y – H:i:s');

    $html = '
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
    <meta charset="UTF-8">

    <style>
        body { 
            font-family: Arial, sans-serif; 
            color: #000; 
            margin: 0;
            padding: 0;
        }

        .container {
            width: 100%;
            margin: 30px auto;
            padding: 0;
        }
        
        .content-wrapper {
            background: #3a3a3a !important; 
            color: #fff !important;
            padding: 20px;
            border-radius: 8px;
        }

        .header-box {
            background: #8B0000 !important;
            padding: 15px 20px;
            text-align: center;
            border-radius: 8px;
            margin-bottom: 25px;
        }

        .header-box h1 {
            margin: 0;
            font-size: 20px;
            font-weight: bold;
            color: #fff;
        }

        table.data-table {
            width: 100%;
            margin-top: 10px;
            border-collapse: collapse;
            background: #4a4a4a !important; 
            border-radius: 6px;
        }

        table.data-table td {
            padding: 10px 15px;
            border-bottom: 1px solid #6a6a6a;
            font-size: 14px;
            color: #fff;
        }

        table.data-table tr:last-child td {
            border-bottom: none;
        }

        table.data-table td.label {
            font-weight: bold;
            color: #e0e0e0;
            width: 25%;
        }

        .valor-total {
            margin-top: 30px;
            background: #4a4a4a !important;
            padding: 20px;
            text-align: center;
            border: 2px solid #8B0000 !important;
            border-radius: 10px;
        }

        .valor-total h2 {
            margin: 0;
            color: #eaeaea;
            font-size: 14px;
            letter-spacing: 1px;
        }

        .valor-total .valor {
            margin-top: 8px;
            font-size: 26px;
            font-weight: bold;
            color: #00ff6a; 
        }

        .assinatura {
            margin-top: 50px;
            text-align: center;
            color: #fff;
        }

        .linha-assinatura {
            width: 250px;
            height: 1px;
            background: #fff;
            margin: 40px auto 5px;
        }

        .footer-content-wrapper { 
            text-align: center;
            margin-top: 40px;
            padding: 15px 0;
            color: #cfcfcf;
            background: #1d1d1d !important; 
            border-radius: 0 0 6px 6px;
            font-size: 11px;
            line-height: 16px;
        }
    </style>

    </head>
    <body>

    <div class="container">
        <div class="content-wrapper">

            <div class="header-box">
                <h1>ORDEM DE SERVIÇO Nº ' . $id_ordem . '</h1>
            </div>

            <table class="data-table">
                <tr>
                    <td class="label">Cliente:</td>
                    <td>' . htmlspecialchars($dados_os['CLI_NOME']) . '</td>
                </tr>
                <tr>
                    <td class="label">Placa:</td>
                    <td>' . htmlspecialchars($dados_os['MOTO_PLACA']) . '</td>
                </tr>
                <tr>
                    <td class="label">Moto:</td>
                    <td>' . htmlspecialchars($dados_os['MODELO_NOME'] . ' ' . $dados_os['MARCA_NOME']) . '</td>
                </tr>
                <tr>
                    <td class="label">Mecânico:</td>
                    <td>' . htmlspecialchars($dados_os['FUN_NOME']) . '</td>
                </tr>
                <tr>
                    <td class="label">Serviço:</td>
                    <td>' . htmlspecialchars($dados_os['ORDEM_SERVICO_REALIZADO']) . '</td>
                </tr>
            </table>

            <div class="valor-total">
                <h2>VALOR TOTAL ESTIMADO</h2>
                <div class="valor">R$ ' . $valor_formatado . '</div>
            </div>

            <div class="assinatura">
                <div class="linha-assinatura"></div>
                <span>' . htmlspecialchars($dados_os['FUN_NOME']) . ' — Mecânico Responsável</span>
            </div>

            <div class="footer-content-wrapper">
                R. Victor Curioni, 270 - Jardim Santa Paula, Leme - SP, 13611-011<br>
                Telefone: (19) 99799-2725<br>
                Obrigado por escolher a Baco Motos!<br>
                Documento gerado em: ' . $data_geracao . '
            </div>

        </div> 
    </div> 
    </body>
    </html>';

    // 3. Configuração e Geração do PDF
    $options = new Options();
    $options->set('defaultFont', 'Arial');
    $options->set('isRemoteEnabled', TRUE);
    $options->set('isHtml5ParserEnabled', TRUE);
    $options->set('isPhpEnabled', TRUE);

    $dompdf = new Dompdf($options);

    $dompdf->loadHtml($html);
    $dompdf->setPaper('A4', 'portrait');
    $dompdf->render();

    $filename = "OS_{$id_ordem}_" . str_replace(' ', '_', $dados_os['CLI_NOME']) . ".pdf";
    $dompdf->stream($filename, ['Attachment' => true]);
} catch (PDOException $e) {
    // Erro de Banco de Dados
    http_response_code(500);
    echo 'Erro ao conectar com o servidor: ' . $e->getMessage();
} catch (\Exception $e) {
    // Erro de Geração do Dompdf/HTML
    http_response_code(500);
    echo 'Erro ao gerar PDF: ' . $e->getMessage();
}

?>