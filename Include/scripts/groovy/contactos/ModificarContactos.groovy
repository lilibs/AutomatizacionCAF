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


class ModificarContactos {

	@When("se ubica en la bandeja de contactos")
	def se_ubica_en_la_bandeja_de_contactos() {
		println "Se ubica en la bandeja de contactos"

		WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Bandeja de Contactos - Contactos de Tesorera/h1_Bandeja de Contactos'))
	}

	@And("se selecciona el contacto a modificar")
	def se_selecciona_el_contacto_a_modificar() {
		println "Se selecciona el contacto"
		WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Bandeja de Contactos - Contactos de Tesorera/a_Aegon Targaryen'))
	}

	@And("se modifican las observaciones (.*) del contacto")
	def se_modifican_las_observaciones_del_contacto(String Observaciones) {
		println "se modifica el contacto"

		WebUI.setText(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Contacto - Contactos de Tesorera/textarea_Otros Alias Jon Snow Jon NieveParece que no sabe nada'),
				Observaciones)
	}


	@And("se guarda la información modificada")
	def se_guarda_la_informacion_modificada() {
		println "se presiona el botón guardar"
		WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Contacto - Contactos de Tesorera/input_Elementos mostrados  1 - 3 de 3_btn btn-primary orange-button no-margin-top'))
	}


	@Then("el sistema presenta un mensaje de confirmación")
	def el_sistema_presenta_un_mensaje_de_confirmacion() {
		println "se muestra mensaje de confirmación"
		WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Contacto - Contactos de Tesorera/p_La operacin se realiz exitosamente'))

		WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Bandeja de Contactos - Contactos de Tesorera/h1_Bandeja de Contactos'))

		WebUI.closeBrowser()
	}
}