#Author: lsepulvedap@intergrupo.com
#Scenario: Creación de contactos
@CrearContacto
Feature: Creación de contactos con validaciones
  Yo como usuario quiero crear contactos

     @CrearContactos
  Scenario Outline: Crear contactos
    Given El usuario ingresa a la página principal 
    And se ubica en la opción contactos
    And da clic en el link Crear contactos
    When selecciona el cliente que representa
    And selecciona la función     
    And digita el nombre para el contacto a crear <nombreContacto>
    And digita los apellidos del contacto <apellidosContacto>
    And se presiona el botón Guardar
    Then el sistema guarda la información del contacto
    And  muestra mensaje de confirmación de la creación

    Examples: 
      | nombreContacto | apellidosContacto |
      | Contacto        | Apellidos         |
      
         
      