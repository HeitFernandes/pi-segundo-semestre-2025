<?php
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

    $stmt = $pdo->prepare('SELECT ORDEM_SERVICO_REALIZADO, ORDEM_VALOR_TOTAL, FUN_NOME, CLI_NOME, 
        MOTO_PLACA, MARCA_NOME, MODELO_NOME
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
        echo 'OS não encontrada';
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
        /* Remove margens internas padrão do DOMPDF */
        @page { 
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            width: 100%;
            color: #fff; /* Cor do texto padrão */
            background: #3a3a3a !important; /* Fundo Escuro no BODY para preencher os cantos */
        }

        .content-wrapper {
            width: auto;
            padding: 20px 10px; /* Padding interno mínimo */
            margin: 0;
            box-sizing: border-box;
        }

        .header-box {
            background: #8B0000 !important;
            padding: 25px 15px;
            text-align: center;
            border-radius: 8px;
            margin-bottom: 30px;
            color: #fff;
        }

        table.data-table {
            width: 100%;
            background: #4a4a4a !important;
            border-collapse: collapse;
            border-radius: 6px;
        }

        table.data-table td {
            padding: 12px 15px;
            border-bottom: 1px solid #666;
            font-size: 16px;
            color: #fff;
        }

        table.data-table td.label {
            font-weight: bold;
            width: 25%;
            color: #ddd;
        }

        .valor-total {
            margin-top: 30px;
            background: #4a4a4a !important;
            padding: 20px 15px;
            text-align: center;
            border: 2px solid #8B0000;
            border-radius: 12px;
        }

        .valor-total .valor {
            margin-top: 8px;
            font-size: 32px;
            font-weight: bold;
            color: #00ff6a;
        }

        .assinatura {
            margin-top: 40px;
            text-align: center;
            color: #fff;
        }

        .linha-assinatura {
            width: 300px;
            height: 2px;
            background: #fff;
            margin: 40px auto 8px;
        }

        .footer-content-wrapper {
            margin-top: 30px;
            text-align: center;
            padding: 15px;
            background: #1d1d1d !important;
            font-size: 12px;
            color: #cfcfcf;
            border-radius: 0;
            line-height: 18px;
        }

    </style>
    </head>

    <body>

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
                <td>' . htmlspecialchars($dados_os['MARCA_NOME'] . " " . $dados_os['MODELO_NOME']) . '</td>
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

    </body>
    </html>';

    $options = new Options();
    $options->set('defaultFont', 'Arial');
    $options->set('isRemoteEnabled', true);

    $dompdf = new Dompdf($options);
    $dompdf->loadHtml($html);
    
    $dompdf->setPaper('A4', 'portrait', [0, 0, 841.89, 595.28]); 
    $dompdf->render();

    $filename = "OS_{$id_ordem}_" . str_replace(' ', '_', $dados_os['CLI_NOME']) . ".pdf";
    $dompdf->stream($filename, ['Attachment' => true]);


} catch (Exception $e) {
    http_response_code(500);
    echo 'Erro: ' . $e->getMessage();
}

?>