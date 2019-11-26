#Author: lsepulvedap@intergrupo.com

@ModificarUsuario
Feature: Modificación de permisos de usuarios
       
    @ModificarRolesUsuario
   Scenario: Modificar Roles usuario
    Given El usuario ingresa a la página principal 
    And se ubica en la opción administración
    When se ubica en la bandeja de administración
    And se selecciona el usuario a modificar
    And se modifican los roles de usuario disponibles
    Then se guarda la información de los roles de usuario modificada
    And se ubica en la bandeja de usuarios
    
       
   @ModificarUsuario
   Scenario: Modificar usuario
    Given El usuario ingresa a la página principal 
    And se ubica en la opción administración
    When se ubica en la bandeja de administración
    And se selecciona el usuario a modificar
    And se modifican los roles disponibles
    Then se guarda la información del usuario modificada
    And se ubica en la bandeja de usuarios
        
  