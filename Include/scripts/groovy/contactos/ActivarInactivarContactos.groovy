package contactos
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import java.awt.Robot
import java.awt.event.KeyEvent

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


class ActivarInactivarContactos {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */

	@When("consulta un contacto con estado (.*) inactivo")
	def consulta_un_contacto_con_estado_inactivo(String estado) {
		println estado
		WebUI.click(findTestObject('Bandeja de Contactos/txtBuscarContacto'))
		WebUI.setText(findTestObject('Bandeja de Contactos/txtBuscarContacto'), estado)
		WebUI.sendKeys(findTestObject('Bandeja de Contactos/txtBuscarContacto'), Keys.chord(Keys.ENTER))
		WebUI.delay(5)
	}

	@And("da clic sobre el botón activar")
	def da_clic_sobre_el_boton_activar() {
		println "Da clic en el botón Activar"
		WebUI.click(findTestObject('Object Repository/ActivarInactivarContacto/Activar_button'))
		WebUI.delay(5, FailureHandling.CONTINUE_ON_FAILURE)
	}



	@Then("El sistema muestra mensaje para activar el contacto")
	def El_sistema_muestra_mensaje_para_activar_el_contacto() {
		println "Mensaje de confirmación para activar el contacto"

		
		/*'Get text alert on the alert when it\'s shown'
		 alertText = WebUI.getAlertText()
		 'Verify text alert is correct or not'
		 WebUI.verifyMatch(alertText, '¿Está seguro de activar el contacto?', false)*/

		

		
	}

	@And("se da clic en el botón Aceptar")
	def se_da_clic_en_el_boton_Aceptar() {
		println "Clic botón Aceptar"

				Robot robot = new Robot()
		robot.keyPress(KeyEvent.VK_ENTER)
		WebUI.delay(5)
		WebUI.closeBrowser()
	}

	@When("consulta un contacto con estado (.*) activo")
	def consulta_un_contacto_con_estado_activo(String estado) {
		println estado

		WebUI.click(findTestObject('Bandeja de Contactos/txtBuscarContacto'))
		WebUI.setText(findTestObject('Bandeja de Contactos/txtBuscarContacto'), estado)
		WebUI.sendKeys(findTestObject('Bandeja de Contactos/txtBuscarContacto'), Keys.chord(Keys.ENTER))
		WebUI.delay(5)
	}

	@And("da clic sobre el botón Inactivar")
	def da_clic_sobre_el_boton_Inactivar() {
		println "Dar clic en el botón inactivar"

		WebUI.click(findTestObject('Object Repository/ActivarInactivarContacto/Inactivar_button'))
		WebUI.click(findTestObject('ActivarInactivarContacto/Fecha de Baja_btnActivo'))
		WebUI.waitForElementPresent(findTestObject('ActivarInactivarContacto/p_La operacin se realiz exitosamente'), 5)
	}

	@Then("El sistema muestra ventana para inactivar el contacto")
	def El_sistema_muestra_ventana_para_inactivar_el_contacto() {
		println "Ventana con información para inactivar contacto"

		/*	'Get text alert on the alert when it\'s shown'
		 alertText = WebUI.getAlertText()
		 WebUI.delay(5, FailureHandling.CONTINUE_ON_FAILURE)
		 'Verify text alert is correct or not'
		 WebUI.verifyMatch(alertText, '¿Está seguro de activar el contacto?', false)
		 WebUI.delay(5, FailureHandling.CONTINUE_ON_FAILURE)*/
	}





	@And("se da clic en Guardar para inactivar el contacto")
	def se_da_clic_en_Guardar_para_inactivar_el_contacto() {
		println "Dar clic en el botón inactivar"
	}

	@And("se presenta mensaje confirmando la inactivación del contacto")
	def se_presenta_mensaje_confirmando_la_inactivacion_del_contacto() {
		println "Mensaje de confirmación"
		WebUI.click(findTestObject('ActivarInactivarContacto/p_La operacin se realiz exitosamente'))
		WebUI.delay(5, FailureHandling.CONTINUE_ON_FAILURE)
		WebUI.closeBrowser()
	}
}