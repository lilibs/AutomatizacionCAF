#Author: lsepulvedap@intergrupo.com

@ConsultarContactos
Feature: Escenario para realizar la consulta de los contactos
  Yo como usuario de la aplicación requiero consultar los contactos

  @consultarContactos_existente
  Scenario Outline: Consultar contactos existentes
    Given El usuario ingresa a la página principal 
    And se ubica en la opción contactos
    When digita el nombre del contacto a consultar <consultarNombreContacto> en el campo búsqueda
    And presiona la tecla enter en el campo de búsqueda del contacto
    Then se visualiza el nombre del contacto en el resultado de la búsqueda 

    Examples: 
      |consultarNombreContacto  |
      | Simpson  					 |  
    
      
      
   @ConsultaContactos_NoExistente
   Scenario Outline: Consultar contactos no existentes 
    Given El usuario ingresa a la página principal
    And se ubica en la opción contactos
    When digita el nombre del contacto a consultar <consultarNombreContacto> en el campo búsqueda
    And presiona la tecla enter
    Then se visualiza el mensaje No hay datos

    Examples: 
      | consultarNombreContacto |  
      | Jennifer			  					 |  
      | María			  					 |
  
  