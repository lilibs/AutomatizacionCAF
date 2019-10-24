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


  @IrCrearCliente
  Scenario Outline: Ir a crear cliente
    Given El usuario ingresa a la página principal
    And se ubica en la opción clientes
    When da clic en el link Crear cliente
    Then el sistema muestra el formulario Crear Cliente
    
   
   @CrearCliente
   Scenario Outline: Crear cliente
    Given El usuario se encuentra en el formulario Crear Cliente
    When digita el nombre del cliente <NombreCliente> 
    And digita el BBG Broker ID <IdBBG>
    And selecciona la modalidad cliente disponible el item <itemModalidad>
    And se da clic en el botón transfer to modalidad
    And selecciona en productos disponibles el item <itemProducto>
    And se da clic en el botón transfer to productos
    And se da clic en el botón Guardar
    Then el sistema muestra un mensaje de éxito 

    Examples: 
      | NombreCliente  | IdBBG | itemModalidad  | itemProducto | 
 

