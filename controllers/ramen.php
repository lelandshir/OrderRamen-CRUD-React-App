<?php
    include_once __DIR__ .'/../models/ramen.php';
    header('Content-Type: application/json');

    if ($_REQUEST['action']==='index') {
      echo json_encode(Orders::all());
    } else if ($_REQUEST['action']==='update') {
      $reqBody = file_get_contents('php://input');
      $objectBody = json_decode($reqBody);
      $orderUpdt = new Order(
          $_REQUEST['id'],
          $objectBody->guest,
          $objectBody->typeoframen,
          $objectBody->toppings
        );
      $allOrders = Orders::update($orderUpdt);
      echo json_encode($allOrders);
    }
    else if ($_REQUEST['action']==='post') {
      $reqBody = file_get_contents('php://input');
      $objectBody= json_decode($reqBody);
      $newOrder = new Order(
        null,
        $objectBody->ingredient1,
        $objectBody->ingredient2,
        $objectBody->ingredient3,
        $objectBody->ingredient4,
        $objectBody->ingredient5,
        $objectBody->ingredient6,
        $objectBody->ingredient7,
        $objectBody->ingredient8);
      $allOrders = Orders::create($newOrder);
      echo json_encode($allOrders);
    }
    else if ($_REQUEST['action'] === 'delete') {
    $allOrders = Orders::delete($_REQUEST['id']);
    echo json_encode($allOrders);
  }
  ?>
