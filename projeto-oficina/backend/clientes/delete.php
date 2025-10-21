<?php

header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: DELETE, OPTIONS"); 
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config/db.php';

if($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

$id = $_GET['id'] ?? null;

if(!$id) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "ID não encontrado"]);
    exit;
}

try {
    $stmt = $pdo->prepare('DELETE FROM tb_cliente WHERE CLI_ID = :id');
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);

    if($stmt->execute()) {
        http_response_code(200);
        echo json_encode(["success" => true, "message" => "Cliente apagado com sucesso."]);

    }else {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Erro ao apagar cliente."]);
    }
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Erro ao se conectar com o servidor." . $e->getMessage()]);

}

?>