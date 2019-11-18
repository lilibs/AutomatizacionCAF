#Author: lsepulvedap@intergrupo.com

@ModificarContacto
Feature: Modificación de contactos
       
      
   @ModificarContacto
   Scenario: Modificar contacto
    Given El usuario ingresa a la página principal 
    And se ubica en la opción notas
    When se ubica en la bandeja de contactos
    And se selecciona el contacto a modificar
    And se modifica el contacto
    And se guarda la información modificada
    Then el sistema presenta un mensaje de confirmación
    
    
   
 			