#Author: lsepulvedap@intergrupo.com


@CreacionCliente
Feature: Creación de clientes con validaciones implementadas

	@IrCrearCliente
  Scenario: Ir a crear cliente
    Given El usuario ingresa a la página principal
    And se ubica en la opción clientes
    When da clic en el link Crear cliente
    Then el sistema muestra el formulario Crear Cliente
    
   @CrearCliente
   Scenario Outline: Crear cliente
    Given El usuario ingresa a la opción Crear Cliente
    When digita el nombre del cliente a crear <nombreClientes> 
    And digita el BBG Broker ID <IdBBG>
    And selecciona la modalidad de cliente disponible
    And selecciona el producto disponible
    And se da clic en el botón Guardar
    Then el sistema muestra el mensaje de acuerdo a la acción realizada 

  Examples: 
      | nombreClientes  | IdBBG |   
 			| Liliana  Sepulveda2	 | 85	   |  
 

@CancelarCreacionCliente
 Scenario: Cancelar la creación de un cliente
    Given El usuario ingresa a la página principal
    And se ubica en la opción clientes
    When da clic en el link Crear cliente
    And presiona el botón Regresar
    Then se visualiza nuevamente la página principal
  
 @ValidarCamposRequeridos
 Scenario: Validación campos requeridos
 		Given El usuario ingresa a la página principal
    And se ubica en la opción clientes
    When da clic en el link Crear cliente
    And presiona el botón Guardar
   Then Se visualizan los mensajes de validación


  
    
   
  