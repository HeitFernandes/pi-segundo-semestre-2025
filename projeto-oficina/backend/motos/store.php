<?php

header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config/db.php';

$data = json_decode(file_get_contents('php://input'), true);

if (!empty($data['placa']) && !empty($data['modelo']) && !empty($data['cpf'])) {

    //Captura de marcas
    if (!empty($data['marca'])) {
        $marca = $data['marca'];
        $stmt_marca = $pdo->prepare('SELECT MARCA_ID from tb_marca WHERE MARCA_NOME = ?');
        $stmt_marca->execute([$marca]);
        $marca_find = $stmt_marca->fetch();

        if (!$marca_find) {
            $stmt_marca_cadastro = $pdo->prepare('INSERT INTO tb_marca (MARCA_NOME) VALUES (:marca)');
            $stmt_marca_cadastro->bindParam(':marca', $marca);
            $stmt_marca_cadastro->execute();

            $id_marca = $pdo->lastInsertId();
        } else {
            $id_marca = $marca_find['MARCA_ID'];
        }
    } else {
        $id_marca = null;
    }

    // Captura de modelos
    if (!empty($data['modelo'])) {
        $modelo = $data['modelo'];
        $stmt_modelo = $pdo->prepare('SELECT MODELO_ID from tb_modelo WHERE MODELO_NOME = ? AND MODELO_MARCA = ?');
        $stmt_modelo->execute([$modelo, $id_marca]);
        $modelo_find = $stmt_modelo->fetch();

        if (!$modelo_find) {
            $stmt_modelo_cadastro = $pdo->prepare('INSERT INTO tb_modelo (MODELO_NOME, MODELO_MARCA) VALUES (:modelo, :marca)');
            $stmt_modelo_cadastro->bindParam(':modelo', $modelo);
            $stmt_modelo_cadastro->bindParam(':marca', $id_marca);
            $stmt_modelo_cadastro->execute();

            $id_modelo = $pdo->lastInsertId();
        } else {
            $id_modelo = $modelo_find['MODELO_ID'];
        }
    }

    // Captura de cor
    if (!empty($data['cor'])) {
        $cor = $data['cor'];
        $stmt_cor = $pdo->prepare('SELECT COR_ID from tb_cor WHERE COR_NOME = ?');
        $stmt_cor->execute([$cor]);
        $cor_find = $stmt_cor->fetch();

        if(!$cor_find){
            $stmt_cor_cadastro = $pdo->prepare('INSERT INTO tb_cor (COR_NOME) VALUES (:cor_nome)');
            $stmt_cor_cadastro->bindParam(':cor_nome', $cor);
            $stmt_cor_cadastro->execute();

            $id_cor = $pdo->lastInsertId();
        } else {
            $id_cor = $cor_find['COR_ID'];
        }
    } else {
        $id_cor = null;
    }


    // Captura de clientes
    $cpf_cliente = $data['cpf'];
    $stmt_cliente = $pdo->prepare('SELECT CLI_ID from tb_cliente WHERE CLI_CPF = ?');
    $stmt_cliente->execute([$cpf_cliente]);
    $id_cliente = $stmt_cliente->fetch();

    if (!$id_cliente) {
        http_response_code(404);
        echo json_encode(['success' => false, 'message' => 'Cliente não encontrado ou não cadastrado.']);
        exit;
    }

    $cliente_id = $id_cliente['CLI_ID'];

    try {
        $stmt = $pdo->prepare('INSERT INTO tb_moto (MOTO_ANO, MOTO_PLACA, MOTO_OBSERVACAO, MOTO_CLIENTE, MOTO_COR, MOTO_MODELO, MOTO_MARCA) VALUES (:ano, :placa, :observacao, :cliente_moto, :cor_moto, :modelo_moto, :marca_moto)');

        $ano = htmlspecialchars(strip_tags($data['ano'] ?? ''));
        $placa = htmlspecialchars(strip_tags($data['placa'] ?? ''));
        $observacao = htmlspecialchars(strip_tags($data['observacao'] ?? ''));

        $stmt->bindParam(':ano', $ano);
        $stmt->bindParam(':placa', $placa);
        $stmt->bindParam(':observacao', $observacao);
        $stmt->bindParam(':cliente_moto', $cliente_id);
        $stmt->bindParam(':cor_moto', $id_cor);
        $stmt->bindParam(':modelo_moto', $id_modelo);
        $stmt->bindParam(':marca_moto', $id_marca);

        if ($stmt->execute()) {
            http_response_code(201);
            echo json_encode(['success' => true, 'message' => 'Moto cadastrada com sucesso.']);
        } else {
            http_response_code(503);
            $errorInfo = $stmt->errorInfo();
            echo json_encode(['success' => false, 'message' => 'Não foi possível cadastrar a moto', 'error' => $errorInfo[2]]);
        };
    } catch (PDOException $e) {
        if ($e->getCode() === '23000') {

            $errorMessage = $e->getMessage();

            if (strpos($errorMessage, 'MOTO_PLACA') !== false) {
                http_response_code(409);
                echo json_encode(['success' => false, 'message' => 'Essa placa já foi cadastrada.']);
            } else {
                http_response_code(409);
                echo json_encode(['success' => false, 'message' => 'Ocorreu um erro de duplicidade de dados.' . $errorMessage]);
            }
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Erro ao se conectar com o servidor: ' . $e->getMessage()]);
        }
    }
}
