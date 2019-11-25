#Author: lsepulvedap@intergrupo.com


@ModificarClientes
Feature: Modificación de clientes
       
      
   @ModificarCliente
   Scenario Outline: Modificar cliente
    Given El usuario ingresa a la página principal 
    And se ubica en la opción clientes
    And El usuario da clic sobre el nombre del cliente
    When da clic sobre la opción Modificar
    And actualiza el nombre del cliente <NombreCliente1>
    And digita el correo <correo>
    And da clic en el botón Agregar correo
    And digita un tag <tag>
    And da clic en el botón Agregar tag 
    And digita la dirección <direccion>
    And da clic en el botón Guardar
    Then el sistema muestra un mensaje de confirmación

  Examples: 
      | NombreCliente1| correo 										| tag  | direccion 			 | 
 			| Cliente		 	| cliente633@hotmail.com    	| valor  | Cr 52 N 78 33			 | 
 			
 		
 