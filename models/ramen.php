<?php
$dbconn = null;
if(getenv('DATABASE_URL')){
$connectionConfig = parse_url(getenv('DATABASE_URL'));
$host = $connectionConfig['host'];
$user = $connectionConfig['user'];
$password = $connectionConfig['pass'];
$port = $connectionConfig['port'];
$dbname = trim($connectionConfig['path'],'/');
$dbconn = pg_connect(
"host=".$host." ".
"user=".$user." ".
"password=".$password." ".
"port=".$port." ".
"dbname=".$dbname
);
} else {
$dbconn = pg_connect("host=localhost dbname=ramenshop");
}

class Order {
    public $id;
    public $ingredient1;
    public $ingredient2;
    public $ingredient3;
    public $ingredient4;
    public $ingredient5;
    public $ingredient6;
    public $ingredient7;
    public $ingredient8;




  public function __construct($id, $ingredient1, $ingredient2, $ingredient3, $ingredient4, $ingredient5, $ingredient6, $ingredient7, $ingredient8) {
      $this->id = $id;
      $this->ingredient1  = $ingredient1;
      $this->$ingredient2 = $ingredient2;
      $this->$ingredient3 = $ingredient3;
      $this->$ingredient4 = $ingredient4;
      $this->$ingredient5 = $ingredient5;
      $this->$ingredient6 = $ingredient6;
      $this->$ingredient7 = $ingredient7;
      $this->$ingredient8 = $ingredient8;
  }
}

class Orders {
  //all Ramen function
  static function all(){
    $ramen = array();
    $results = pg_query("SELECT * FROM ramen");

    $order = pg_fetch_object($results);
    while ($order) {
      $newBowl = new Order(
          intval($order->id),
          $order->ingredient1,
          $order->ingredient2,
          $order->ingredient3,
          $order->ingredient4,
          $order->ingredient5,
          $order->ingredient6,
          $order->ingredient7,
          $order->ingredient8,
      );
        $ramen[]=$newBowl;
        $order = pg_fetch_object($results);
    }
    return $ramen;
  }

  static function create($order){
    $query = "INSERT INTO ramen (ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
    $queryParams =array($order->ingredient1, $order->ingredient2, $order->ingredient3, $order->ingredient4, $order->ingredient5, $order->ingredient6, $order->ingredient7, $order->ingredient8);
    pg_query_params($query, $queryParams);
    // $queryParams = array($order->Leland, $order->CHK, $order->kombu")
    return self::all();
  }


  static function update($orderUpdt) {
    $query = "UPDATE ramen SET guest=$1, typeoframen=$2, toppings=$3 WHERE id=$4";
    $queryParams = array(
        $orderUpdt->guest,
        $orderUpdt->typeoframen,
        $orderUpdt->toppings,
        $orderUpdt->id
    );
    $result = pg_query_params($query, $queryParams);

    return self::all();
  }

  static function delete($id){
    $query = "DELETE FROM ramen WHERE id = $1";
    $queryParams = array($id);
    $result = pg_query_params($query, $queryParams);

    return self::all();
  }
}


 ?>
