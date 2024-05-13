<?php
    if($_POST){
        require_once 'php/controllers/database.php';
        $db = new Database();

        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $user = $_POST['mail'];
        $pass = $_POST['pass'];
        if ($db->insertar($name, $surname, $user, $pass) ) { echo "Usuario
registrado correctamente."; } else { echo "Error al registrar el usuario."; }
$db->cerrarConexion(); } ?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Registro</title>
    <!-- <link rel="stylesheet" href="assets/css/normalize.css"> -->
    <link rel="stylesheet" href="assets/css/styles.css" />
    <!-- Fuente - conexión -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap"
        rel="stylesheet" />
    <!-- Iconos de la página web -->
    <script src="https://kit.fontawesome.com/8219737d4a.js" crossorigin="anonymous"></script>
    <style></style>
</head>

<body>
    <header></header>
    <main>
        <div class="form-container">
            <h1>Regístrate</h1>
            <form id="form-register" action="" method="post">
                <div class="double">
                    <div class="form-item">
                        <input id="name" type="text" name="name" autocomplete="off" class="form-input" placeholder=" "
                            required />
                        <label for="name" class="form-label">Nombres</label>
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="form-item">
                        <input id="surname" type="text" name="surname" autocomplete="off" class="form-input"
                            placeholder=" " required />
                        <label for="surname" class="form-label">Apellidos</label>
                        <i class="fa-solid fa-user"></i>
                    </div>
                </div>

                <div class="form-item">
                    <input id="mail" type="text" name="mail" autocomplete="off" class="form-input" placeholder=" "
                        required />
                    <label for="mail" class="form-label">Correo</label>
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="form-item">
                    <input id="password" type="password" name="pass" autocomplete="off" class="form-input"
                        placeholder=" " required />
                    <label for="password" class="form-label">Contraseña</label>
                    <i class="fa-solid fa-lock"></i>
                </div>
                <div class="form-item">
                    <input id="password-confirm" type="password" name="pass-confirm" class="form-input" placeholder=" "
                        required />
                    <label for="password-confirm" class="form-label">Confirmar contraseña</label>
                    <i class="fa-solid fa-lock"></i>
                </div>
                <button class="form-btn" type="submit">Registrarse</button>
                <div class="message">
                    <p>
                        ¿Estás registrado? &nbsp;<a href="index.php">Inicia sesión</a>
                    </p>
                </div>
                <p class="warning" id="warning"></p>
            </form>
        </div>
        <div class="redes-container">
            <div class="separator">
                <hr class="line" />
                <h2>O</h2>
                <hr class="line" />
            </div>
            <div class="flex-row">
                <button class="btn google">
                    <svg version="1.1" width="20" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512"
                        style="enable-background: new 0 0 512 512" xml:space="preserve">
                        <path style="fill: #fbbb00" d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
            c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
            C103.821,274.792,107.225,292.797,113.47,309.408z"></path>
                        <path style="fill: #518ef8" d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
            c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
            c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z">
                        </path>
                        <path style="fill: #28b446" d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
            c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
            c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"></path>
                        <path style="fill: #f14336" d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
            c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
            C318.115,0,375.068,22.126,419.404,58.936z"></path>
                    </svg>

                    Continúa con Google</button><button class="btn fb">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" viewBox="0 0 48 48">
                        <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993"
                            y2="40.615" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#2aa4f4"></stop>
                            <stop offset="1" stop-color="#007ad9"></stop>
                        </linearGradient>
                        <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                            d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
                        <path fill="#fff"
                            d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z">
                        </path>
                    </svg>
                    Continúa con Facebook
                </button>
            </div>
        </div>
    </main>
</body>
<!-- Enlace a JavaScript -->
<!-- <script src="assets/js/registro.js"></script> -->

</html>