<?php

$host = '.';
$dbname = '.'; 
$username = '.'; 
$password = '.'; 

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erro na conexão com o banco de dados: " . $e->getMessage());
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = trim($_POST['nome'] ?? '');
    $senha = $_POST['senha'] ?? '';
    $confirmar_senha = $_POST['confirmar_senha'] ?? '';

   
    if (empty($nome) || empty($senha) || empty($confirmar_senha)) {
        echo "<script>alert('Todos os campos são obrigatórios.'); window.history.back();</script>";
        exit;
    }

    if ($senha !== $confirmar_senha) {
        echo "<script>alert('As senhas não coincidem.'); window.history.back();</script>";
        exit;
    }

    if (strlen($senha) < 6) {
        echo "<script>alert('A senha deve ter pelo menos 6 caracteres.'); window.history.back();</script>";
        exit;
    }

    //acaso tenha o mesmo nome
    $stmt = $pdo->prepare("SELECT id FROM usuarios WHERE nome = ?");
    $stmt->execute([$nome]);
    if ($stmt->fetch()) {
        echo "<script>alert('Usuário já existe. Escolha outro nome.'); window.history.back();</script>";
        exit;
    }

    $senha_hash = password_hash($senha, PASSWORD_DEFAULT);

    $stmt = $pdo->prepare("INSERT INTO usuarios (nome, senha) VALUES (?, ?)");
    if ($stmt->execute([$nome, $senha_hash])) {
        echo "<script>alert('Cadastro realizado com sucesso!'); window.location.href='loginpage.html';</script>";
    } else {
        echo "<script>alert('Erro ao cadastrar. Tente novamente.'); window.history.back();</script>";
    }
} else {
  
    header('Location: index.html'); 
    exit;
}
?>