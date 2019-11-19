#Author: lsepulvedap@intergrupo.com
#Feature: Activar e inactivar contactos

@ActivarInactivarContactos
Feature: Activar e inactivar contactos
  Yo como usuario de la aplicación deseo activar e inactivar contactos

      
  @inactivarContacto
  Scenario Outline: Inactivar contactos
    Given El usuario ingresa a la página principal
    And se ubica en la opción contactos
    When consulta un contacto con estado <estado> activo
    And da clic sobre el botón Inactivar
    Then El sistema muestra ventana para inactivar el contacto
    And se da clic en Guardar para inactivar el contacto
    And se presenta mensaje confirmando la inactivación del contacto

    Examples: 
      | estado| 
      | Activo| 