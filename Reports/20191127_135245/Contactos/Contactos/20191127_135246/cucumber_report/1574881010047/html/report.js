$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/CAF/Automatizacion/CAF1/Include/features/Contactos/ConsultarContactos.feature");
formatter.feature({
  "name": "Escenario para realizar la consulta de los contactos",
  "description": "  Yo como usuario de la aplicación requiero consultar los contactos",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ConsultarContactos"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Consultar contactos existentes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@consultarContactos_existente"
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
  "name": "digita el nombre del contacto a consultar \u003cconsultarNombreContacto\u003e en el campo búsqueda",
  "keyword": "When "
});
formatter.step({
  "name": "presiona la tecla enter en el campo de búsqueda del contacto",
  "keyword": "And "
});
formatter.step({
  "name": "se visualiza el nombre del contacto en el resultado de la búsqueda",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "consultarNombreContacto"
      ]
    },
    {
      "cells": [
        "Simpson"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Consultar contactos existentes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConsultarContactos"
    },
    {
      "name": "@consultarContactos_existente"
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
  "name": "digita el nombre del contacto a consultar Simpson en el campo búsqueda",
  "keyword": "When "
});
formatter.match({
  "location": "ConsultarContactos.digita_el_nombre_del_contacto_a_consultar_en_el_campo_busqueda(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "presiona la tecla enter en el campo de búsqueda del contacto",
  "keyword": "And "
});
formatter.match({
  "location": "ConsultarContactos.presiona_la_tecla_enter_en_el_campo_de_busqueda_del_contacto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se visualiza el nombre del contacto en el resultado de la búsqueda",
  "keyword": "Then "
});
formatter.match({
  "location": "ConsultarContactos.se_visualiza_el_nombre_del_contacto_en_el_resultado_de_la_busqueda()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Consultar contactos no existentes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConsultaContactos_NoExistente"
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
  "name": "digita el nombre del contacto a consultar \u003cconsultarNombreContacto\u003e en el campo búsqueda",
  "keyword": "When "
});
formatter.step({
  "name": "presiona la tecla enter",
  "keyword": "And "
});
formatter.step({
  "name": "se visualiza el mensaje No hay datos",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "consultarNombreContacto"
      ]
    },
    {
      "cells": [
        "Jennifer"
      ]
    },
    {
      "cells": [
        "María"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Consultar contactos no existentes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConsultarContactos"
    },
    {
      "name": "@ConsultaContactos_NoExistente"
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
  "name": "digita el nombre del contacto a consultar Jennifer en el campo búsqueda",
  "keyword": "When "
});
formatter.match({
  "location": "ConsultarContactos.digita_el_nombre_del_contacto_a_consultar_en_el_campo_busqueda(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "presiona la tecla enter",
  "keyword": "And "
});
formatter.match({
  "location": "ConsultarCliente.presiona_la_tecla_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se visualiza el mensaje No hay datos",
  "keyword": "Then "
});
formatter.match({
  "location": "ConsultarContactos.se_visualiza_el_mensaje_no_hay_datos()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Consultar contactos no existentes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConsultarContactos"
    },
    {
      "name": "@ConsultaContactos_NoExistente"
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
  "name": "digita el nombre del contacto a consultar María en el campo búsqueda",
  "keyword": "When "
});
formatter.match({
  "location": "ConsultarContactos.digita_el_nombre_del_contacto_a_consultar_en_el_campo_busqueda(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "presiona la tecla enter",
  "keyword": "And "
});
formatter.match({
  "location": "ConsultarCliente.presiona_la_tecla_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se visualiza el mensaje No hay datos",
  "keyword": "Then "
});
formatter.match({
  "location": "ConsultarContactos.se_visualiza_el_mensaje_no_hay_datos()"
});
formatter.result({
  "status": "passed"
});
});