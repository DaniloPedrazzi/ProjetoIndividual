DROP DATABASE Celeste;
CREATE DATABASE Celeste;
USE Celeste;

CREATE TABLE usuario (
  idUsuario INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL
);

CREATE TABLE speedrun (
  idSpeedrun INT AUTO_INCREMENT,
  tempo VARCHAR(45) NOT NULL,
  categoria VARCHAR(45) NOT NULL,
  plataforma VARCHAR(45),
  linkConfirmacao VARCHAR(255),
  fkUsuario INT,
  CONSTRAINT pkComposta PRIMARY KEY (idspeedrun, fkUsuario),
  CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idusuario)
);