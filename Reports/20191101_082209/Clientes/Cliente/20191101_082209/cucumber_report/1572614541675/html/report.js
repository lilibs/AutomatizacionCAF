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
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to click on object \u0027Object Repository/Clientes/a_Clientes\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:86)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:616)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$1.call(Unknown Source)\r\n\tat clientes.ConsultarCliente.se_ubica_en_la_opcion_clientes(ConsultarCliente.groovy:69)\r\n\tat ✽.se ubica en la opción clientes(E:/CAF/Automatizacion/CAF1/Include/features/Clientes/CrearCliente.feature:40)\r\nCaused by: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/Clientes/a_Clientes\u0027 located by \u0027By.xpath: //div[@id\u003d\u0027wrapper\u0027]/nav/div[4]/ul/li[2]/a\u0027 not found\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findWebElement(WebUiCommonHelper.java:1097)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.doCall(ClickKeyword.groovy:77)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.call(ClickKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:86)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:616)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$1.call(Unknown Source)\r\n\tat clientes.ConsultarCliente.se_ubica_en_la_opcion_clientes(ConsultarCliente.groovy:69)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:76)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:46)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:101)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat CrearCliente.run(CrearCliente:41)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:337)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:328)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:307)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:299)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:233)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:169)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:142)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:91)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1572614529021.run(TempTestSuite1572614529021.groovy:35)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "da clic en el link Crear cliente",
  "keyword": "When "
});
formatter.match({
  "location": "CrearCliente.da_clic_en_el_link_Crear_cliente()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "presiona el botón Guardar",
  "keyword": "And "
});
formatter.match({
  "location": "CrearCliente.presiona_el_boton_Guardar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Se visualizan los mensajes de validación",
  "keyword": "Then "
});
formatter.match({
  "location": "CrearCliente.Se_visualizan_los_mensajes_de_validacion()"
});
formatter.result({
  "status": "skipped"
});
});