#Author: lsepulvedap@intergrupo.com


@ModificarClientes
Feature: Modificación de clientes
 

	@ConsultaCliente
  	Scenario Outline: Consultar cliente existente
    Given El usuario ingresa a la página principal 
    And se ubica en la opción clientes
    When digita el nombre del cliente <nombreCliente> en el campo búsqueda
    And presiona la tecla enter
    Then se visualiza el nombre del cliente <nombreCliente> en el resultado de la búsqueda 

    Examples: 
      |nombreCliente  |
      | BBVA 			  	|  
      
      
   @ModificarCliente
   Scenario Outline: Modificar cliente
    Given El usuario da clic sobre el nombre del cliente
    When da clic sobre la opción Modificar
    And actualiza el nombre del cliente <nombreCliente1>
    And digita el correo <correo>
    And da clic en el botón Agregar correo
    And digita un tag <tag>
    And da clic en el botón Agregar tag 
    And digita la dirección <direccion>
    And da clic en el botón Guardar
    Then el sistema muestra un mensaje de éxito 

  Examples: 
      | NombreCliente1|  correo 										| tag  | direccion 			 | 
 			| BBVA1  			 	| lilibs633@hotmail.com 	   	| tag  | dirección CR 70 | 
 			
 		
 