#Author: lsepulvedap@intergrupo.com
#Scenario: Creación de contactos
@CrearContacto
Feature: Creación de contactos con validaciones
  Yo como usuario quiero crear contactos

  @CancelarCreacionContacto
  Scenario: Cancelar la creación de un contacto
  	Given El usuario ingresa a la página principal 
    And se ubica en la opción contactos
    And da clic en el link Crear contactos
    And se ubica en el formulario de crear contactos 
    When presiona el botón Regresar de contactos
    Then se visualiza nuevamente la página principal de contactos
    
      

    @CrearContactos
  Scenario Outline: Crear contactos
    Given El usuario ingresa a la opción Crear Contactos
    When selecciona el cliente que representa
    And selecciona la función     
    And digita el nombre para el contacto a crear <nombreContacto>
    And digita los apellidos del contacto <apellidosContacto>
    And se da clic en el botón Guardar
    Then el sistema guarda la información del contacto
    And  muestra mensaje de confirmación de la creación

    Examples: 
      | nombreContacto | apellidosContacto |
      | Nombre1        | Apellido1         |