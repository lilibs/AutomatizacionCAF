#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template


@CrearCliente
Feature: Creacion de clientes con validaciones implementadas

  @CancelarCreacionCliente
  Scenario Outline: El usuario selecciona el boton Regresar
    Given El usuario ingresa en la pagina principal
    When El usuario seleccione la opcion cliente
    And El usuario seleccione el link de Crear Cliente
    And El usuario seleccione el boton Regresar
    Then Debería visualizar la pagina principal


  @ValidarCamposRequeridos
  Scenario Outline: El usuario selecciona el boton de Guardar sin ingresar informacion
    Given El usuario ingresa en la pagina principal
    When El usuario selecciona la opcion cliente
    And El usuario selecciona el link de Crear Cliente
    And El usuario selecciona el boton de Guardar
    Then Deberia visualizar los mensajes de validacion


  @CrearCliente_Correctamente
  Scenario Outline: El usuario crea un nuevo cliente
    Given El usuario ingresa en la pagina principal
    When El usuario selecciona la opcion cliente
    And El usuario selecciona el link de Crear Cliente
    And El usuario ingresa 
    Then I verify the <status> in step

    Examples: 
      | name  | value | status  |
      | name1 |     5 | success |
      | name2 |     7 | Fail    |
