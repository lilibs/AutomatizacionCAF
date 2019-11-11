#Author: lsepulvedap@intergrupo.com
#Feature: Activar e inactivar contactos

@ActivarInactivarContactos
Feature: Activar e inactivar contactos
  Yo como usuario de la aplicación deseo activar e inactivar contactos

  @activarContacto
  Scenario Outline: Activar contactos
    Given El usuario ingresa a la página principal
    And se ubica en la opción contactos
    When consulta un contacto con estado <estado> inactivo
    And da clic sobre el botón activar
    Then El sistema muestra mensaje de confirmación
    And se da clic en el botón Aceptar

    Examples: 
      | estado| 
      | Inactivo| 
      
  @inactivarContacto
  Scenario Outline: Inactivar contactos
    Given El usuario ingresa a la página principal
    And se ubica en la opción contactos
    When consulta un contacto con estado <estado> activo
    And da clic sobre el botón Inactivar
    Then El sistema muestra ventana para inactivar el contacto
    And se da clic en el botón Guardar

    Examples: 
      | estado| 
      | Activo| 