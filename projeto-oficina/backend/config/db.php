<?php
$isAzureEnvironment = getenv('WEBSITE_SITE_NAME');

if ($isAzureEnvironment) {
    // Ambiente de produção (Azure + Railway)
    $host     = getenv('DB_HOST');
    $db_name  = getenv('DB_NAME');
    $username = getenv('DB_USER');
    $password = getenv('DB_PASS');
    $port     = getenv('DB_PORT');
    
    $dsn = "mysql:host=$host;port=$port;dbname=$db_name;charset=utf8";

} else {
    // Ambiente local (localhost)
    $host     = 'localhost';
    $db_name  = 'mainteer';
    $username = 'root';
    $password = '';
    
    $dsn = "mysql:host=$host;dbname=$db_name;charset=utf8";
}

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch(PDOException $e) {
    die('Erro ao conectar com o banco de dados: ' . $e->getMessage());
}

?>