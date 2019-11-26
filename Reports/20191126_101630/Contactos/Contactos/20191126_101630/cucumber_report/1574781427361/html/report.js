$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/CAF/Automatizacion/CAF1/Include/features/Contactos/InactivarContactos.feature");
formatter.feature({
  "name": "Activar e inactivar contactos",
  "description": "  Yo como usuario de la aplicación deseo activar e inactivar contactos",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ActivarInactivarContactos"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Inactivar contactos",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@inactivarContacto"
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
  "name": "consulta un contacto con estado \u003cestado\u003e activo",
  "keyword": "When "
});
formatter.step({
  "name": "da clic sobre el botón Inactivar",
  "keyword": "And "
});
formatter.step({
  "name": "El sistema muestra ventana para inactivar el contacto",
  "keyword": "Then "
});
formatter.step({
  "name": "se da clic en Guardar para inactivar el contacto",
  "keyword": "And "
});
formatter.step({
  "name": "se presenta mensaje confirmando la inactivación del contacto",
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
        "Activo"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Inactivar contactos",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ActivarInactivarContactos"
    },
    {
      "name": "@inactivarContacto"
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
  "name": "consulta un contacto con estado Activo activo",
  "keyword": "When "
});
formatter.match({
  "location": "ActivarInactivarContactos.consulta_un_contacto_con_estado_activo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "da clic sobre el botón Inactivar",
  "keyword": "And "
});
formatter.match({
  "location": "ActivarInactivarContactos.da_clic_sobre_el_boton_Inactivar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El sistema muestra ventana para inactivar el contacto",
  "keyword": "Then "
});
formatter.match({
  "location": "ActivarInactivarContactos.El_sistema_muestra_ventana_para_inactivar_el_contacto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se da clic en Guardar para inactivar el contacto",
  "keyword": "And "
});
formatter.match({
  "location": "ActivarInactivarContactos.se_da_clic_en_Guardar_para_inactivar_el_contacto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se presenta mensaje confirmando la inactivación del contacto",
  "keyword": "And "
});
formatter.match({
  "location": "ActivarInactivarContactos.se_presenta_mensaje_confirmando_la_inactivacion_del_contacto()"
});
formatter.result({
  "status": "passed"
});
});