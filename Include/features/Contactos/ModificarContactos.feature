#Author: lsepulvedap@intergrupo.com

@ModificarContacto
Feature: Modificación de contactos
       
      
   @ModificarContacto
   Scenario Outline: : Modificar contacto
    Given El usuario ingresa a la página principal 
    And se ubica en la opción contactos
    When se ubica en la bandeja de contactos
    And se selecciona el contacto a modificar
    And se modifican las observaciones <Observaciones> del contacto
    And se guarda la información modificada
    Then el sistema presenta un mensaje de confirmación
    
    
   Examples: 
      | Observaciones | 
      | Se escriben las obervaciones para modificar contacto 1| 
 			| Se escriben las obervaciones para modificar contacto 2 | 
 		