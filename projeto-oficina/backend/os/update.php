<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, UPDATE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config/db.php';

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

try {
    if (!empty($data['cliente']) || !empty($data['placa']) || !empty($data['valor']) || !empty($data['funcionario'])) {
        // Captura de cliente
        $cliente = $data['cliente'];
        $stmt_cliente = $pdo->prepare('SELECT CLI_ID FROM tb_cliente WHERE CLI_CPF = ?');
        $stmt_cliente->execute([$cliente]);
        $cliente_id = $stmt_cliente->fetch();

        if (!$cliente_id) {
            http_response_code(404);
            echo json_encode(['success' => false, 'message' => 'Cliente não encontrado ou não cadastrado.']);
            exit;
        }

        $id_cliente = $cliente_id['CLI_ID'];

        // Captura de moto
        $moto = $data['placa'];
        $stmt_moto = $pdo->prepare('SELECT MOTO_ID FROM tb_moto WHERE MOTO_PLACA = ? AND MOTO_CLIENTE = ?');
        $stmt_moto->execute([$moto, $id_cliente]);
        $moto_id = $stmt_moto->fetch();

        if (!$moto_id) {
            http_response_code(404);
            echo json_encode(['success' => false, 'message' => 'Essa moto não pertence a esse cliente.', 'cliente' => $id_cliente]);
            exit;
        }

        $id_moto = $moto_id['MOTO_ID'];

        // Captura de funcionário
        $funcionario = $data['funcionario'];
        $stmt_fun = $pdo->prepare('SELECT FUN_ID FROM tb_funcionario WHERE FUN_NOME = ?');
        $stmt_fun->execute([$funcionario]);
        $funcionario_id = $stmt_fun->fetch();

        if (!$funcionario_id) {
            http_response_code(404);
            echo json_encode(['success' => false, 'message' => 'Funcionário não encontrado ou não cadastrado.']);
            exit;
        }

        $id_funcionario = $funcionario_id['FUN_ID'];

        $stmt = $pdo->prepare('UPDATE tb_ordem_de_servico
        SET ORDEM_SERVICO_REALIZADO = :servico,
        ORDEM_VALOR_TOTAL = :valor,
        ORDEM_OBSERVACAO = :observacao,
        ORDEM_FUNCIONARIO = :funcionario,
        ORDEM_MOTO = :moto,
        ORDEM_CLIENTE = :cliente
        WHERE ORDEM_ID = :id');

        $servico = htmlspecialchars(strip_tags($data['servico'] ?? ''));
        $valor = htmlspecialchars(strip_tags($data['valor'] ?? ''));
        $observacao = htmlspecialchars(strip_tags($data['observacao'] ?? ''));

        $stmt->bindParam(':servico', $servico);
        $stmt->bindParam(':valor', $valor);
        $stmt->bindParam(':observacao', $observacao);
        $stmt->bindParam(':funcionario', $id_funcionario);
        $stmt->bindParam(':moto', $id_moto);
        $stmt->bindParam(':cliente', $id_cliente);
        $stmt->bindParam(':id', $data['ORDEM_ID'], PDO::PARAM_INT);

        if ($stmt->execute()) {
            $rowsAffected = $stmt->rowCount();

            if ($rowsAffected > 0) {
                http_response_code(200);
                echo json_encode(['success' => true, 'message' => 'Ordem alterada com sucesso.']);
            } else {
                http_response_code(200);
                echo json_encode(['success' => false, 'message' => 'Nenhum dado foi alterado.']);
            }
        }
    }
} catch (PDOException $e) {
    if ($e->getCode() === '23000') {
        $errorMessage = $e->getMessage();

        if (strpos($errorMessage, 'ORDEM_MOTO') !== false) {
            http_response_code(409);
            echo json_encode(['success' => false, 'message' => 'Essa placa já possui uma ordem de serviço.']);
        } else {
            http_response_code(409);
            echo json_encode(['success' => false, 'message' => 'Ocorreu um erro de duplicidade de dados.']);
        }
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Ocorreu um erro ao tentar se conectar com o servidor: ' . $e->getMessage()]);
    }
}
