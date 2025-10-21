<?php 

// Cabeçalhos para permitir requisições feitas do REACT, para o CORS não bloquear
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config/db.php';

// Se for OPTIONS chegando, ele só irá retornar 200 e continuar o código, dessa forma, o AXIOS não irá travar e pular para o CATCH
if($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

try {
    // Limite de clientes por Query
    $limit = 10;
    // Se a página na URL não foi enviada, ela será a 1
    $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
    // Definindo quantos clientes eu devo pular, baseado na página
    $offset = ($page - 1) * $limit;
    // Parâmetro do search, se não for enviado, será uma string vazia
    $search = $_GET['search'] ?? '';

    $where_clause = "";
    $params = [];

    // Lógica para a buscar de clientes no frontend
    if(!empty($search)) {
        $where_clause = " WHERE CLI_NOME LIKE :search OR CLI_CPF LIKE :search";
        $params[':search'] = '%' . $search . '%';
    }

    // Query para buscar o total de clientes cadastrados
    $total_query = "SELECT COUNT(CLI_ID) FROM tb_cliente" . $where_clause;
    $total_stmt = $pdo->prepare($total_query);
    // Parâmetros do COUNT
    $total_stmt->execute($params);
    $total_rows = $total_stmt->fetchColumn();

    $total_pages = ceil($total_rows / $limit);

    // Query principal que irá fornecer todos os clientes cadastrados
    $query = "SELECT CLI_ID, CLI_NOME, CLI_CPF, CLI_EMAIL, CLI_TELEFONE, CLI_ATIVO FROM tb_cliente" . $where_clause . " ORDER BY CLI_ID ASC LIMIT :limit OFFSET :offset";

    $stmt = $pdo->prepare($query);

    // Parâmetros para serem utilizados no BIND
    $params[':limit'] = $limit;
    $params[':offset'] = $offset;
    
    // Se os parâmetros enviados forem limit e offset, será um INTEIRO, se não, será o SEARCH que está enviando os parâmetros, por isso, será uma STRING
    foreach($params as $key => &$val) {
        $type = (in_array($key, [':limit', ':offset'])) ? PDO::PARAM_INT : PDO::PARAM_STR;
        $stmt->bindParam($key, $val, $type);
    }

    $stmt->execute();

    // Criando um array associativo
    $clientes = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Retornando a QUERY principal
        // 200 é OK
        http_response_code(200);
        echo json_encode(["success" => true, "clientes" => $clientes, "pagination" => ["currentPage" => $page, "totalPages" => $total_pages, "totalClients" => $total_rows]]);

} catch(PDOException $e) {
    // 500 é internal SERVER ERROR
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Erro ao buscar clientes: " . $e->getMessage()]);
}
?>