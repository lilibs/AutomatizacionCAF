$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/CAF/Automatizacion/CAF1/Include/features/Contactos/ModificarContactos.feature");
formatter.feature({
  "name": "Modificación de contactos",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ModificarContacto"
    }
  ]
});
formatter.scenarioOutline({
  "name": ": Modificar contacto",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ModificarContacto"
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
  "name": "se ubica en la bandeja de contactos",
  "keyword": "When "
});
formatter.step({
  "name": "se selecciona el contacto a modificar",
  "keyword": "And "
});
formatter.step({
  "name": "se modifican las observaciones \u003cObservaciones\u003e del contacto",
  "keyword": "And "
});
formatter.step({
  "name": "se guarda la información modificada",
  "keyword": "And "
});
formatter.step({
  "name": "el sistema presenta un mensaje de confirmación",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Observaciones"
      ]
    },
    {
      "cells": [
        "Se escriben las obervaciones para modificar contacto 1"
      ]
    },
    {
      "cells": [
        "Se escriben las obervaciones para modificar contacto 2"
      ]
    }
  ]
});
formatter.scenario({
  "name": ": Modificar contacto",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ModificarContacto"
    },
    {
      "name": "@ModificarContacto"
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
  "name": "se ubica en la bandeja de contactos",
  "keyword": "When "
});
formatter.match({
  "location": "ModificarContactos.se_ubica_en_la_bandeja_de_contactos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se selecciona el contacto a modificar",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarContactos.se_selecciona_el_contacto_a_modificar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se modifican las observaciones Se escriben las obervaciones para modificar contacto 1 del contacto",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarContactos.se_modifican_las_observaciones_del_contacto(String)"
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
  "name": "el sistema presenta un mensaje de confirmación",
  "keyword": "Then "
});
formatter.match({
  "location": "ModificarContactos.el_sistema_presenta_un_mensaje_de_confirmacion()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": Modificar contacto",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ModificarContacto"
    },
    {
      "name": "@ModificarContacto"
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
  "name": "se ubica en la bandeja de contactos",
  "keyword": "When "
});
formatter.match({
  "location": "ModificarContactos.se_ubica_en_la_bandeja_de_contactos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se selecciona el contacto a modificar",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarContactos.se_selecciona_el_contacto_a_modificar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se modifican las observaciones Se escriben las obervaciones para modificar contacto 2 del contacto",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarContactos.se_modifican_las_observaciones_del_contacto(String)"
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
  "name": "el sistema presenta un mensaje de confirmación",
  "keyword": "Then "
});
formatter.match({
  "location": "ModificarContactos.el_sistema_presenta_un_mensaje_de_confirmacion()"
});
formatter.result({
  "status": "passed"
});
});