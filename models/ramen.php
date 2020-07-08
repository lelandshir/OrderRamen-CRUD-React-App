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
    public $guest;
    public $typeoframen ;
    public $toppings;

  public function __construct($id, $guest, $typeoframen, $toppings) {
      $this->id = $id;
      $this->guest  = $guest;
      $this->typeoframen = $typeoframen;
      $this->toppings  = $toppings;
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
          $order->guest,
          $order->typeoframen,
          $order->toppings
      );
        $ramen[]=$newBowl;
        $order = pg_fetch_object($results);
    }
    return $ramen;
  }

  static function create($order){
    $query = "INSERT INTO ramen (guest, typeoframen, toppings) VALUES ($1, $2, $3)";
    $queryParams =array($order->guest, $order->typeoframen, $order->toppings);
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
