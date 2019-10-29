#Author: lsepulvedap@intergrupo.com
#Keywords Summary : Se realiza la automatización del módulo consultar cliente de la aplicación Tesorería

@ConsultarCliente
Feature: Consultar Cliente

  @ConsultaCliente_Existente
  Scenario Outline: Consultar cliente existente
    Given El usuario ingresa a la página principal 
    And se ubica en la opción clientes
    When digita el nombre del cliente a consultar <consultarNombreCliente> en el campo búsqueda
    And presiona la tecla enter
    Then se visualiza el nombre del cliente <consultarNombreCliente> en el resultado de la búsqueda 

    Examples: 
      |consultarNombreCliente  |
      | BBVA 			  					 |  


  @ConsultaCliente_NoExistente
  Scenario Outline: Consultar cliente no existente 
    Given El usuario ingresa a la página principal
    And se ubica en la opción clientes
    When digita el nombre del cliente a consultar <consultarNombreCliente> en el campo búsqueda
    And presiona la tecla enter
    Then se visualiza el mensaje No hay datos. 

    Examples: 
      | consultarNombreCliente |  
      | Juan			  					 |  
  
  
      