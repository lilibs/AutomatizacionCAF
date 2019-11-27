$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/CAF/Automatizacion/CAF1/Include/features/Notas/ConsultarNotas.feature");
formatter.feature({
  "name": "Consultar notas",
  "description": "  Yo como usuario deseo consultar las notas existentes",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Consultar"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Consultar notas existentes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@consultarNotas_existente"
    }
  ]
});
formatter.step({
  "name": "El usuario ingresa a la página principal",
  "keyword": "Given "
});
formatter.step({
  "name": "se ubica en la opción notas",
  "keyword": "And "
});
formatter.step({
  "name": "digita el nombre de la nota a consultar \u003cconsultarNota\u003e en el campo búsqueda",
  "keyword": "When "
});
formatter.step({
  "name": "presiona la tecla enter en el campo de búsqueda de la nota",
  "keyword": "And "
});
formatter.step({
  "name": "se visualiza el registro de la nota en el resultado de la búsqueda",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "consultarNota"
      ]
    },
    {
      "cells": [
        "BMW"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Consultar notas existentes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Consultar"
    },
    {
      "name": "@consultarNotas_existente"
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
  "name": "se ubica en la opción notas",
  "keyword": "And "
});
formatter.match({
  "location": "CrearNotas.se_ubica_en_la_opcion_notas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "digita el nombre de la nota a consultar BMW en el campo búsqueda",
  "keyword": "When "
});
formatter.match({
  "location": "ConsultarNotas.digita_el_nombre_de_la_nota_a_consultar_en_el_campo_busqueda(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "presiona la tecla enter en el campo de búsqueda de la nota",
  "keyword": "And "
});
formatter.match({
  "location": "ConsultarNotas.presion_la_tecla_enter_en_el_campo_de_busqueda_de_la_nota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se visualiza el registro de la nota en el resultado de la búsqueda",
  "keyword": "Then "
});
formatter.match({
  "location": "ConsultarNotas.se_visualiza_el_registro_de_la_nota_en_el_resultado_de_la_busqueda()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Consultar notas no existentes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@consultarNotas_Noexistente"
    }
  ]
});
formatter.step({
  "name": "El usuario ingresa a la página principal",
  "keyword": "Given "
});
formatter.step({
  "name": "se ubica en la opción notas",
  "keyword": "And "
});
formatter.step({
  "name": "digita el nombre de la nota a consultar \u003cconsultarNota\u003e en el campo búsqueda",
  "keyword": "When "
});
formatter.step({
  "name": "presiona la tecla enter en el campo de búsqueda de la nota",
  "keyword": "And "
});
formatter.step({
  "name": "se visualiza el registro de la nota en el resultado de la búsqueda",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "consultarNota"
      ]
    },
    {
      "cells": [
        "HOLA"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Consultar notas no existentes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Consultar"
    },
    {
      "name": "@consultarNotas_Noexistente"
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
  "name": "se ubica en la opción notas",
  "keyword": "And "
});
formatter.match({
  "location": "CrearNotas.se_ubica_en_la_opcion_notas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "digita el nombre de la nota a consultar HOLA en el campo búsqueda",
  "keyword": "When "
});
formatter.match({
  "location": "ConsultarNotas.digita_el_nombre_de_la_nota_a_consultar_en_el_campo_busqueda(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "presiona la tecla enter en el campo de búsqueda de la nota",
  "keyword": "And "
});
formatter.match({
  "location": "ConsultarNotas.presion_la_tecla_enter_en_el_campo_de_busqueda_de_la_nota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se visualiza el registro de la nota en el resultado de la búsqueda",
  "keyword": "Then "
});
formatter.match({
  "location": "ConsultarNotas.se_visualiza_el_registro_de_la_nota_en_el_resultado_de_la_busqueda()"
});
formatter.result({
  "status": "passed"
});
});