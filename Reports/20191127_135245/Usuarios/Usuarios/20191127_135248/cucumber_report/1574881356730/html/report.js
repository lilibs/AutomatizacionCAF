$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/CAF/Automatizacion/CAF1/Include/features/Administracion/CrearUsuario.feature");
formatter.feature({
  "name": "Crear Usuario",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CrearUsuario"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verificar login de usuario no existente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VerificarLoginUsuario_NoExistente"
    }
  ]
});
formatter.step({
  "name": "El usuario ingresa a la página principal",
  "keyword": "Given "
});
formatter.step({
  "name": "se ubica en la opción administración",
  "keyword": "And "
});
formatter.step({
  "name": "digita el login del usuario a validar \u003cconsultarLogin\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "se presiona Buscar",
  "keyword": "And "
});
formatter.step({
  "name": "se visualiza mensaje de validación",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "consultarLogin"
      ]
    },
    {
      "cells": [
        "liliana"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verificar login de usuario no existente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CrearUsuario"
    },
    {
      "name": "@VerificarLoginUsuario_NoExistente"
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
  "name": "digita el login del usuario a validar liliana",
  "keyword": "When "
});
formatter.match({
  "location": "CrearUsuario.digita_el_login_del_usuario_a_validar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se presiona Buscar",
  "keyword": "And "
});
formatter.match({
  "location": "CrearUsuario.se_presiona_Buscar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se visualiza mensaje de validación",
  "keyword": "Then "
});
formatter.match({
  "location": "CrearUsuario.se_visualiza_mensaje_de_validacion()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verificar login de usuario existente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VerificarLoginUsuario_Existente"
    }
  ]
});
formatter.step({
  "name": "El usuario ingresa a la página principal",
  "keyword": "Given "
});
formatter.step({
  "name": "se ubica en la opción administración",
  "keyword": "And "
});
formatter.step({
  "name": "digita el login del usuario a validar \u003cconsultarLogin\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "se presiona Buscar",
  "keyword": "And "
});
formatter.step({
  "name": "se ingresa la información de los roles disponibles",
  "keyword": "And "
});
formatter.step({
  "name": "se da clic en Guardar Usuario",
  "keyword": "And "
});
formatter.step({
  "name": "el sistema muestra mensaje de confirmación",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "consultarLogin"
      ]
    },
    {
      "cells": [
        "lsepulvedap"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verificar login de usuario existente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CrearUsuario"
    },
    {
      "name": "@VerificarLoginUsuario_Existente"
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
  "name": "digita el login del usuario a validar lsepulvedap",
  "keyword": "When "
});
formatter.match({
  "location": "CrearUsuario.digita_el_login_del_usuario_a_validar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se presiona Buscar",
  "keyword": "And "
});
formatter.match({
  "location": "CrearUsuario.se_presiona_Buscar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se ingresa la información de los roles disponibles",
  "keyword": "And "
});
formatter.match({
  "location": "CrearUsuario.se_ingresa_la_información_de_los_roles_disponibles()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se da clic en Guardar Usuario",
  "keyword": "And "
});
formatter.match({
  "location": "CrearUsuario.se_da_clic_en_Guardar_Usuario()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el sistema muestra mensaje de confirmación",
  "keyword": "Then "
});
formatter.match({
  "location": "CrearUsuario.el_sistema_muestra_mensaje_de_confirmacion()"
});
formatter.result({
  "status": "passed"
});
});