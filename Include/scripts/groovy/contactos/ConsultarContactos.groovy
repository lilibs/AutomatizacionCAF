package contactos
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

class ConsultarContactos {
	@And("se ubica en la opción contactos")
	def se_ubica_en_la_opcion_contactos() {
		println ("Seleccion Modulo Contactos")
		WebUI.click(findTestObject('Object Repository/Bandeja de Contactos/Contactos'))
	}


	@When("digita el nombre del contacto a consultar (.*) en el campo búsqueda")
	def digita_el_nombre_del_contacto_a_consultar_en_el_campo_busqueda(String consultarNombreContacto) {
		println ("Ingresar Nombre contacto en la búsqueda")

		WebUI.click(findTestObject('Bandeja de Contactos/txtBuscarContacto'))
		WebUI.setText(findTestObject('Bandeja de Contactos/txtBuscarContacto'), consultarNombreContacto)
	}

	@And("presiona la tecla enter en el campo de búsqueda del contacto")
	def presiona_la_tecla_enter_en_el_campo_de_busqueda_del_contacto() {

		WebUI.sendKeys(findTestObject('Bandeja de Contactos/txtBuscarContacto'), Keys.chord(Keys.ENTER))
		WebUI.delay(5)
	}


	@Then("se visualiza el nombre del contacto en el resultado de la búsqueda")
	def se_visualiza_el_nombre_del_contacto_en_el_resultado_de_la_busqueda() {
		println ("Visualizar Resultado Consulta")

		WebUI.verifyTextPresent('Bartolomeo J Simpson', false)
		WebUI.delay(5)
		WebUI.closeBrowser()
	}



	//Consultar Cliente inexistente

	@Then("se visualiza el mensaje No hay datos")
	def se_visualiza_el_mensaje_no_hay_datos() {
		println ("Visualizar Resultado Consulta No hay datos")

		WebUI.verifyElementPresent(findTestObject('Object Repository/Bandeja de Contactos/MensajeNohaydatos'), 5)
		WebUI.closeBrowser()
	}


}

