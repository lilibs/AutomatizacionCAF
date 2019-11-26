$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/CAF/Automatizacion/CAF1/Include/features/Clientes/ModificarCliente.feature");
formatter.feature({
  "name": "Modificación de clientes",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ModificarClientes"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Modificar cliente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ModificarCliente"
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
  "name": "El usuario da clic sobre el nombre del cliente",
  "keyword": "And "
});
formatter.step({
  "name": "da clic sobre la opción Modificar",
  "keyword": "When "
});
formatter.step({
  "name": "actualiza el nombre del cliente \u003cNombreCliente1\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "digita el correo \u003ccorreo\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "da clic en el botón Agregar correo",
  "keyword": "And "
});
formatter.step({
  "name": "digita un tag \u003ctag\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "da clic en el botón Agregar tag",
  "keyword": "And "
});
formatter.step({
  "name": "digita la dirección \u003cdireccion\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "da clic en el botón Guardar",
  "keyword": "And "
});
formatter.step({
  "name": "el sistema muestra un mensaje de confirmación",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "NombreCliente1",
        "correo",
        "tag",
        "direccion"
      ]
    },
    {
      "cells": [
        "Cliente",
        "cliente633@hotmail.com",
        "valor",
        "Cr 52 N 78 33"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Modificar cliente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ModificarClientes"
    },
    {
      "name": "@ModificarCliente"
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
  "name": "El usuario da clic sobre el nombre del cliente",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarCliente.El_usuario_da_clic_sobre_el_nombre_del_cliente()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "da clic sobre la opción Modificar",
  "keyword": "When "
});
formatter.match({
  "location": "ModificarCliente.da_clic_sobre_la_opcion_Modificar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "actualiza el nombre del cliente Cliente",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarCliente.actualiza_el_nombre_del_cliente(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "digita el correo cliente633@hotmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarCliente.digita_el_correo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "da clic en el botón Agregar correo",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarCliente.da_clic_en_el_boton_Agregar_correo()"
});
