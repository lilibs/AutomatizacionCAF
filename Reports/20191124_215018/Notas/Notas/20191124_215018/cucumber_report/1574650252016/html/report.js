$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/CAF/Automatizacion/CAF1/Include/features/Notas/CrearNotas.feature");
formatter.feature({
  "name": "Creación de notas",
  "description": "  Yo como usuario quiero crear las notas",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CrearNota"
    }
  ]
});
formatter.scenario({
  "name": "Ir a crear notas",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CrearNota"
    },
    {
      "name": "@IrCrearNotas"
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
  "name": "da clic en el link Crear notas",
  "keyword": "When "
});
formatter.match({
  "location": "CrearNotas.da_clic_en_el_link_Crear_notas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el sistema muestra el formulario Crear Notas",
  "keyword": "Then "
});
formatter.match({
  "location": "CrearNotas.el_sistema_muestra_el_formulario_Crear_Notas()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Crear notas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CrearNota"
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
  "name": "da clic en el link Crear notas",
  "keyword": "When "
});
formatter.step({
  "name": "selecciona el cliente",
  "keyword": "And "
});
formatter.step({
  "name": "digita el titulo de la nota \u003ctituloNota\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "digita el contenido \u003ccontenidoNota\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "se guarda la información de la nota",
  "keyword": "And "
});
formatter.step({
  "name": "el sistema muestra mensaje confirmando el guardado de la nota",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "tituloNota",
        "contenidoNota"
      ]
    },
    {
      "cells": [
        "Titulo de la nota",
        "Contenido de la nota"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Crear notas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CrearNota"
    },
    {
      "name": "@CrearNota"
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
  "name": "da clic en el link Crear notas",
  "keyword": "When "
});
formatter.match({
  "location": "CrearNotas.da_clic_en_el_link_Crear_notas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecciona el cliente",
  "keyword": "And "
});
formatter.match({
  "location": "CrearNotas.selecciona_el_cliente()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "digita el titulo de la nota Titulo de la nota",
  "keyword": "And "
});
formatter.match({
  "location": "CrearNotas.digita_el_titulo_de_la_nota(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "digita el contenido Contenido de la nota",
  "keyword": "And "
});
formatter.match({
  "location": "CrearNotas.digita_el_contenido(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se guarda la información de la nota",
  "keyword": "And "
});
formatter.match({
  "location": "CrearNotas.se_guarda_la_información_de_la_nota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el sistema muestra mensaje confirmando el guardado de la nota",
  "keyword": "Then "
});
formatter.match({
  "location": "CrearNotas.el_sistema_muestra_mensaje_confirmando_el_guardado_de_la_nota()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cancelar la creación de una nota",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CrearNota"
    },
    {
      "name": "@CancelarCreacionNota"
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
  "name": "da clic en el link Crear notas",
  "keyword": "When "
});
formatter.match({
  "location": "CrearNotas.da_clic_en_el_link_Crear_notas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "presiona el botón Regresar del formulario de notas",
  "keyword": "And "
});
formatter.match({
  "location": "CrearNotas.presiona_el_boton_Regresar_del_formulario_de_notas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se visualiza nuevamente la página principal de notas",
  "keyword": "Then "
});
formatter.match({
  "location": "CrearNotas.se_visualiza_nuevamente_la_pagina_principal_de_notas()"
});
formatter.result({
  "status": "passed"
});
});