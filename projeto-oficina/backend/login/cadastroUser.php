<?php

require_once __DIR__ . "/../config/db.php";

header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "status" => "erro",
        "mensagem" => "Método não permitido."
    ]);
    exit;
}

$dados = json_decode(file_get_contents("php://input"), true);

$nome = trim($dados["nome"] ?? "");
$senha = $dados["senha"] ?? "";
$confirmarSenha = $dados["confirmarSenha"] ?? "";

if (!$nome || !$senha || !$confirmarSenha) {
    echo json_encode([
        "status" => "erro",
        "mensagem" => "Todos os campos são obrigatórios."
    ]);
    exit;
}

if ($senha !== $confirmarSenha) {
    echo json_encode([
        "status" => "erro",
        "mensagem" => "As senhas não coincidem."
    ]);
    exit;
}

if (strlen($senha) < 6) {
    echo json_encode([
        "status" => "erro",
        "mensagem" => "A senha deve ter pelo menos 6 caracteres."
    ]);
    exit;
}


$stmt = $pdo->prepare("SELECT id FROM usuarios WHERE nome = ?");
$stmt->execute([$nome]);

if ($stmt->fetch()) {
    echo json_encode([
        "status" => "erro",
        "mensagem" => "Usuário já existe. Escolha outro nome."
    ]);
    exit;
}


$senhaHash = pa
