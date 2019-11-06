$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/CAF/Automatizacion/CAF1/Include/features/Clientes/ValidarIngresoApp.feature");
formatter.feature({
  "name": "Ingreso a la aplicación",
  "description": "  Yo como usuario deseo ingresar a la aplicación de Tesorería",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@IngresoApp"
    }
  ]
});
formatter.scenario({
  "name": "Validación ingreso a la aplicación",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@IngresoApp"
    },
    {
      "name": "@ValidarIngreso"
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
  "name": "se ubica en la opción de Inicio",
  "keyword": "When "
});
formatter.match({
  "location": "ValidarIngresoApp.se_ubica_en_la_opcion_de_Inicio()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se presenta un mensaje de Bienvenida a contactos Tesorería",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidarIngresoApp.se_presenta_un_mensaje_de_Bienvenida_a_contactos_Tesoreria()"
});
formatter.result({
  "status": "passed"
});
});