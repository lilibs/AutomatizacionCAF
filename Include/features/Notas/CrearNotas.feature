#Author: lsepulvedap@intergrupo.com
#Feature: List of scenarios.

@CrearNota
Feature: Creación de notas
  Yo como usuario quiero crear las notas

  @IrCrearNotas
  Scenario: Ir a crear notas
    Given El usuario ingresa a la página principal
    And se ubica en la opción notas
    When da clic en el link Crear notas
    Then el sistema muestra el formulario Crear Notas

    @CancelarCreacionNota
  Scenario: Cancelar la creación de una nota
    Given El usuario ingresa a la página principal
    And se ubica en la opción notas
    When da clic en el link Crear notas
    And presiona el botón Regresar del formulario de notas
    Then se visualiza nuevamente la página principal de notas
    
    @CrearNota
  Scenario Outline: Crear notas
    Given El usuario ingresa a la página principal
    And se ubica en la opción notas
    When da clic en el link Crear notas
    And selecciona el cliente 
    And digita el titulo de la nota <tituloNota>
    And digita el contenido <contenidoNota>
    And se guarda la información de la nota
    Then el sistema muestra mensaje confirmando el guardado de la nota

    Examples: 
      | tituloNota | contenidoNota |
      | Titulo de la nota      | Contenido de la nota        |