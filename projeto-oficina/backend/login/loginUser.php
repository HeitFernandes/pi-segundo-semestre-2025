<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once "../config/db.php";

$dados = json_decode(file_get_contents("php://input"), true);

$login = trim($dados["login"] ?? "");
$senha = $dados["senha"] ?? "";

if (!$login || !$senha) {
    echo json_encode([
        "success" => false,
        "message" => "Login e senha são obrigatórios."
    ]);
    exit;
}

$stmt = $pdo->prepare("
    SELECT FUN_ID, FUN_LOGIN, FUN_SENHA, FUN_ATIVO
    FROM funcionario
    WHERE FUN_LOGIN = :login
    LIMIT 1
");
$stmt->bindParam(":login", $login);
$stmt->execute();

$usuario = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$usuario) {
    echo json_encode([
        "success" => false,
        "message" => "Usuário não encontrado."
    ]);
    exit;
}

if ($usuario["FUN_ATIVO"] != 1) {
    echo json_encode([
        "success" => false,
        "message" => "Usuário inativo."
    ]);
    exit;
}

if (!password_verify($senha, $usuario["FUN_SENHA"])) {
    echo json_encode([
        "success" => false,
        "message" => "Senha incorreta."
    ]);
    exit;
}

session_start();
$_SESSION["usuario_id"] = $usuario["FUN_ID"];
$_SESSION["usuario_login"] = $usuario["FUN_LOGIN"];

echo json_encode([
    "success" => true,
    "message" => "Login realizado com sucesso.",
    "usuario" => [
        "id" => $usuario["FUN_ID"],
        "login" => $usuario["FUN_LOGIN"]
    ]
]);
