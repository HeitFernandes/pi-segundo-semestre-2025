<?php

header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config/db.php';

if($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

$id = $_GET['id'] ?? null;

if(!$id) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "ID não fornecido"]);
    exit;
}

try {
    $stmt = $pdo->prepare("SELECT * FROM tb_cliente WHERE CLI_ID = :id");
    $stmt->bindValue(':id', $id);
    $stmt->execute();

    $cliente = $stmt->fetch(PDO::FETCH_ASSOC);

    if($cliente) {
        http_response_code(200);
        echo json_encode(["success" => true, "cliente" => $cliente]);
    } else {
        http_response_code(404);
        echo json_encode(["success" => false, "message" => "Cliente não encontrado"]);
    } 
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Erro no servidor: " . $e->getMessage()]);
}

?>