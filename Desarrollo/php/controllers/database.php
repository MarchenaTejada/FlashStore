<?php 
class Database {
    private $host = 'localhost';
    private $usuario = 'root';
    private $contrasena = 'root';
    private $bd = 'login';

    protected $conexion;

    public function __construct() {
        $this->conexion = new mysqli($this->host, $this->usuario, $this->contrasena, $this->bd);

        if ($this->conexion->connect_error) {
            die("Error de conexión: " . $this->conexion->connect_error);
        }
    }

    public function insertar($name, $surname, $user, $pass) {
        $stmt = $this->conexion->prepare("INSERT INTO usuario (name, surname, mail, pass) VALUES (?, ?, ?, ?)");
        $stmt->bind_param ("ssss", $name, $surname, $user, $pass);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
        $stmt->close();
    }

    public function cerrarConexion() {
        $this->conexion->close();
    }
}

?>