package clientes
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords

import internal.GlobalVariable

import MobileBuiltInKeywords as Mobile
import WSBuiltInKeywords as WS
import WebUiBuiltInKeywords as WebUI

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By


import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import org.openqa.selenium.Keys as Keys

class ConsultarCliente {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */


	//Consultar Cliente existente

	/*@Given("El usuario ingresa a la página principal")
	 def El_usuario_ingresa_a_la_pagina_principal() {
	 println ("Ingreso Pagina Principal")
	 WebUI.openBrowser('')
	 WebUI.navigateToUrl(GlobalVariable.url)
	 }
	 */
	@And("se ubica en la opción clientes")
	def se_ubica_en_la_opcion_clientes() {
		println ("Seleccion Modulo Clientes")
		WebUI.click(findTestObject('Object Repository/Clientes/a_Clientes'))
	}


	@When("digita el nombre del cliente a consultar (.*) en el campo búsqueda")
	def digita_el_nombre_del_cliente_a_consultar_en_el_campo_busqueda(String consultarNombreCliente) {
		println ("Ingresar Nombre de Busqueda")

		WebUI.click(findTestObject('Clientes/ConsultaCliente/input_Crear Cliente_txtBuscar'))
		WebUI.setText(findTestObject('Clientes/ConsultaCliente/input_Crear Cliente_txtBuscar'), consultarNombreCliente)
		WebUI.delay(5, FailureHandling.CONTINUE_ON_FAILURE)

	}

	@And("presiona la tecla enter")
	def presiona_la_tecla_enter() {
		WebUI.sendKeys(findTestObject('Clientes/ConsultaCliente/input_Crear Cliente_txtBuscar'), Keys.chord(Keys.ENTER))
		WebUI.delay(5, FailureHandling.CONTINUE_ON_FAILURE)
	}


	@Then("se visualiza el nombre del cliente (.*) en el resultado de la búsqueda")
	def se_visualiza_el_nombre_del_cliente_en_el_resultado_de_la_busqueda(String consultarNombreCliente) {
		println ("Visualizar Resultado Consulta")

		WebUI.verifyElementPresent(findTestObject('Clientes/ConsultaCliente/ConsultaCliente_Existente/td_BBVCOL'), 5)
		WebUI.closeBrowser()
	}

	//Consultar Cliente inexistente

	@Then("se visualiza el mensaje sin registros")
	def se_visualiza_el_mensaje_sin_registros() {
		println ("Visualizar Resultado Consulta")

		WebUI.verifyElementPresent(findTestObject('Object Repository/Clientes/ConsultaCliente/ConsultaCliente_NoExitoso/span_No hay datos'), 5)
		WebUI.delay(5, FailureHandling.CONTINUE_ON_FAILURE)
		WebUI.closeBrowser()
	}



}