-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema COMIDARAPIDA
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema COMIDARAPIDA
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `COMIDARAPIDA` DEFAULT CHARACTER SET utf8 ;
USE `COMIDARAPIDA` ;

-- -----------------------------------------------------
-- Table `COMIDARAPIDA`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COMIDARAPIDA`.`clientes` (
  `idclientes` INT NOT NULL,
  `nombre_completo` NVARCHAR(30) NOT NULL,
  `direccion` NVARCHAR(45) NOT NULL,
  `telefono` NVARCHAR(10) NOT NULL,
  PRIMARY KEY (`idclientes`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre_completo` ASC),
  UNIQUE INDEX `telefono_UNIQUE` (`telefono` ASC),
  UNIQUE INDEX `idclientes_UNIQUE` (`idclientes` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `COMIDARAPIDA`.`empleados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COMIDARAPIDA`.`empleados` (
  `idempleados` INT NOT NULL,
  `nombre_completo` NVARCHAR(30) NOT NULL,
  `cargo` NVARCHAR(20) NOT NULL,
  `turno` NVARCHAR(15) NOT NULL,
  PRIMARY KEY (`idempleados`),
  UNIQUE INDEX `nombre completo_UNIQUE` (`nombre_completo` ASC),
  UNIQUE INDEX `idempleados_UNIQUE` (`idempleados` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `COMIDARAPIDA`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COMIDARAPIDA`.`productos` (
  `idproductos` INT NOT NULL,
  `nombre_articulo` NVARCHAR(25) NOT NULL,
  `categoria` NVARCHAR(15) NOT NULL,
  `precio` DOUBLE(6,2) NOT NULL,
  PRIMARY KEY (`idproductos`),
  UNIQUE INDEX `nombre del articulo_UNIQUE` (`nombre_articulo` ASC),
  UNIQUE INDEX `precio_UNIQUE` (`precio` ASC),
  UNIQUE INDEX `idproductos_UNIQUE` (`idproductos` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `COMIDARAPIDA`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COMIDARAPIDA`.`pedidos` (
  `idpedido` INT NOT NULL,
  `fecha` DATE NOT NULL,
  `hora` TIME NOT NULL,
  `tipo_servicio` NVARCHAR(10) NOT NULL,
  `estado` NVARCHAR(15) NOT NULL,
  `clientes_idclientes` INT NOT NULL,
  `empleados_idempleados` INT NOT NULL,
  PRIMARY KEY (`idpedido`),
  INDEX `fk_pedidos_clientes1_idx` (`clientes_idclientes` ASC),
  INDEX `fk_pedidos_empleados1_idx` (`empleados_idempleados` ASC),
  UNIQUE INDEX `idpedido_UNIQUE` (`idpedido` ASC),
  CONSTRAINT `fk_pedidos_clientes1`
    FOREIGN KEY (`clientes_idclientes`)
    REFERENCES `COMIDARAPIDA`.`clientes` (`idclientes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_empleados1`
    FOREIGN KEY (`empleados_idempleados`)
    REFERENCES `COMIDARAPIDA`.`empleados` (`idempleados`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `COMIDARAPIDA`.`detalle_pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COMIDARAPIDA`.`detalle_pedido` (
  `iddetalle_pedido` INT NOT NULL,
  `cantidad` INT NULL,
  `precio_total` DOUBLE(6,2) NOT NULL,
  `pedidos_idpedido` INT NOT NULL,
  `productos_idproductos` INT NOT NULL,
  PRIMARY KEY (`iddetalle_pedido`),
  UNIQUE INDEX `iddetalle_pedido_UNIQUE` (`iddetalle_pedido` ASC),
  INDEX `fk_detalle_pedido_pedidos1_idx` (`pedidos_idpedido` ASC),
  INDEX `fk_detalle_pedido_productos1_idx` (`productos_idproductos` ASC),
  CONSTRAINT `fk_detalle_pedido_pedidos1`
    FOREIGN KEY (`pedidos_idpedido`)
    REFERENCES `COMIDARAPIDA`.`pedidos` (`idpedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detalle_pedido_productos1`
    FOREIGN KEY (`productos_idproductos`)
    REFERENCES `COMIDARAPIDA`.`productos` (`idproductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `COMIDARAPIDA` ;

-- -----------------------------------------------------
--  _SYNTAX_ERROR
-- -----------------------------------------------------

DELIMITER $$
USE `COMIDARAPIDA`$$
$$

DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
