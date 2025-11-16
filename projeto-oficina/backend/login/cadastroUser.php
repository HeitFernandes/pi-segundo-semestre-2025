<?php

require_once __DIR__ . "/../config/db.php";

header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "success" => false,
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
        "success" => false,
        "mensagem" => "Todos os campos são obrigatórios."
    ]);
    exit;
}

if ($senha !== $confirmarSenha) {
    echo json_encode([
        "success" => false,
        "mensagem" => "As senhas não coincidem."
    ]);
    exit;
}

if (strlen($senha) < 6) {
    echo json_encode([
        "success" => false,
        "mensagem" => "A senha deve ter pelo menos 6 caracteres."
    ]);
    exit;
}

$stmt = $pdo->prepare("SELECT id FROM usuarios WHERE nome = ?");
$stmt->execute([$nome]);

if ($stmt->fetch()) {
    echo json_encode([
        "success" => false,
        "mensagem" => "Usuário já existe. Escolha outro nome."
    ]);
    exit;
}

$senhaHash = password_hash($senha, PASSWORD_DEFAULT);

$stmt = $pdo->prepare("INSERT INTO usuarios (nome, senha) VALUES (?, ?)");

if ($stmt->execute([$nome, $senhaHash])) {
    echo json_encode([
        "success" => true,
        "mensagem" => "Usuário cadastrado com sucesso."
    ]);
    exit;
} else {
    echo json_encode([
        "success" => false,
        "mensagem" => "Erro ao cadastrar usuário."
    ]);
    exit;
}
