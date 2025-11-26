<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config/db.php';

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    http_response_code(200);
    exit;
}

$id_agendamento = $_GET['id'];

if(!$id_agendamento) {
    http_response_code(404);
    echo json_encode(['success' => false, 'message' => 'ID não fornecido.']);
    exit;
}

try {
    $stmt = $pdo->prepare('DELETE FROM tb_agendamento_de_servico WHERE AGEN_ID = ?');
    $stmt->execute([$id_agendamento]);
    
    if($stmt->rowCount() > 0) {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Agendamento excluído com sucesso.']);
    } else {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Agendamento não encontrado.']);
    }
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ocorreu um erro ao tentar se conectar com o servidor: ' . $e->getMessage()]);
}

?>