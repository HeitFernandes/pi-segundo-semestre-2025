<?php

header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: UPDATE, POST, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config/db.php';

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (empty($data['MOTO_ID']) || empty($data['MOTO_PLACA']) || empty($data['MODELO_NOME'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Dados incompletos.']);
    exit;
}

try {
    $marca = $data['MARCA_NOME'];
    if (!empty($marca)) {
        $stmt_marca = $pdo->prepare('SELECT MARCA_ID FROM tb_marca WHERE MARCA_NOME = ?');
        $stmt_marca->execute([$marca]);
        $marca_find = $stmt_marca->fetch();

        if (!$marca_find) {
            $stmt_marca_cadastro = $pdo->prepare('INSERT INTO tb_marca (MARCA_NOME) VALUES (:marca)');
            $stmt_marca_cadastro->bindParam(':marca', $marca);
            $stmt_marca_cadastro->execute();

            $marca_id = $pdo->lastInsertId();
        } else {
            $marca_id = $marca_find['MARCA_ID'];
        }
    }

    $modelo = $data['MODELO_NOME'] ?? '';
    if (!empty($modelo)) {
        $stmt_modelo = $pdo->prepare('SELECT MODELO_ID FROM tb_modelo WHERE MODELO_NOME = ? AND MODELO_MARCA = ?');
        $stmt_modelo->execute([$modelo, $marca_id]);
        $modelo_find = $stmt_modelo->fetch();

        if (!$modelo_find) {
            $stmt_modelo_cadastro = $pdo->prepare('INSERT INTO tb_modelo (MODELO_NOME, MODELO_MARCA) VALUES (:modelo, :marca)');
            $stmt_modelo_cadastro->bindParam(':modelo', $modelo);
            $stmt_modelo_cadastro->bindParam(':marca', $marca_id);
            $stmt_modelo_cadastro->execute();

            $modelo_id = $pdo->lastInsertId();
        } else {
            $modelo_id = $modelo_find['MODELO_ID'];
        }
    }

    $cor = $data['COR_NOME'];
    if (!empty($cor)) {
        $stmt_cor = $pdo->prepare('SELECT COR_ID from tb_cor WHERE COR_NOME = ?');
        $stmt_cor->execute([$cor]);
        $cor_find = $stmt_cor->fetch();

        if (!$cor_find) {
            $stmt_cor_cadastro = $pdo->prepare('INSERT INTO tb_cor (COR_NOME) VALUES (:cor)');
            $stmt_cor_cadastro->bindParam(':cor', $cor);
            $stmt_cor_cadastro->execute();

            $cor_id = $pdo->lastInsertId();
        } else {
            $cor_id = $cor_find['COR_ID'];
        }
    }

    $cpf_cliente = $data['CLI_CPF'];
    $stmt_cliente = $pdo->prepare('SELECT CLI_ID from tb_cliente WHERE CLI_CPF = ?');
    $stmt_cliente->execute([$cpf_cliente]);
    $id_cliente = $stmt_cliente->fetch();

    if (!$id_cliente) {
        http_response_code(404);
        echo json_encode(['success' => false, 'message' => 'Cliente não encontrado ou não cadastrado.']);
        exit;
    }

    $cliente_id = $id_cliente['CLI_ID'];

    $stmt = $pdo->prepare(
        'UPDATE tb_moto
    SET MOTO_PLACA = :placa,
    MOTO_ANO = :ano,
    MOTO_MARCA = :marca,
    MOTO_COR = :cor,
    MOTO_MODELO = :modelo,
    MOTO_CLIENTE = :cliente,
    MOTO_OBSERVACAO = :observacao,
    MOTO_ATIVO = :ativo
    WHERE MOTO_ID = :id'
    );

    $stmt->bindValue(':placa', htmlspecialchars(strip_tags($data['MOTO_PLACA'] ?? '')));
    $stmt->bindValue(':ano', htmlspecialchars(strip_tags($data['MOTO_ANO'] ?? '')));
    $stmt->bindValue(':marca', $marca_id);
    $stmt->bindValue(':cor', $cor_id);
    $stmt->bindValue(':modelo', $modelo_id);
    $stmt->bindValue(':cliente', $cliente_id);
    $stmt->bindValue(':observacao', htmlspecialchars(strip_tags($data['MOTO_OBSERVACAO'] ?? '')));
    $stmt->bindValue(':ativo', htmlspecialchars(strip_tags($data['MOTO_ATIVO'] ?? '')));
    $stmt->bindValue(':id', $data['MOTO_ID'], PDO::PARAM_INT);

    $stmt->execute();

    if ($stmt->rowCount() == 0) {
        http_response_code(200);
        echo json_encode(['equal' => true, 'message' => 'Nenhum dado foi alterado.']);
    } else if ($stmt->rowCount() > 0) {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Moto alterada com sucesso.']);
    } else {
        http_response_code(503);
        echo json_encode(['success' => false, 'message' => 'Não foi possível atualizar a moto.']);
    }
} catch (PDOException $e) {
    if ($e->getCode() === '23000') {
        http_response_code(409);
        if (strpos($e->getMessage(), 'MOTO_PLACA_UNIQUE') !== false) {
            echo json_encode(['success' => false, 'message' => 'Essa placa já foi utilizada.']);
        } else {
            http_response_code(409);
            echo json_encode(['success' => false, 'message' => 'Ocorreu um erro de duplicidade de dados.']);
        }
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Erro ao se conectar com o servidor: ' . $e->getMessage()]);
    }
}
