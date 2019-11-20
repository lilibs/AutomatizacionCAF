#Author: lsepulvedap@intergrupo.com
#Keywords Summary : Se realiza la automatización del módulo de administración de usuarios de la aplicación Tesorería

@CrearUsuario
Feature: Crear Usuario

  @VerificarLoginUsuario_NoExistente
  Scenario Outline: Verificar login de usuario no existente
    Given El usuario ingresa a la página principal 
    And se ubica en la opción administración
    When digita el login del usuario a validar <consultarLogin> 
    And se presiona Buscar
    Then se visualiza mensaje de validación

    Examples: 
      |consultarLogin  |
      | liliana  			 |  

@VerificarLoginUsuario_Existente
  Scenario Outline: Verificar login de usuario existente
    Given El usuario ingresa a la página principal 
    And se ubica en la opción administración
    When digita el login del usuario a validar <consultarLogin> 
    And se presiona Buscar
    And se ingresa la información de los roles disponibles
    And se da clic en Guardar Usuario
    Then el sistema muestra mensaje de confirmación

    Examples: 
      |consultarLogin  |
      |lsepulvedap		 |  
