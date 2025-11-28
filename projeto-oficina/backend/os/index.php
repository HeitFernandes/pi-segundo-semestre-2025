<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config/db.php';

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    http_response_code(200);
    exit;
}

try {
    $stmt = $pdo->prepare('SELECT ORDEM_ID, ORDEM_DATA_ABERTURA, ORDEM_SERVICO_REALIZADO, ORDEM_VALOR_TOTAL, ORDEM_STATUS, FUN_NOME, MOTO_PLACA, CLI_NOME FROM tb_ordem_de_servico
    INNER JOIN tb_funcionario ON tb_ordem_de_servico.ORDEM_FUNCIONARIO = tb_funcionario.FUN_ID
    INNER JOIN tb_moto ON tb_ordem_de_servico.ORDEM_MOTO = tb_moto.MOTO_ID
    INNER JOIN tb_cliente ON tb_ordem_de_servico.ORDEM_CLIENTE = tb_cliente.CLI_ID');
    $stmt->execute();
    $ordens = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if($ordens) {
        http_response_code(200);
        echo json_encode(['success' => true, 'ordens' => $ordens]);
    } else {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'A Baco Motos ainda não possui ordens de serviço.']);
    }
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ocorreu um erro ao tentar se conectar com o servidor.']);
}

?>