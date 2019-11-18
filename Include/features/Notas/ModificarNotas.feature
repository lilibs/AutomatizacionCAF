#Author: lsepulvedap@intergrupo.com
#Keywords Summary : Modificar Notas

@Modificar
Feature: Modificar Notas
  Yo como usuario de la aplicación quiero modificar las notas 

  @ModificarNota
   Scenario Outline: Modificar Nota
    Given El usuario ingresa a la página principal 
    And se ubica en la opción notas
    And se selecciona la nota a modificar
    And se da clic sobre la acción Modificar
    And se ubica en el formulario de modificar nota
    And se modifica el titulo de la nota <tituloN>
    And se modifica el contenido de la nota <contenidoN>
    And se guarda la información modificada
    Then el sistema presenta un mensaje de confirmación de la modificación
    
    Examples: 
      | tituloN | contenidoN |
      | Titulo modificado   | contenido modificado       |