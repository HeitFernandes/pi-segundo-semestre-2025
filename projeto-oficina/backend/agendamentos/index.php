<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config/db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    http_response_code(200);
    exit;
}

try {
    $stmt = $pdo->prepare('SELECT AGEN_ID, CLI_NOME, CLI_CPF, MOTO_PLACA, FUN_NOME, AGEN_STATUS, AGEN_DATA, AGEN_HORA FROM tb_agendamento_de_servico
    INNER JOIN tb_cliente ON tb_agendamento_de_servico.AGEN_CLIENTE = tb_cliente.CLI_ID
    INNER JOIN tb_moto ON tb_agendamento_de_servico.AGEN_MOTO = tb_moto.MOTO_ID
    INNER JOIN tb_funcionario ON tb_agendamento_de_servico.AGEN_FUNCIONARIO = tb_funcionario.FUN_ID');

    $stmt->execute();
    $agendamentos = $stmt->fetchAll();

    if ($agendamentos) {
        http_response_code(200);
        echo json_encode(['success' => true, 'agendamentos' => $agendamentos]);
    } else {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Nenhum agendamento cadastrado.']);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ocorreu um erro ao tentar se conectar com o servidor: ' . $e->getMessage()]);
}
