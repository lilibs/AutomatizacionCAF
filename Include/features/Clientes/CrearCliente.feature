#Author: lsepulvedap@intergrupo.com


@CrearCliente
Feature: Creación de clientes con validaciones implementadas

  
  @ValidarCamposRequeridos
  Scenario Outline: Validación campos requeridos
    Given El usuario ingresa a la página principal
    And se ubica en la opción clientes
    When da clic en el link Crear cliente
    And presiona el botón Guardar
    Then Se visualizan los mensajes de validación


  @IrCrearCliente
  Scenario Outline: Ir a crear cliente
    Given El usuario ingresa a la página principal
    And se ubica en la opción clientes
    When da clic en el link Crear cliente
    Then el sistema muestra el formulario Crear Cliente
    
   
   @CrearCliente
   Scenario Outline: Crear cliente
    Given El usuario ingresa a la opción Crear Cliente
    When digita el nombre del cliente <NombreCliente> 
    And digita el BBG Broker ID <IdBBG>
    And selecciona la modalidad cliente disponible el item <itemModalidad>
    And se da clic en el botón transfer to modalidad
    And selecciona en productos disponibles el item <itemProducto>
    And se da clic en el botón transfer to productos
    And se da clic en el botón Guardar
    Then el sistema muestra un mensaje de éxito 

  Examples: 
      | NombreCliente  | IdBBG | itemModalidad  | itemProducto 			| 
 			| Liliana  			 | 5 	   | Activo  				| Act- Time Deposit | 
 

@CancelarCreacionCliente
  Scenario Outline: Cancelar la creación de un cliente
    Given El usuario ingresa a la página principal
    And se ubica en la opción clientes
    When da clic en el link Crear cliente
    And presiona el botón Regresar
    Then se visualiza nuevamente la página principal
