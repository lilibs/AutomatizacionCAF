package notas
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


class CrearNotas {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@And("se ubica en la opción notas")
	def se_ubica_en_la_opcion_notas() {
		WebUI.click(findTestObject('Notas/Notas'))
	}

	@When("da clic en el link Crear notas")
	def da_clic_en_el_link_Crear_notas() {
		WebUI.click(findTestObject('Notas/a_Crear Notas'))
	}

	@Then("el sistema muestra el formulario Crear Notas")
	def el_sistema_muestra_el_formulario_Crear_Notas() {
		WebUI.verifyElementPresent(findTestObject('Notas/FormCrearNotas'), 5)
		WebUI.delay(5, FailureHandling.CONTINUE_ON_FAILURE)
	}


	@And("presiona el botón Regresar del formulario de notas")
	def presiona_el_boton_Regresar_del_formulario_de_notas() {

		WebUI.click(findTestObject('Object Repository/Notas/Regresar'))
	}

	@Then("se visualiza nuevamente la página principal de notas")
	def se_visualiza_nuevamente_la_pagina_principal_de_notas() {

		WebUI.delay(5, FailureHandling.CONTINUE_ON_FAILURE)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Notas/Bandeja de Notas'), 2)
		
	}

	@And("selecciona el cliente")
	def selecciona_el_cliente() {

		WebUI.verifyElementPresent(findTestObject('Notas/span_Seleccione cliente'), 5)
		WebUI.click(findTestObject('Notas/span_Seleccione cliente'))
		WebUI.click(findTestObject('Notas/li_Liliana'))
	}

	@And("digita el titulo de la nota (.*)")
	def digita_el_titulo_de_la_nota(String tituloNota) {

		WebUI.setText(findTestObject('Notas/input_Ttulo_Titulo'), tituloNota)
		WebUI.delay(5, FailureHandling.CONTINUE_ON_FAILURE)
	}

	@And("digita el contenido (.*)")
	def digita_el_contenido(String contenidoNota) {

		WebUI.setText(findTestObject('Notas/textarea_Contenido_Contenido'), contenidoNota)
		WebUI.delay(5, FailureHandling.CONTINUE_ON_FAILURE)
	}

	@And("se guarda la información de la nota")
	def se_guarda_la_información_de_la_nota() {

		WebUI.click(findTestObject('Notas/btnGuardar'))
		WebUI.delay(5, FailureHandling.CONTINUE_ON_FAILURE)
	}

	@Then("el sistema muestra mensaje confirmando el guardado de la nota")
	def el_sistema_muestra_mensaje_confirmando_el_guardado_de_la_nota() {

		WebUI.waitForElementPresent(findTestObject('Notas/p_La nota fue guardada exitosamente'), 5)
		WebUI.verifyTextPresent('La nota fue guardada exitosamente', false)
		
		/*WebUI.click(findTestObject('Notas/p_La nota fue guardada exitosamente'))*/
		

		WebUI.takeScreenshot()

		WebUI.closeBrowser()
	}
}









