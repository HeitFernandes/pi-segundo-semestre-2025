<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, UPDATE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config/db.php';

$id_ordem = $_GET['id'];

if(!$id_ordem) {
    http_response_code(404);
    echo json_encode(['success' => false, 'message' => 'ID não fornecido.']);
    exit;
}

try {
    $stmt = $pdo->prepare('SELECT ORDEM_SERVICO_REALIZADO, ORDEM_VALOR_TOTAL, ORDEM_OBSERVACAO, FUN_NOME, CLI_CPF, MOTO_PLACA
    FROM tb_ordem_de_servico
    INNER JOIN tb_funcionario ON tb_ordem_de_servico.ORDEM_FUNCIONARIO = tb_funcionario.FUN_ID
    INNER JOIN tb_cliente ON tb_ordem_de_servico.ORDEM_CLIENTE = tb_cliente.CLI_ID
    INNER JOIN tb_moto ON tb_ordem_de_servico.ORDEM_MOTO = tb_moto.MOTO_ID
    WHERE ORDEM_ID = ?');
    $stmt->execute([$id_ordem]);
    $ordem = $stmt->fetch(PDO::FETCH_ASSOC);

    if($ordem) {
        http_response_code(200);
        echo json_encode(['success' => true, 'ordem' => $ordem]);
    } else {
        http_response_code(404);
        echo json_encode(['success' => false, 'message' => 'Ordem de serviço não encontrada.']);
    }
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ocorreu um erro ao tentar se conectar com o servidor: ' . $e->getMessage()]);
}

?>