$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/CAF/Automatizacion/CAF1/Include/features/Clientes/ConsultarCliente.feature");
formatter.feature({
  "name": "Consultar Cliente",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ConsultarCliente"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Consultar cliente existente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConsultaCliente_Existente"
    }
  ]
});
formatter.step({
  "name": "El usuario ingresa a la página principal",
  "keyword": "Given "
});
formatter.step({
  "name": "se ubica en la opción clientes",
  "keyword": "And "
});
formatter.step({
  "name": "digita el nombre del cliente a consultar \u003cconsultarNombreCliente\u003e en el campo búsqueda",
  "keyword": "When "
});
formatter.step({
  "name": "presiona la tecla enter",
  "keyword": "And "
});
formatter.step({
  "name": "se visualiza el nombre del cliente \u003cconsultarNombreCliente\u003e en el resultado de la búsqueda",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "consultarNombreCliente"
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
  "name": "Consultar cliente existente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConsultarCliente"
    },
    {
      "name": "@ConsultaCliente_Existente"
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
  "name": "se ubica en la opción clientes",
  "keyword": "And "
});
formatter.match({
  "location": "ConsultarCliente.se_ubica_en_la_opcion_clientes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "digita el nombre del cliente a consultar liliana en el campo búsqueda",
  "keyword": "When "
});
formatter.match({
  "location": "ConsultarCliente.digita_el_nombre_del_cliente_a_consultar_en_el_campo_busqueda(String)"
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
  "name": "se visualiza el nombre del cliente liliana en el resultado de la búsqueda",
  "keyword": "Then "
});
formatter.match({
  "location": "ConsultarCliente.se_visualiza_el_nombre_del_cliente_en_el_resultado_de_la_busqueda(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Consultar cliente no existente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConsultaCliente_NoExistente"
    }
  ]
});
formatter.step({
  "name": "El usuario ingresa a la página principal",
  "keyword": "Given "
});
formatter.step({
  "name": "se ubica en la opción clientes",
  "keyword": "And "
});
formatter.step({
  "name": "digita el nombre del cliente a consultar \u003cconsultarNombreCliente\u003e en el campo búsqueda",
  "keyword": "When "
});
formatter.step({
  "name": "presiona la tecla enter",
  "keyword": "And "
});
formatter.step({
  "name": "se visualiza el mensaje sin registros",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "consultarNombreCliente"
      ]
    },
    {
      "cells": [
        "Juan"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Consultar cliente no existente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConsultarCliente"
    },
    {
      "name": "@ConsultaCliente_NoExistente"
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
  "name": "se ubica en la opción clientes",
  "keyword": "And "
});
formatter.match({
  "location": "ConsultarCliente.se_ubica_en_la_opcion_clientes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "digita el nombre del cliente a consultar Juan en el campo búsqueda",
  "keyword": "When "
});
formatter.match({
  "location": "ConsultarCliente.digita_el_nombre_del_cliente_a_consultar_en_el_campo_busqueda(String)"
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
  "name": "se visualiza el mensaje sin registros",
  "keyword": "Then "
});
formatter.match({
  "location": "ConsultarCliente.se_visualiza_el_mensaje_sin_registros()"
});
formatter.result({
  "status": "passed"
});
});