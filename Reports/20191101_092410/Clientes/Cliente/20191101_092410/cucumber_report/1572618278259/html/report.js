$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/CAF/Automatizacion/CAF1/Include/features/Clientes/CrearCliente.feature");
formatter.feature({
  "name": "Creación de clientes con validaciones implementadas",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreacionCliente"
    }
  ]
});
formatter.scenario({
  "name": "Ir a crear cliente",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreacionCliente"
    },
    {
      "name": "@IrCrearCliente"
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
  "name": "da clic en el link Crear cliente",
  "keyword": "When "
});
formatter.match({
  "location": "CrearCliente.da_clic_en_el_link_Crear_cliente()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el sistema muestra el formulario Crear Cliente",
  "keyword": "Then "
});
formatter.match({
  "location": "CrearCliente.el_sistema_muestra_el_formulario_Crear_Cliente()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Crear cliente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CrearCliente"
    }
  ]
});
formatter.step({
  "name": "El usuario ingresa a la opción Crear Cliente",
  "keyword": "Given "
});
formatter.step({
  "name": "digita el nombre del cliente a crear \u003cnombreCliente\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "digita el BBG Broker ID \u003cIdBBG\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "selecciona la modalidad de cliente disponible",
  "keyword": "And "
});
formatter.step({
  "name": "selecciona el producto disponible",
  "keyword": "And "
});
formatter.step({
  "name": "se da clic en el botón Guardar",
  "keyword": "And "
});
formatter.step({
  "name": "el sistema guarda la información del cliente",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nombreCliente",
        "IdBBG"
      ]
    },
    {
      "cells": [
        "Liliana",
        "5"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Crear cliente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreacionCliente"
    },
    {
      "name": "@CrearCliente"
    }
  ]
});
formatter.step({
  "name": "El usuario ingresa a la opción Crear Cliente",
  "keyword": "Given "
});
formatter.match({
  "location": "CrearCliente.El_usuario_ingresa_a_la_opcion_Crear_Cliente()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "digita el nombre del cliente a crear Liliana",
  "keyword": "When "
});
formatter.match({
  "location": "CrearCliente.digita_el_nombre_del_cliente_a_crear(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "digita el BBG Broker ID 5",
  "keyword": "And "
});
formatter.match({
  "location": "CrearCliente.digita_el_BBG_Broker_ID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecciona la modalidad de cliente disponible",
  "keyword": "And "
});
formatter.match({
  "location": "CrearCliente.selecciona_la_modalidad_de_cliente_disponible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecciona el producto disponible",
  "keyword": "And "
});
formatter.match({
  "location": "CrearCliente.selecciona_el_producto_disponible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se da clic en el botón Guardar",
  "keyword": "And "
});
formatter.match({
  "location": "CrearCliente.se_da_clic_en_el_botón_Guardar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el sistema guarda la información del cliente",
  "keyword": "Then "
});
formatter.match({
  "location": "CrearCliente.el_sistema_muestra_un_mensaje_de_exito()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cancelar la creación de un cliente",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreacionCliente"
    },
    {
      "name": "@CancelarCreacionCliente"
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
  "name": "da clic en el link Crear cliente",
  "keyword": "When "
});
formatter.match({
  "location": "CrearCliente.da_clic_en_el_link_Crear_cliente()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "presiona el botón Regresar",
  "keyword": "And "
});
formatter.match({
  "location": "CrearCliente.presiona_el_boton_Regresar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se visualiza nuevamente la página principal",
  "keyword": "Then "
});
formatter.match({
  "location": "CrearCliente.se_visualiza_nuevamente_la_pagina_principal()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validación campos requeridos",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreacionCliente"
    },
    {
      "name": "@ValidarCamposRequeridos"
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
  "name": "da clic en el link Crear cliente",
  "keyword": "When "
});
formatter.match({
  "location": "CrearCliente.da_clic_en_el_link_Crear_cliente()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "presiona el botón Guardar",
  "keyword": "And "
});
formatter.match({
  "location": "CrearCliente.presiona_el_boton_Guardar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Se visualizan los mensajes de validación",
  "keyword": "Then "
});
formatter.match({
  "location": "CrearCliente.Se_visualizan_los_mensajes_de_validacion()"
});
formatter.result({
  "status": "passed"
});
});