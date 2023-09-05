CREATE TABLE usuarios (
	id INT NOT NULL,sale_equipo
	nombre_usuario VARCHAR(25) NOT NULL,
	email VARCHAR(50) NOT NULL,
	contraseña VARCHAR(20) NOT NULL,
	nombre VARCHAR(30) NOT NULL,
	apellido VARCHAR(30) NOT NULL,
	genero ENUM("Masculino", "Femenino", "Otro", "Prefiero no decirlo") NOT NULL,
	fecha_nac DATE NOT NULL,
	avatar_id INT NOT NULL,
	foto_perfil VARCHAR(200) NOT NULL
)