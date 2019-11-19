#Author: lsepulvedap@intergrupo.com
#Keywords Summary : Se realiza la automatización del módulo consultar usuarios en el módulo de administración de la aplicación Tesorería

@ConsultarUsuario
Feature: Consultar Usuario

  @ConsultaUsuario_Existente
  Scenario Outline: Consultar usuario existente
    Given El usuario ingresa a la página principal 
    And se ubica en la opción administración
    When digita el nombre del usuario a consultar <consultarUsuario> en el campo búsqueda
    And presiona la tecla enter
    Then se visualiza el nombre del usuario <consultarUsuario> en el resultado de la búsqueda 

    Examples: 
      |consultarUsuario  |
      | liliana  					 |  


  @ConsultaUsuario_NoExistente
  Scenario Outline: Consultar usuario no existente 
    Given El usuario ingresa a la página principal
    And se ubica en la opción administración
    When digita el nombre del usuario a consultar <consultarUsuario> en el campo búsqueda
    And presiona la tecla enter
    Then se visualiza el mensaje sin registros 

    Examples: 
      | consultarUsuario |  
      | Sandra		  					 |  
  
  
      