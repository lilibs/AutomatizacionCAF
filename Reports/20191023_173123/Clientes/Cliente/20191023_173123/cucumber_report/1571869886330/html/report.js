$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/TORO/INTERGRUPO/AUTOMATIZACION_PROYECTOS/PROYECTOS/CAF/CAF/Include/features/Clientes/ConsultarCliente.feature");
formatter.feature({
  "name": "Usuario que ingresa al formulario y en la barra de busqueda consulta un cliente.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ConsultarCliente"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Consulta cliente existente correctamente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConsultaCliente_Existente"
    }
  ]
});
formatter.step({
  "name": "El usuario ingresa en la pagina principal",
  "keyword": "Given "
});
formatter.step({
  "name": "El usuario seleccione la opcion cliente",
  "keyword": "When "
});
formatter.step({
  "name": "El usuario ingrese el nombre del cliente \u003cInformacion\u003e en el campo de busqueda",
  "keyword": "And "
});
formatter.step({
  "name": "Deberia visualizar en el resultado de la busqueda el nombre de \u003cRespuesta\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Informacion",
        "Respuesta"
      ]
    },
    {
      "cells": [
        "BBVA",
        "BBVA"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Consulta cliente existente correctamente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConsultarCliente"
    },
    {
      "name": "@ConsultaCliente_Existente"
    }
  ]
});
formatter.step({
  "name": "El usuario ingresa en la pagina principal",
  "keyword": "Given "
});
formatter.match({
  "location": "Clientes.IngresarPaginaPrincipal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usuario seleccione la opcion cliente",
  "keyword": "When "
});
formatter.match({
  "location": "Clientes.SeleccionarOpcionCliente()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usuario ingrese el nombre del cliente BBVA en el campo de busqueda",
  "keyword": "And "
});
formatter.match({
  "location": "Clientes.BuscarCliente(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Deberia visualizar en el resultado de la busqueda el nombre de BBVA",
  "keyword": "Then "
});
formatter.match({
  "location": "Clientes.VisualizarRespuestaBusqueda(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Consulta cliente no existente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConsultaCliente_NoExistente"
    }
  ]
});
formatter.step({
  "name": "El usuario ingresa en la pagina principal",
  "keyword": "Given "
});
formatter.step({
  "name": "El usuario seleccione la opcion cliente",
  "keyword": "When "
});
formatter.step({
  "name": "El usuario ingrese el nombre del cliente \u003cInformacionNo\u003e en el campo de busqueda",
  "keyword": "And "
});
formatter.step({
  "name": "Deberia visualizar en el resultado de la busqueda cero registros \u003cRespuesta\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "InformacionNo",
        "RespuestaNo"
      ]
    },
    {
      "cells": [
        "Andres",
        "No hay datos"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Consulta cliente no existente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConsultarCliente"
    },
    {
      "name": "@ConsultaCliente_NoExistente"
    }
  ]
});
formatter.step({
  "name": "El usuario ingresa en la pagina principal",
  "keyword": "Given "
});
formatter.match({
  "location": "Clientes.IngresarPaginaPrincipal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usuario seleccione la opcion cliente",
  "keyword": "When "
});
formatter.match({
  "location": "Clientes.SeleccionarOpcionCliente()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usuario ingrese el nombre del cliente Andres en el campo de busqueda",
  "keyword": "And "
});
formatter.match({
  "location": "Clientes.BuscarCliente(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Deberia visualizar en el resultado de la busqueda cero registros \u003cRespuesta\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "Clientes.VisualizarRespuestaBusquedaSinRegistro(String)"
});
formatter.result({
  "status": "passed"
});
});