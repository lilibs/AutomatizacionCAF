$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/CAF/Automatizacion/CAF1/Include/features/Administracion/ModificarUsuario.feature");
formatter.feature({
  "name": "Modificación de permisos de usuarios",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ModificarUsuario"
    }
  ]
});
formatter.scenario({
  "name": "Modificar Roles usuario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ModificarUsuario"
    },
    {
      "name": "@ModificarRolesUsuario"
    }
  ]
});
formatter.step({
  "name": "El usuario ingresa a la página principal",
  "keyword": "Given "
});
formatter.match({
  "location": "PasosComunesCliente.El_usuario_ingresa_a_la_pagina_principal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se ubica en la opción administración",
  "keyword": "And "
});
formatter.match({
  "location": "ConsultarUsuarios.se_ubica_en_la_opcion_administracion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se ubica en la bandeja de administración",
  "keyword": "When "
});
formatter.match({
  "location": "ModificarUsuario.se_ubica_en_la_bandeja_de_administracion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se selecciona el usuario a modificar",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarUsuario.se_selecciona_el_usuario_a_modificar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se modifican los roles de usuario disponibles",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarUsuario.se_modifican_los_roles_de_usuario_disponibles()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se guarda la información de los roles de usuario modificada",
  "keyword": "Then "
});
formatter.match({
  "location": "ModificarUsuario.se_guarda_la_información_de_los_roles_de_usuario_modificada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se ubica en la bandeja de usuarios",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarUsuario.se_ubica_en_la_bandeja_de_usuarios()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Modificar usuario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ModificarUsuario"
    },
    {
      "name": "@ModificarUsuario"
    }
  ]
});
formatter.step({
  "name": "El usuario ingresa a la página principal",
  "keyword": "Given "
});
formatter.match({
  "location": "PasosComunesCliente.El_usuario_ingresa_a_la_pagina_principal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se ubica en la opción administración",
  "keyword": "And "
});
formatter.match({
  "location": "ConsultarUsuarios.se_ubica_en_la_opcion_administracion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se ubica en la bandeja de administración",
  "keyword": "When "
});
formatter.match({
  "location": "ModificarUsuario.se_ubica_en_la_bandeja_de_administracion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se selecciona el usuario a modificar",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarUsuario.se_selecciona_el_usuario_a_modificar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se modifican los roles disponibles",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarUsuario.se_modifican_los_roles_disponibles()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se guarda la información del usuario modificada",
  "keyword": "Then "
});
formatter.match({
  "location": "ModificarUsuario.se_guarda_la_informacion_del_usuario_modificada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se ubica en la bandeja de usuarios",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarUsuario.se_ubica_en_la_bandeja_de_usuarios()"
});
formatter.result({
  "status": "passed"
});
});