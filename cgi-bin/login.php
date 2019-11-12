<?php include_once('checkUser.php'); ?>
<!DOCTYPE html>
<html>
<head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="../css/login.css">
        <link rel="stylesheet" type="text/css" href="../css/general.css">
        <link rel="stylesheet" type="text/css" href="../css/room.css">
        <script src="../src/login.js"></script>

</head>
<body>

    <div id="navbar">
        <a href="home.html">Home</a>
        <a href="leaderboard.html">Leaderboard</a>
        <a href="FAQ.html">FAQ</a>
        <a href="about.html">About</a>
        <img src="../images/logo.png" height="45" style="float: right" />    
    </div>

  <form action = "../cgi-bin/login.php" method="POST" id ="login-form">
    <?php include('errors.php'); ?>
    <div id="login">
        <h1 id = "login-text">Login</h1>
        <br>
        <label class="input">
            <input type="text" id="username" name = "username" placeholder="username"/>
        </label>

        <br><br>    

        <label class="input">
            <input type="password" id="password" name = "password" placeholder="password"/>
        </label>

        <br><br>
        <input type="submit" value ="Login" name = "login" class = "general-button">
    </div>

  </form>
</body>
</html>