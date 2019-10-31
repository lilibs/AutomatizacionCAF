$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/CAF/Automatizacion/CAF1/Include/features/Clientes/ConsultarCliente.feature");
formatter.feature({
  "name": "Consultar Cliente",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ConsultarCliente"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Consultar cliente existente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConsultaCliente_Existente"
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
  "name": "digita el nombre del cliente a consultar \u003cconsultarNombreCliente\u003e en el campo búsqueda",
  "keyword": "When "
});
formatter.step({
  "name": "presiona la tecla enter",
  "keyword": "And "
});
formatter.step({
  "name": "se visualiza el nombre del cliente \u003cconsultarNombreCliente\u003e en el resultado de la búsqueda",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "consultarNombreCliente"
      ]
    },
    {
      "cells": [
        "BBVA"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Consultar cliente existente",
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
  "name": "digita el nombre del cliente a consultar BBVA en el campo búsqueda",
  "keyword": "When "
});
formatter.match({
  "location": "ConsultarCliente.digita_el_nombre_del_cliente_a_consultar_en_el_campo_busqueda(String)"
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
  "name": "se visualiza el nombre del cliente BBVA en el resultado de la búsqueda",
  "keyword": "Then "
});
formatter.match({
  "location": "ConsultarCliente.se_visualiza_el_nombre_del_cliente_en_el_resultado_de_la_busqueda(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to verify object \u0027Object Repository/Clientes/ConsultaCliente/ConsultaCliente_Existente/td_BBVCOL\u0027 is present\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.verifyElementPresent(VerifyElementPresentKeyword.groovy:92)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.execute(VerifyElementPresentKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent(WebUiBuiltInKeywords.groovy:1434)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementPresent$4.call(Unknown Source)\r\n\tat clientes.ConsultarCliente.se_visualiza_el_nombre_del_cliente_en_el_resultado_de_la_busqueda(ConsultarCliente.groovy:92)\r\n\tat ✽.se visualiza el nombre del cliente BBVA en el resultado de la búsqueda(E:/CAF/Automatizacion/CAF1/Include/features/Clientes/ConsultarCliente.feature:13)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/Clientes/ConsultaCliente/ConsultaCliente_Existente/td_BBVCOL\u0027 located by \u0027By.xpath: //div[@id\u003d\u0027grvClientes\u0027]/table/tbody/tr/td[2]\u0027 not found\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.doCall(VerifyElementPresentKeyword.groovy:85)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.call(VerifyElementPresentKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.verifyElementPresent(VerifyElementPresentKeyword.groovy:92)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.execute(VerifyElementPresentKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent(WebUiBuiltInKeywords.groovy:1434)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementPresent$4.call(Unknown Source)\r\n\tat clientes.ConsultarCliente.se_visualiza_el_nombre_del_cliente_en_el_resultado_de_la_busqueda(ConsultarCliente.groovy:92)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:76)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:46)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:101)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat ConsultaCliente.run(ConsultaCliente:17)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:337)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:328)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:307)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:299)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:233)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:169)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:142)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:91)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1572550066465.run(TempTestSuite1572550066465.groovy:35)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Consultar cliente no existente",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConsultaCliente_NoExistente"
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
  "name": "digita el nombre del cliente a consultar \u003cconsultarNombreCliente\u003e en el campo búsqueda",
  "keyword": "When "
});
formatter.step({
  "name": "presiona la tecla enter",
  "keyword": "And "
});
formatter.step({
  "name": "se visualiza el mensaje No hay datos.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "consultarNombreCliente"
      ]
    },
    {
      "cells": [
        "Juan"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Consultar cliente no existente",
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
  "name": "digita el nombre del cliente a consultar Juan en el campo búsqueda",
  "keyword": "When "
});
formatter.match({
  "location": "ConsultarCliente.digita_el_nombre_del_cliente_a_consultar_en_el_campo_busqueda(String)"
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
  "name": "se visualiza el mensaje No hay datos.",
  "keyword": "Then "
});
formatter.match({
  "location": "ConsultarCliente.se_visualiza_el_mensaje(Object)"
});
formatter.result({
  "status": "passed"
});
});