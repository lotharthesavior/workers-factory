<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>

  <!-- components css -->
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="css/assets.css">
  <link rel="stylesheet" type="text/css" href="css/wallet.css">
  <link rel="stylesheet" type="text/css" href="css/store.css">

  <!-- dependencies -->
    <!-- font-awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <!-- odometer -->
    <?php /*
    <link rel="stylesheet" href="libs/odometerjs/themes/odometer-theme-default.css" />
    <script type="text/javascript" src="libs/odometerjs/odometer.js"></script>
    */ ?>
    <!-- Lettering -->
<!--    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/lettering.js/0.7.0/jquery.lettering.js"></script>-->

</head>
<body onload="start()">

<div class="container">

  <?php include "base_models.php"; ?>
  <?php include "assets.php"; ?>
  <?php include "wallet.php"; ?>
  <?php include "store.php"; ?>

</div>

<script src="js/events.js"></script>
<script src="js/constants.js"></script>
<script src="js/global_variables.js"></script>
<script src="js/script.js"></script>
<?php /* <script src="js/odometer.js"></script> */ ?>
<script src="js/commarize.js"></script>

</body>
</html>
