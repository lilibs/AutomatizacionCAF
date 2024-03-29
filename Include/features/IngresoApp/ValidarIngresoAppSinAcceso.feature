#Author: lsepulvedap@intergrupo.com

@IngresoApp
Feature: Ingreso a la aplicación 
  Yo como usuario sin permisos deseo ingresar a la aplicación de Tesorería

    @ValidarIngresoSinAcceso
  Scenario: Validación ingreso a la aplicación al ingresar con un usuario que no tiene permisos en la aplicación
    Given El usuario ingresa a la página principal 
    When se ubica en la opción de Inicio
    Then se presenta un mensaje de error