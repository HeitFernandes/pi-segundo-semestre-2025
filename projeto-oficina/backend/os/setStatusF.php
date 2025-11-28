<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, UPDATE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config/db.php';

if($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

$id_ordem = $_GET['id'];

if(!$id_ordem) {
    http_response_code(404);
    echo json_encode(['success' => false, 'message' => 'ID não fornecido.']);
    exit;
}

$novo_status = 'F';

try {
    $stmt = $pdo->prepare('UPDATE tb_ordem_de_servico SET ORDEM_STATUS = ? WHERE ORDEM_ID = ?');
    $stmt->execute([$novo_status, $id_ordem]);

    if($stmt->rowCount() > 0) {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Ordem finalizada com sucesso.']);
    } else {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Não foi possível finalizar a ordem.']);
    }
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ocorreu um erro ao tentar se conectar com o servidor: ' . $e->getMessage()]);
}

?>