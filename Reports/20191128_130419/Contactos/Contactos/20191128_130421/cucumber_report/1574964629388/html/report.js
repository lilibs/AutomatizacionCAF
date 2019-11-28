$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/CAF/Automatizacion/CAF1/Include/features/Contactos/CrearContactos.feature");
formatter.feature({
  "name": "Creación de contactos con validaciones",
  "description": "  Yo como usuario quiero crear contactos",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CrearContacto"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Crear contactos",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CrearContactos"
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
  "name": "da clic en el link Crear contactos",
  "keyword": "And "
});
formatter.step({
  "name": "selecciona el cliente que representa",
  "keyword": "When "
});
formatter.step({
  "name": "selecciona la función",
  "keyword": "And "
});
formatter.step({
  "name": "digita el nombre para el contacto a crear \u003cnombreContacto\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "digita los apellidos del contacto \u003capellidosContacto\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "se presiona el botón Guardar",
  "keyword": "And "
});
formatter.step({
  "name": "el sistema guarda la información del contacto",
  "keyword": "Then "
});
formatter.step({
  "name": "muestra mensaje de confirmación de la creación",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nombreContacto",
        "apellidosContacto"
      ]
    },
    {
      "cells": [
        "Contacto",
        "Apellidos"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Crear contactos",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CrearContacto"
    },
    {
      "name": "@CrearContactos"
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
  "name": "da clic en el link Crear contactos",
  "keyword": "And "
});
formatter.match({
  "location": "CrearContactos.da_clic_en_el_link_Crear_contactos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecciona el cliente que representa",
  "keyword": "When "
});
formatter.match({
  "location": "CrearContactos.selecciona_el_cliente_que_representa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecciona la función",
  "keyword": "And "
});
formatter.match({
  "location": "CrearContactos.selecciona_la_funcion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "digita el nombre para el contacto a crear Contacto",
  "keyword": "And "
});
formatter.match({
  "location": "CrearContactos.digita_el_nombre_para_el_contacto_a_crear(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "digita los apellidos del contacto Apellidos",
  "keyword": "And "
});
formatter.match({
  "location": "CrearContactos.digita_los_apellidos_del_contacto(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se presiona el botón Guardar",
  "keyword": "And "
});
formatter.match({
  "location": "CrearContactos.se_presiona_el_boton_Guardar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el sistema guarda la información del contacto",
  "keyword": "Then "
});
formatter.match({
  "location": "CrearContactos.el_sistema_guarda_la_informacion_del_contacto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "muestra mensaje de confirmación de la creación",
  "keyword": "And "
});
formatter.match({
  "location": "CrearContactos.muestra_mensaje_de_confirmacion_de_la_creacion()"
});
formatter.result({
  "status": "passed"
});
});