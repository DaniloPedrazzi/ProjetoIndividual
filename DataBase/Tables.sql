CREATE DATABASE Celeste;
USE Celeste;

CREATE TABLE usuario (
  idUsuario INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  pais CHAR(2) NOT NULL,
  email VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL
);

CREATE TABLE speedrun (
  idSpeedrun INT AUTO_INCREMENT,
  tempoHora INT NOT NULL,
  tempoMinuto INT NOT NULL,
  tempoSegundo INT NOT NULL,
  tempoMilesimo INT NOT NULL,
  mortes INT NOT NULL,
  categoria VARCHAR(45) NOT NULL,
  plataforma VARCHAR(45) NOT NULL,
  linkConfirmacao VARCHAR(255),
  dataSpeedrun DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  fkUsuario INT,
  CONSTRAINT pkComposta PRIMARY KEY (idspeedrun, fkUsuario),
  CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idusuario)
);