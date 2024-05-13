<?php

    if ($_POST){
        $user = $_POST['user'];
        echo $user;
    }
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <!-- Hoja de estilo -->
    <link rel="stylesheet" href="assets/css/styles.css">
    <!-- Fuente - conexión -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet">
    <!-- Iconos de la página web -->
    <script src="https://kit.fontawesome.com/8219737d4a.js" crossorigin="anonymous"></script>
</head>
<body>
    <main>
        <div class="form-container">
            <h1>Inicia Sesión</h1>
            <form id="form" action="" method="post">
                <div class="form-item">
                    <input id="user" type="text"  name="user" autocomplete="off" class="form-input" placeholder=" " required>
                    <label for="user" class="form-label"> Usuario</label>
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="form-item">
                    <input id="password" type="password" name="pass" class="form-input" placeholder=" " required>
                    <label for="password" class="form-label">Contraseña</label>
                    <i class="fa-solid fa-lock"></i>
                </div>
                <button class="form-btn" type="submit">Iniciar sesión</button>
                <div class="message">
                    <p>¿Aun no estas registrado? &nbsp;<a href="registro.php">Regístrate</a></p>  
                </div>
                <p class="warning" id="warning"></p>
            </form>
        </div>
    </main>
    <footer>
    </footer>
    <!-- Enlace a JavaScript -->
    <script src="assets/js/index.js"></script>
</body>
</html>
