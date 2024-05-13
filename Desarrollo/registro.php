<?php
    if($_POST){
        require_once 'php/controllers/database.php';
        $db = new Database();

        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $user = $_POST['mail'];
        $pass = $_POST['pass'];
        if ($db->insertar($name, $surname, $user, $pass) ) {
            echo "Usuario registrado correctamente.";
        } else {
            echo "Error al registrar el usuario.";
        }
        $db->cerrarConexion();
    }
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <!-- <link rel="stylesheet" href="assets/css/normalize.css"> -->
    <link rel="stylesheet" href="assets/css/styles.css">
    <!-- Fuente - conexión -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet">
    <!-- Iconos de la página web -->
    <script src="https://kit.fontawesome.com/8219737d4a.js" crossorigin="anonymous"></script>
</head>
<body>
    <header></header>
    <main>
        <div class="form-container">
            <h1>Regístrate</h1>
            <form id="form-register" action="" method="post">
                <div class="form-item">
                    <input id="name" type="text"  name="name" autocomplete="off" class="form-input" placeholder=" " required>
                    <label for="name" class="form-label">Nombre</label>
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="form-item">
                    <input id="surname" type="text" name="surname" autocomplete="off" class="form-input" placeholder=" " required>
                    <label for="surname" class="form-label">Apellido</label>
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="form-item">
                    <input id="mail" type="text" name="mail" autocomplete="off" class="form-input" placeholder=" " required>
                    <label for="mail" class="form-label">Correo</label>
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="form-item">
                    <input id="password" type="password" name="pass" autocomplete="off" class="form-input" placeholder=" " required>
                    <label for="password" class="form-label">Contraseña</label>
                    <i class="fa-solid fa-lock"></i>
                </div>
                <div class="form-item">
                    <input id="password-confirm" type="password" name="pass-confirm" class="form-input" placeholder=" " required>
                    <label for="password-confirm" class="form-label">Confirmar contraseña</label>
                    <i class="fa-solid fa-lock"></i>
                </div>
                <button class="form-btn" type="submit">Registrarse</button>
                <div class="message">
                    <p>¿Estás registrado? &nbsp;<a href="index.php">Inicia sesión</a></p>  
                </div>
                <p class="warning" id="warning"></p>
            </form>
        </div>
        <div class="redes-container">
            <h2>Regístrate con</h2>
            <svg class="svg-fb" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 50 50">
                <title>Facebook</title>
                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
            </svg>
        </div>
    </main>
</body>
<!-- Enlace a JavaScript -->
<!-- <script src="assets/js/registro.js"></script> -->
</html>