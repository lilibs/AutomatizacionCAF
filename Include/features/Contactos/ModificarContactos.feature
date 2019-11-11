#Author: lsepulvedap@intergrupo.com

@ModificarContacto
Feature: Modificación de contactos
       
      
   @ModificarContacto
   Scenario Outline: Modificar contacto
    Given El usuario ingresa a la página principal 
    And se ubica en la opción contactos
    When El usuario da clic sobre el nombre del contacto
    And actualiza el nombre del contacto <nombreContacto>
    And actualiza el apellido del contacto <apellidosContacto>
    And digita el cargo corporativo <cargo>
    And digita el correo <correo>
    And da clic en el botón Agregar correo 
    And da clic en el botón Guardar
    Then el sistema muestra un mensaje de confirmación

  Examples: 
      | nombreContacto| 	apellidosContacto		|  cargo 						| correo 			 						| 
 			| Liliana			 	|  Apellido contacto   	| analista					| lilibs633@hotmail.com		| 
 			
 			
 			