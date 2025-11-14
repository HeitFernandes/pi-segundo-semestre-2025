<?php

header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, UPDATE, POST, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config/db.php';

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

$id_moto = $_GET['id'] ?? null;

if (!$id_moto) {
    http_response_code(404);
    echo json_encode(['success' => false, 'message' => 'ID não fornecido ou não encontrado.']);
    exit;
}

try {
    $stmt = $pdo->prepare('SELECT MOTO_ID, MOTO_PLACA, MOTO_ANO, MARCA_NOME, COR_NOME, MODELO_NOME, CLI_CPF, MOTO_ATIVO FROM tb_moto
    INNER JOIN tb_modelo ON tb_moto.MOTO_MODELO = tb_modelo.MODELO_ID
    INNER JOIN tb_marca ON tb_moto.MOTO_MARCA = tb_marca.MARCA_ID
    INNER JOIN tb_cor ON tb_moto.MOTO_COR = tb_cor.COR_ID
    INNER JOIN tb_cliente ON tb_moto.MOTO_CLIENTE = tb_cliente.CLI_ID
    WHERE MOTO_ID = :id');

    $stmt->bindParam(':id', $id_moto, PDO::PARAM_INT);
    $stmt->execute();

    $moto = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($moto) {
        http_response_code(200);
        echo json_encode(['success' => true, 'moto' => $moto]);
    } else {
        http_response_code(404);
        echo json_encode(['success' => false, 'message' => 'Moto não encontrada.']);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erro ao se conectar com o servidor: ' . $e->getMessage()]);
}
