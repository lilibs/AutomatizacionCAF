#Author: lsepulvedap@intergrupo.com

@IngresoApp
Feature: Ingreso a la aplicación 
  Yo como usuario con permisos de acceso deseo ingresar a la aplicación de Tesorería

  @ValidarIngresoConAcceso
  Scenario: Validación ingreso a la aplicación
    Given El usuario ingresa a la página principal 
    When se ubica en la opción de Inicio
    Then se presenta un mensaje de Bienvenida a contactos Tesorería
