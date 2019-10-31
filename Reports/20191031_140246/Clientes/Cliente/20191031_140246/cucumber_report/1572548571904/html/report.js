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
formatter.match({});
formatter.result({
  "error_message": "cucumber.runtime.AmbiguousStepDefinitionsException: \"digita el nombre del cliente a consultar BBVA en el campo búsqueda\" matches more than one step definition:\n  \"digita el nombre del cliente (.*)\" in CrearCliente.digita_el_nombre_del_cliente(String)\n  \"digita el nombre del cliente a consultar (.*) en el campo búsqueda\" in ConsultarCliente.digita_el_nombre_del_cliente_a_consultar_en_el_campo_busqueda(String)\n\r\n\tat cucumber.runtime.RuntimeGlue.stepDefinitionMatch(RuntimeGlue.java:89)\r\n\tat cucumber.runner.Runner.addTestStepsForPickleSteps(Runner.java:73)\r\n\tat cucumber.runner.Runner.createTestCaseForPickle(Runner.java:63)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:43)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:76)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:294)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1024)\r\n\tat groovy.lang.Closure.call(Closure.java:414)\r\n\tat groovy.lang.Closure.call(Closure.java:408)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:141)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:46)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallStatic(CallSiteArray.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callStatic(AbstractCallSite.java:194)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callStatic(AbstractCallSite.java:214)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:101)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat Script1571859569183.run(Script1571859569183.groovy:17)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:337)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:328)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:307)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:299)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:233)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:169)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:142)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:91)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:141)\r\n\tat TempTestSuite1572548566204.run(TempTestSuite1572548566204.groovy:35)\r\n\tat groovy.lang.GroovyShell.runScriptOrMainOrTestOrRunnable(GroovyShell.java:263)\r\n\tat groovy.lang.GroovyShell.run(GroovyShell.java:518)\r\n\tat groovy.lang.GroovyShell.run(GroovyShell.java:507)\r\n\tat groovy.ui.GroovyMain.processOnce(GroovyMain.java:653)\r\n\tat groovy.ui.GroovyMain.run(GroovyMain.java:384)\r\n\tat groovy.ui.GroovyMain.process(GroovyMain.java:370)\r\n\tat groovy.ui.GroovyMain.processArgs(GroovyMain.java:129)\r\n\tat groovy.ui.GroovyMain.main(GroovyMain.java:109)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.tools.GroovyStarter.rootLoader(GroovyStarter.java:109)\r\n\tat org.codehaus.groovy.tools.GroovyStarter.main(GroovyStarter.java:131)\r\n",
  "status": "ambiguous"
});
formatter.step({
  "name": "presiona la tecla enter",
  "keyword": "And "
});
formatter.match({
  "location": "ConsultarCliente.presiona_la_tecla_enter()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "se visualiza el nombre del cliente BBVA en el resultado de la búsqueda",
  "keyword": "Then "
});
formatter.match({
  "location": "ConsultarCliente.se_visualiza_el_nombre_del_cliente_en_el_resultado_de_la_busqueda(String)"
});
formatter.result({
  "status": "skipped"
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
formatter.match({});
formatter.result({
  "error_message": "cucumber.runtime.AmbiguousStepDefinitionsException: \"digita el nombre del cliente a consultar Juan en el campo búsqueda\" matches more than one step definition:\n  \"digita el nombre del cliente (.*)\" in CrearCliente.digita_el_nombre_del_cliente(String)\n  \"digita el nombre del cliente a consultar (.*) en el campo búsqueda\" in ConsultarCliente.digita_el_nombre_del_cliente_a_consultar_en_el_campo_busqueda(String)\n\r\n\tat cucumber.runtime.RuntimeGlue.stepDefinitionMatch(RuntimeGlue.java:89)\r\n\tat cucumber.runner.Runner.addTestStepsForPickleSteps(Runner.java:73)\r\n\tat cucumber.runner.Runner.createTestCaseForPickle(Runner.java:63)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:43)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:76)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:294)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1024)\r\n\tat groovy.lang.Closure.call(Closure.java:414)\r\n\tat groovy.lang.Closure.call(Closure.java:408)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:141)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:46)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallStatic(CallSiteArray.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callStatic(AbstractCallSite.java:194)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callStatic(AbstractCallSite.java:214)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:101)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat Script1571859569183.run(Script1571859569183.groovy:17)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:337)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:328)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:307)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:299)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:233)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:169)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:142)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:91)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:141)\r\n\tat TempTestSuite1572548566204.run(TempTestSuite1572548566204.groovy:35)\r\n\tat groovy.lang.GroovyShell.runScriptOrMainOrTestOrRunnable(GroovyShell.java:263)\r\n\tat groovy.lang.GroovyShell.run(GroovyShell.java:518)\r\n\tat groovy.lang.GroovyShell.run(GroovyShell.java:507)\r\n\tat groovy.ui.GroovyMain.processOnce(GroovyMain.java:653)\r\n\tat groovy.ui.GroovyMain.run(GroovyMain.java:384)\r\n\tat groovy.ui.GroovyMain.process(GroovyMain.java:370)\r\n\tat groovy.ui.GroovyMain.processArgs(GroovyMain.java:129)\r\n\tat groovy.ui.GroovyMain.main(GroovyMain.java:109)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.tools.GroovyStarter.rootLoader(GroovyStarter.java:109)\r\n\tat org.codehaus.groovy.tools.GroovyStarter.main(GroovyStarter.java:131)\r\n",
  "status": "ambiguous"
});
formatter.step({
  "name": "presiona la tecla enter",
  "keyword": "And "
});
formatter.match({
  "location": "ConsultarCliente.presiona_la_tecla_enter()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "se visualiza el mensaje No hay datos.",
  "keyword": "Then "
});
formatter.match({
  "location": "ConsultarCliente.se_visualiza_el_mensaje(Object)"
});
formatter.result({
  "status": "skipped"
});
});