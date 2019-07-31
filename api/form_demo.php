<?php 
  header("Access-Control-Allow-Origin: *");
  echo json_encode([
    'error' => false,
    'message' => 'Post enviado com sucesso.'
  ]);
?>