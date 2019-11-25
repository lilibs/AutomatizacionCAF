$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/CAF/Automatizacion/CAF1/Include/features/Notas/ModificarNotas.feature");
formatter.feature({
  "name": "Modificar Notas",
  "description": "  Yo como usuario de la aplicación quiero modificar las notas ",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Modificar"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Modificar Nota",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ModificarNota"
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
  "name": "se selecciona la nota a modificar",
  "keyword": "And "
});
formatter.step({
  "name": "se da clic sobre la acción Modificar",
  "keyword": "And "
});
formatter.step({
  "name": "se ubica en el formulario de modificar nota",
  "keyword": "And "
});
formatter.step({
  "name": "se modifica el titulo de la nota \u003ctituloN\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "se modifica el contenido de la nota \u003ccontenidoN\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "se guarda la información modificada",
  "keyword": "And "
});
formatter.step({
  "name": "el sistema presenta un mensaje de confirmación de la modificación",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "tituloN",
        "contenidoN"
      ]
    },
    {
      "cells": [
        "Titulo modificado",
        "contenido modificado"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Modificar Nota",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Modificar"
    },
    {
      "name": "@ModificarNota"
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
  "name": "se selecciona la nota a modificar",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarNotas.se_selecciona_la_nota_a_modificar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se da clic sobre la acción Modificar",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarNotas.se_da_clic_sobre_la_accion_Modificar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se ubica en el formulario de modificar nota",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarNotas.se_ubica_en_el_formulario_de_modificar_nota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se modifica el titulo de la nota Titulo modificado",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarNotas.se_modifica_el_titulo_de_la_nota(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se modifica el contenido de la nota contenido modificado",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarNotas.se_modifica_el_contenido_de_la_nota(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se guarda la información modificada",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarContactos.se_guarda_la_informacion_modificada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el sistema presenta un mensaje de confirmación de la modificación",
  "keyword": "Then "
});
formatter.match({
  "location": "ModificarNotas.el_sistema_presenta_un_mensaje_de_confirmacion_de_la_modificacion()"
});
formatter.result({
  "status": "passed"
});
});