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
  "name": "el sistema muestra un mensaje de éxito",
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
        "Colombia",
        "lilibs633@hotmail.com",
        "tag",
        "dirección CR 70"
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
  "name": "actualiza el nombre del cliente Colombia",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarCliente.actualiza_el_nombre_del_cliente(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to click on object \u0027Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/input_NombreCliente_Nombre\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:86)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:616)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$1.call(Unknown Source)\r\n\tat clientes.ModificarCliente.actualiza_el_nombre_del_cliente(ModificarCliente.groovy:72)\r\n\tat ✽.actualiza el nombre del cliente Colombia(E:/CAF/Automatizacion/CAF1/Include/features/Clientes/ModificarCliente.feature:14)\r\nCaused by: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/input_NombreCliente_Nombre\u0027 located by \u0027By.xpath: id(\"Nombre\")[count(. | //*[@value \u003d \u0027BBVA Colombia\u0027]) \u003d count(//*[@value \u003d \u0027BBVA Colombia\u0027])]\u0027 not found\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findWebElement(WebUiCommonHelper.java:1097)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.doCall(ClickKeyword.groovy:77)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.call(ClickKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:86)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:616)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$1.call(Unknown Source)\r\n\tat clientes.ModificarCliente.actualiza_el_nombre_del_cliente(ModificarCliente.groovy:72)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:76)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:46)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:101)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat ModificarCLiente.run(ModificarCLiente:51)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:337)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:328)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:307)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:299)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:233)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:169)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:142)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:91)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1572552323824.run(TempTestSuite1572552323824.groovy:35)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "digita el correo lilibs633@hotmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarCliente.digita_el_correo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "da clic en el botón Agregar correo",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarCliente.da_clic_en_el_boton_Agregar_correo()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "digita un tag tag",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarCliente.digita_un_tag(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "da clic en el botón Agregar tag",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarCliente.da_clic_en_el_boton_Agregar_tag()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "digita la dirección dirección CR 70",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarCliente.digita_la_direccion(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "da clic en el botón Guardar",
  "keyword": "And "
});
formatter.match({
  "location": "ModificarCliente.da_clic_en_el_boton_Guardar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "el sistema muestra un mensaje de éxito",
  "keyword": "Then "
});
formatter.match({
  "location": "PasosComunesCliente.el_sistema_muestra_un_mensaje_de_exito()"
});
formatter.result({
  "status": "skipped"
});
});