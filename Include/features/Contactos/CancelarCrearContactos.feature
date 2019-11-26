#Author: lsepulvedap@intergrupo.com
#Scenario: Cancelar creación de contactos
@CancelarCrearContacto
Feature: Se cancela la creación de contactos 
  Yo como usuario quiero cancelar la creación de contactos

   
       @CancelarCreacionContacto
  Scenario: Cancelar la creación de un contacto
  	Given El usuario ingresa a la página principal 
    And se ubica en la opción contactos
    And da clic en el link Crear contactos
    And se ubica en el formulario de crear contactos 
    When presiona el botón Regresar de contactos
    Then se visualiza nuevamente la página principal de contactos
    
      