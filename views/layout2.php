<?php

// s'il y a encore du js sur une page avec le onload, il faut ajouter un autre elseif avec la fonction d'initialisation
global $route;
$controllers=$route->formatUrl();
if ($controllers[1]=="a2cartes"){
  $load="params();";
}

else{
  $load="";
}
 ?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta property="og:title" content="Wild West Solitaire : jeu de Cartes en ligne sur Jeux-Gratuits.com" />
  <meta property="og:url" content="https://www.jeux-gratuits.com/jeu-wild-west-solitaire.html" />
  <title>Escape_web2</title>
  <link rel="stylesheet" type="text/css" media="screen" href="/Escape_web/acte2.css">
</head>
<body>

    <?php
	require_once $content;
     ?>

  <script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="../acte2.js"></script>
  </body>
</html>
