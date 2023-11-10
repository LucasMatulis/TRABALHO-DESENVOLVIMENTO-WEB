CREATE SCHEMA IF NOT EXISTS `retroGames` DEFAULT CHARACTER SET utf8 ;
USE `retroGames` ;


CREATE TABLE IF NOT EXISTS `retroGames`.`Jogos` (
  `idJogo` integer NOT NULL auto_increment,
  `nomeJogo` VARCHAR(70) NOT NULL,
  `precoJogo` double NULL,
  `imagemJogo`VARCHAR(800) NULL,
  PRIMARY KEY (`idJogo`),
  UNIQUE INDEX `idJogo_UNIQUE` (`idJogo` ASC) VISIBLE);
  
  CREATE TABLE IF NOT EXISTS `retroGames`.`ADMs` (
  `idADM` integer NOT NULL auto_increment,
  `nome` VARCHAR(70) NOT NULL,
  `senha` VARCHAR(70) NULL,
  PRIMARY KEY (`idADM`),
  UNIQUE INDEX `idADM_UNIQUE` (`idADM` ASC) VISIBLE);