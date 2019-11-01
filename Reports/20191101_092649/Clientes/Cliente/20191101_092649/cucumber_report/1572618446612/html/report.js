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
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to click on object \u0027Object Repository/CrearCliente/Page_Crear Cliente - Contactos de Tesorera/Page_Crear Cliente - Contactos de Tesorera/input_Nombre Cliente_Nombre\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:86)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:616)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$2.call(Unknown Source)\r\n\tat clientes.CrearCliente.digita_el_nombre_del_cliente_a_crear(CrearCliente.groovy:73)\r\n\tat ✽.digita el nombre del cliente a crear Liliana(E:/CAF/Automatizacion/CAF1/Include/features/Clientes/CrearCliente.feature:17)\r\nCaused by: org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput class\u003d\"k-textbox form-control\" data-val\u003d\"true\" data-val-length\u003d\"El campo no debe superar una longitud de 200 caracteres.\" data-val-length-max\u003d\"200\" data-val-required\u003d\"Debe ingresar un nombre.\" id\u003d\"Nombre\" name\u003d\"Nombre\" placeholder\u003d\"Nombre para el cliente\" style\u003d\"font-size:16px;\"\u003e is not clickable at point (513, 308). Other element would receive the click: \u003cdiv class\u003d\"loader\" id\u003d\"AjaxLoader\" style\u003d\"\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d77.0.3865.120)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027P-LSEPULVEDAP\u0027, ip: \u002710.60.6.164\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.selenium.driver.CChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.120, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\LSEPUL~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51376}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: bbf51fc7afa2da145161fbc3f8c437fb\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat com.kms.katalon.selenium.driver.CChromeDriver.execute(CChromeDriver.java:20)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.doCall(ClickKeyword.groovy:79)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.call(ClickKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:86)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:616)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$2.call(Unknown Source)\r\n\tat clientes.CrearCliente.digita_el_nombre_del_cliente_a_crear(CrearCliente.groovy:73)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:76)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:46)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:101)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat CrearCliente.run(CrearCliente:41)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:337)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:328)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:307)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:299)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:233)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:169)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:142)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:91)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1572618409996.run(TempTestSuite1572618409996.groovy:35)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "digita el BBG Broker ID 5",
  "keyword": "And "
});
formatter.match({
  "location": "CrearCliente.digita_el_BBG_Broker_ID(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "selecciona la modalidad de cliente disponible",
  "keyword": "And "
});
formatter.match({
  "location": "CrearCliente.selecciona_la_modalidad_de_cliente_disponible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "selecciona el producto disponible",
  "keyword": "And "
});
formatter.match({
  "location": "CrearCliente.selecciona_el_producto_disponible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "se da clic en el botón Guardar",
  "keyword": "And "
});
formatter.match({
  "location": "CrearCliente.se_da_clic_en_el_botón_Guardar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "el sistema guarda la información del cliente",
  "keyword": "Then "
});
formatter.match({
  "location": "CrearCliente.el_sistema_muestra_un_mensaje_de_exito()"
});
formatter.result({
  "status": "skipped"
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