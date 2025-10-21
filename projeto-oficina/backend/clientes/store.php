<?php

header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config/db.php';

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->nome) && !empty($data->cpf) && !empty($data->email)) {
    try {
        $stmt = $pdo->prepare('INSERT INTO tb_cliente (CLI_NOME, CLI_CPF, CLI_TELEFONE, CLI_ENDERECO, CLI_CEP, CLI_BAIRRO, CLI_NUMERO, CLI_EMAIL, CLI_OBSERVACAO) VALUES (:nome, :cpf, :telefone, :endereco, :cep, :bairro, :numero, :email, :obs)');

        $nome = htmlspecialchars(strip_tags($data->nome ?? ''));
        $cpf = htmlspecialchars(strip_tags($data->cpf ?? ''));
        $telefone = htmlspecialchars(strip_tags($data->telefone ?? ''));
        $endereco = htmlspecialchars(strip_tags($data->endereco ?? ''));
        $cep = htmlspecialchars(strip_tags($data->cep ?? ''));
        $bairro = htmlspecialchars(strip_tags($data->bairro ?? ''));
        $numero = htmlspecialchars(strip_tags($data->numero ?? ''));
        $email = htmlspecialchars(strip_tags($data->email ?? ''));
        $obs = htmlspecialchars(strip_tags($data->observacao ?? ''));

        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':cpf', $cpf);
        $stmt->bindParam(':telefone', $telefone);
        $stmt->bindParam(':endereco', $endereco);
        $stmt->bindParam(':cep', $cep);
        $stmt->bindParam(':bairro', $bairro);
        $stmt->bindParam(':numero', $numero);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':obs', $obs);

        if ($stmt->execute()) {
            http_response_code(201);
            echo json_encode(["success" => true, "message" => "Cliente cadastrado com sucesso."]);
        } else {
            http_response_code(503);
            $errorInfo = $stmt->errorInfo();
            echo json_encode(["success" => false, "message" => "Não foi possível cadastrar o cliente", "error" => $errorInfo[2]]);
        };
    } catch (PDOException $e) {
        if ($e->getCode() === '23000') {

            $errorMessage = $e->getMessage();

            if (strpos($errorMessage, 'CLI_EMAIL') !== false) {
                http_response_code(409);
                echo json_encode(["success" => false, "message" => "Esse e-mail já está sendo utilizado, utilize outro."]);
            } else if (strpos($errorMessage, 'CLI_CPF' !== false)) {
                http_response_code(409);
                echo json_encode(["success" => false, "message" => "Esse CPF já foi cadastrado."]);
            } else {
                http_response_code(409);
                echo json_encode(["success" => false, "message" => "Ocorreu um erro de duplicidade de dados."]);

            }
        } else {
            http_response_code(500);
            echo json_encode(["success" => false, "message" => "Não foi possível se conectar com o banco de dados." . $e->getMessage()]);
        }
    }
}
