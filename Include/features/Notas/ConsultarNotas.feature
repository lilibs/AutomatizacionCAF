#Author: lsepulvedap@intergrupo.com

@Consultar
Feature: Consultar notas
  Yo como usuario deseo consultar las notas existentes

   @consultarNotas_existente
  Scenario Outline: Consultar notas existentes
    Given El usuario ingresa a la página principal 
    And se ubica en la opción notas
    When digita el nombre de la nota a consultar <consultarNota> en el campo búsqueda
    And presiona la tecla enter en el campo de búsqueda de la nota
    Then se visualiza el registro de la nota en el resultado de la búsqueda 

    Examples: 
      |consultarNota  |
      | BMW  			|  
     
     @consultarNotas_Noexistente
  Scenario Outline: Consultar notas no existentes
    Given El usuario ingresa a la página principal 
    And se ubica en la opción notas
    When digita el nombre de la nota a consultar <consultarNota> en el campo búsqueda
    And presiona la tecla enter en el campo de búsqueda de la nota
    Then se visualiza el registro de la nota en el resultado de la búsqueda 

    Examples: 
      |consultarNota  |
      | HOLA  			|  