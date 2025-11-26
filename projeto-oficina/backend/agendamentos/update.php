<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, UPDATE, DELETE, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config/db.php';

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$id_agendamento = $_GET['id'];

if (empty($data['placa'] || empty($data['cliente']) || empty($data['funcionario']))) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Dados incompletos.']);
    exit;
}

try {
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

    $moto = $data['placa'];
    $stmt_moto = $pdo->prepare('SELECT MOTO_ID FROM tb_moto WHERE MOTO_PLACA = ? AND MOTO_CLIENTE = ?');
    $stmt_moto->execute([$moto, $id_cliente]);
    $moto_id = $stmt_moto->fetch();

    if (!$moto_id) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Essa moto não pertence a esse cliente.']);
        exit;
    }

    $id_moto = $moto_id['MOTO_ID'];

    $funcionario = $data['funcionario'];
    $stmt_fun = $pdo->prepare('SELECT FUN_ID FROM tb_funcionario WHERE FUN_NOME = ?');
    $stmt_fun->execute([$funcionario]);
    $fun_id = $stmt_fun->fetch();

    if (!$fun_id) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Funcionário não encontrado ou não cadastrado.']);
        exit;
    }

    $id_fun = $fun_id['FUN_ID'];

    $stmt = $pdo->prepare('UPDATE tb_agendamento_de_servico
    SET AGEN_DATA = :data_agen,
    AGEN_MOTIVO_OBSERVACAO = :observacao,
    AGEN_FUNCIONARIO = :funcionario,
    AGEN_MOTO = :moto,
    AGEN_CLIENTE = :cliente,
    AGEN_HORA = :hora
    WHERE AGEN_ID = :id');

    $data_agen = htmlspecialchars(strip_tags($data['data_agen'] ?? ''));
    $hora = htmlspecialchars(strip_tags($data['hora'] ?? ''));
    $observacao = htmlspecialchars(strip_tags($data['observacao'] ?? ''));

    $stmt->bindParam(':data_agen', $data_agen);
    $stmt->bindParam(':observacao', $observacao);
    $stmt->bindParam(':funcionario', $id_fun);
    $stmt->bindParam(':moto', $id_moto);
    $stmt->bindParam(':cliente', $id_cliente);
    $stmt->bindParam(':hora', $hora);
    $stmt->bindParam(':id', $id_agendamento, PDO::PARAM_INT);

    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Agendamento alterado com sucesso.']);
    } else if ($stmt->rowCount() == 0) {
        http_response_code(200);
        echo json_encode(['equal' => true, 'message' => 'Nenhum dado foi alterado.']);
    } else {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Ocorreu um erro ao tentar alterar o agendamento.']);
    }
} catch (PDOException $e) {
    if ($e->getCode() === '23000') {
        $errorMessage = $e->getMessage();

        if (strpos($errorMessage, 'AGEN_MOTO') !== false) {
            http_response_code(409);
            echo json_encode(['success' => false, 'message' => 'Essa moto já possui um agendamento.']);
        } else {
            http_response_code(409);
            echo json_encode(['success' => false, 'message' => 'Ocorreu um erro de duplicidade de dados.']);
        }
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Ocorreu um erro ao tentar se conectar com o servidor: ' . $e->getMessage()]);
    }
}
