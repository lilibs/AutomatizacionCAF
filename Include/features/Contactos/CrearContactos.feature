#Author: lsepulvedap@intergrupo.com
#Scenario: Creación de contactos

@CrearContacto
Feature: Creación de contactos con validaciones
 Yo como usuario quiero crear contactos 

  @IrCrearContactos
  Scenario: Ir a crear contactos
    Given El usuario ingresa a la página principal
    And se ubica en la opción contactos
    When da clic en el link Crear contactos
    Then el sistema muestra el formulario Crear Contactos

             
  @CrearContactos
  Scenario Outline: Crear contactos
    Given El usuario ingresa a la opción Crear Contactos
    When digita el nombre para el contacto a crear <nombreContacto> 
    And digita los apellidos del contacto <apellidosContacto>
    And selecciona el cliente que representa
    And selecciona la función
    And se da clic en el botón Guardar
    Then el sistema guarda la información del contacto 

    Examples: 
      | nombreContacto  | apellidosContacto| 
      | Nombre1 				|			Apellido1	   |
      | Nombre2					|			Apellido2	   |