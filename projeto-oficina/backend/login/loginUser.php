<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

require_once "../config/db.php";

$dados = json_decode(file_get_contents("php://input"), true);

$nome = trim($dados["nome"] ?? "");
$senha = $dados["senha"] ?? "";

if (!$nome || !$senha) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Todos os campos são obrigatórios."
    ]);
    exit;
}

$stmt = $pdo->prepare("SELECT id, nome, senha FROM usuarios WHERE nome = :nome LIMIT 1");
$stmt->bindParam(":nome", $nome);
$stmt->execute();

$usuario = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$usuario) {
    http_response_code(401);
    echo json_encode([
        "success" => false,
        "message" => "Usuário não encontrado."
    ]);
    exit;
}

if (!password_verify($senha, $usuario["senha"])) {
    http_response_code(401);
    echo json_encode([
        "success" => false,
        "message" => "Senha incorreta."
    ]);
    exit;
}

session_start();
$_SESSION["usuario_id"]  = $usuario["id"];
$_SESSION["usuario_nome"] = $usuario["nome"];

http_response_code(200);
echo json_encode([
    "success" => true,
    "message" => "Login realizado com sucesso.",
    "usuario" => [
        "id" => $usuario["id"],
        "nome" => $usuario["nome"]
    ]
]);
