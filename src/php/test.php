<?php
header('Content-Type: application/json');

// 获取原始请求体中的数据
$requestData = file_get_contents("php://input");
$data = json_decode($requestData, true); // 将JSON数据解码为关联数组

// 获取 GET 参数
$token = $_GET['token'];
$username = $_GET['username'];

// 处理数据
// 在这里你可以根据实际需求进行业务逻辑处理
// 例如，你可以访问 $data、$token 和 $username 变量

// 返回响应
$response = array('status' => 'success', 'message' => 'Data received successfully');
echo json_encode($response);
?>
