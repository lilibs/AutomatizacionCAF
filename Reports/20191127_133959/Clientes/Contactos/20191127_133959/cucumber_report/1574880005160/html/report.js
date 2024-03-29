$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/CAF/Automatizacion/CAF1/Include/features/Contactos/ActivarContactos.feature");
formatter.feature({
  "name": "Activar contactos",
  "description": "  Yo como usuario de la aplicación deseo activar contactos",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ActivarInactivarContactos"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Activar contactos",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@activarContacto"
    }
  ]
});
formatter.step({
  "name": "El usuario ingresa a la página principal",
  "keyword": "Given "
});
formatter.step({
  "name": "se ubica en la opción contactos",
  "keyword": "And "
});
formatter.step({
  "name": "consulta un contacto con estado \u003cestado\u003e inactivo",
  "keyword": "When "
});
formatter.step({
  "name": "da clic sobre el botón activar",
  "keyword": "And "
});
formatter.step({
  "name": "El sistema muestra mensaje para activar el contacto",
  "keyword": "Then "
});
formatter.step({
  "name": "se da clic en el botón Aceptar",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "estado"
      ]
    },
    {
      "cells": [
        "Inactivo"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Activar contactos",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ActivarInactivarContactos"
    },
    {
      "name": "@activarContacto"
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
  "name": "se ubica en la opción contactos",
  "keyword": "And "
});
formatter.match({
  "location": "ConsultarContactos.se_ubica_en_la_opcion_contactos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "consulta un contacto con estado Inactivo inactivo",
  "keyword": "When "
});
formatter.match({
  "location": "ActivarInactivarContactos.consulta_un_contacto_con_estado_inactivo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "da clic sobre el botón activar",
  "keyword": "And "
});
formatter.match({
  "location": "ActivarInactivarContactos.da_clic_sobre_el_boton_activar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El sistema muestra mensaje para activar el contacto",
  "keyword": "Then "
});
formatter.match({
  "location": "ActivarInactivarContactos.El_sistema_muestra_mensaje_para_activar_el_contacto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se da clic en el botón Aceptar",
  "keyword": "And "
});
formatter.match({
  "location": "ActivarInactivarContactos.se_da_clic_en_el_boton_Aceptar()"
});
formatter.result({
  "status": "passed"
});
});