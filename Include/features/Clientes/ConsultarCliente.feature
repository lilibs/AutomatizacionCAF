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

@ConsultarCliente
Feature: Usuario que ingresa al formulario y en la barra de busqueda consulta un cliente.

  @ConsultaCliente_Existente
  Scenario Outline: Consulta cliente existente correctamente
    Given El usuario ingresa en la pagina principal 
    When El usuario seleccione la opcion cliente
    And El usuario ingrese el nombre del cliente <Informacion> en el campo de busqueda
    Then Deberia visualizar en el resultado de la busqueda el nombre de <Respuesta>

    Examples: 
      | Informacion | Respuesta  | 
      | BBVA 				| BBVA 			 | 


  @ConsultaCliente_NoExistente
  Scenario Outline: Consulta cliente no existente 
    Given El usuario ingresa en la pagina principal 
    When El usuario seleccione la opcion cliente
    And El usuario ingrese el nombre del cliente <InformacionNo> en el campo de busqueda
    Then Deberia visualizar en el resultado de la busqueda cero registros <Respuesta>

    Examples: 
      | InformacionNo | RespuestaNo 				 | 
      | Andres			  | No hay datos   			 | 
  
  
      