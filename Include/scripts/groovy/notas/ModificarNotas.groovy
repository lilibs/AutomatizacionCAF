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


class ModificarNotas {

	@And("se selecciona la nota a modificar")
	def se_selecciona_la_nota_a_modificar() {


		WebUI.click(findTestObject('Object Repository/Notas/IDBBG'))
	}

	@And("se da clic sobre la acción Modificar")
	def se_da_clic_sobre_la_accion_Modificar() {

		WebUI.verifyElementPresent(findTestObject('Notas/a_Modificar'), 2)
		WebUI.click(findTestObject('Notas/a_Modificar'))
	}

	@And("se ubica en el formulario de modificar nota")
	def se_ubica_en_el_formulario_de_modificar_nota() {
	}


	@And("se modifica el titulo de la nota (.*)")
	def se_modifica_el_titulo_de_la_nota(String tituloN) {
		WebUI.setText(findTestObject('Notas/input_Ttulo_Titulo'), tituloN)
	}

	@And("se modifica el contenido de la nota (.*)")
	def se_modifica_el_contenido_de_la_nota(String contenidoN) {
	}



	@Then("el sistema presenta un mensaje de confirmación de la modificación")
	def el_sistema_presenta_un_mensaje_de_confirmacion_de_la_modificacion() {

		WebUI.click(findTestObject('Notas/p_La nota fue guardada exitosamente (1)'))

		WebUI.verifyElementPresent(findTestObject('Notas/Bandeja de Notas'), 5)

		WebUI.closeBrowser()
	}
}