#Author: lsepulvedap@intergrupo.com
#Feature: Activar e inactivar contactos

@ActivarInactivarContactos
Feature: Activar contactos
  Yo como usuario de la aplicación deseo activar contactos

  @activarContacto
  Scenario Outline: Activar contactos
    Given El usuario ingresa a la página principal
    And se ubica en la opción contactos
    When consulta un contacto con estado <estado> inactivo
    And da clic sobre el botón activar
    Then El sistema muestra mensaje para activar el contacto
    And se da clic en el botón Aceptar

    Examples: 
      | estado| 
      | Inactivo| 
      
 