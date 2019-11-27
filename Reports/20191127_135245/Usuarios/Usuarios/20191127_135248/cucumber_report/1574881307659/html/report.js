$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/CAF/Automatizacion/CAF1/Include/features/Administracion/ConsultarUsuarios.feature");
formatter.feature({
  "name": "Consultar Usuario",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ConsultarUsuario"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Consultar usuario existente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConsultaUsuario_Existente"
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
  "name": "digita el nombre del usuario a consultar \u003cconsultarUsuario\u003e en el campo búsqueda",
  "keyword": "When "
});
formatter.step({
  "name": "presiona la tecla enter",
  "keyword": "And "
});
formatter.step({
  "name": "se visualiza el nombre del usuario \u003cconsultarUsuario\u003e en el resultado de la búsqueda",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "consultarUsuario"
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
  "name": "Consultar usuario existente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConsultarUsuario"
    },
    {
      "name": "@ConsultaUsuario_Existente"
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
  "name": "digita el nombre del usuario a consultar liliana en el campo búsqueda",
  "keyword": "When "
});
formatter.match({
  "location": "ConsultarUsuarios.digita_el_nombre_del_usuario_a_consultar_en_el_campo_busqueda(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "presiona la tecla enter",
  "keyword": "And "
});
formatter.match({
  "location": "ConsultarCliente.presiona_la_tecla_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se visualiza el nombre del usuario liliana en el resultado de la búsqueda",
  "keyword": "Then "
});
formatter.match({
  "location": "ConsultarUsuarios.se_visualiza_el_nombre_del_usuario_en_el_resultado_de_la_busqueda(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Consultar usuario no existente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConsultaUsuario_NoExistente"
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
  "name": "digita el nombre del usuario a consultar \u003cconsultarUsuario\u003e en el campo búsqueda",
  "keyword": "When "
});
formatter.step({
  "name": "presiona la tecla enter",
  "keyword": "And "
});
formatter.step({
  "name": "se visualiza el resultado sin registros",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "consultarUsuario"
      ]
    },
    {
      "cells": [
        "Sandra"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Consultar usuario no existente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConsultarUsuario"
    },
    {
      "name": "@ConsultaUsuario_NoExistente"
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
  "name": "digita el nombre del usuario a consultar Sandra en el campo búsqueda",
  "keyword": "When "
});
formatter.match({
  "location": "ConsultarUsuarios.digita_el_nombre_del_usuario_a_consultar_en_el_campo_busqueda(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "presiona la tecla enter",
  "keyword": "And "
});
formatter.match({
  "location": "ConsultarCliente.presiona_la_tecla_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se visualiza el resultado sin registros",
  "keyword": "Then "
});
formatter.match({
  "location": "ConsultarUsuarios.se_visualiza_el_resultado_sin_registros()"
});
formatter.result({
  "status": "passed"
});
});