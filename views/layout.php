<?php

// s'il y a encore du js sur une page avec le onload, il faut ajouter un autre elseif avec la fonction d'initialisation
global $route;
$controllers=$route->formatUrl();
if ($controllers[1]=="gps"){
  $load="initialiser();";
}

elseif ($controllers[1]=="taquin") {
  $load="init();";
}
else{
  $load="";
}
 ?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Escape_web</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" media="screen" href="/Escape_web/Index.css">

  <link href="https://fonts.googleapis.com/css?family=Ranga" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Black+Han+Sans|Playfair+Display" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Playfair+Display+SC" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Chakra+Petch" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Sedgwick+Ave" rel="stylesheet">
  <script async defer type="text/javascript" src="http://maps.google.com/maps/api/js?key=AIzaSyDKXWXc7s4gIAwcMX15lj2nC2tZSuE61WE"></script>

</head>
  <body onload="<?php echo $load;       ?>">


    <?php
	require_once $content;

     ?>


    <script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>

    <script src="../Index.js"></script>






  </body>
</html>
