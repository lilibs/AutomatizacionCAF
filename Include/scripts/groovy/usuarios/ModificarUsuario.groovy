package usuarios
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


class ModificarUsuario {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@When("se ubica en la bandeja de administración")
	def se_ubica_en_la_bandeja_de_administracion() {

		WebUI.click(findTestObject('Object Repository/Administracion/i_Administracin_fas fa-cog'))
		WebUI.delay(5)
	}

	@And("se selecciona el usuario a modificar")
	def se_selecciona_el_usuario_a_modificar() {
		WebUI.click(findTestObject('Object Repository/Administracion/button_Modificar'))
		WebUI.delay(5)
	}

	@And("se modifican los roles disponibles")
	def se_modifican_los_roles_disponibles() {

		WebUI.click(findTestObject('Object Repository/Administracion/span_Roles Disponibles_k-icon k-i-arrow-double-60-right'))
		/*WebUI.click(findTestObject('Object Repository/Administracion/input_Off_btn btn-primary orange-button no-margin-top'))*/
		WebUI.delay(5)
	}


	@And("se modifican los roles de usuario disponibles")
	def se_modifican_los_roles_de_usuario_disponibles() {

		WebUI.click(findTestObject('Object Repository/Administracion/li_AdministradorFuncional'))
		WebUI.click(findTestObject('Object Repository/Administracion/Page_Modificar Roles De Usuario - Contactos de Tesorera/span_Roles Disponibles_k-icon k-i-arrow-60-left'))
		WebUI.delay(5)
	}





	@And("se guarda la información del usuario modificada")
	def se_guarda_la_informacion_del_usuario_modificada() {

		/*WebUI.click(findTestObject('Object Repository/Administracion/btnGuardarUser'))*/
		WebUI.delay(5)
		WebUI.click(findTestObject('Object Repository/Administracion/GuardarRolesUsuario'))

		WebUI.verifyElementPresent(findTestObject('Object Repository/Administracion/p_El usuario fue guardado exitosamente'), 5)
	}


	@And("se guarda la información de los roles de usuario modificada")
	def se_guarda_la_información_de_los_roles_de_usuario_modificada() {
		WebUI.delay(5)
		WebUI.click(findTestObject('Object Repository/Administracion/GuardarRolesUsuario'))
		WebUI.verifyElementPresent(findTestObject('Object Repository/Administracion/p_El usuario fue guardado exitosamente'), 5)
	}

	@And("se ubica en la bandeja de usuarios")
	def se_ubica_en_la_bandeja_de_usuarios() {
		WebUI.delay(5)
		WebUI.click(findTestObject('Object Repository/Administracion/h1_Bandeja de Usuarios'))
		WebUI.closeBrowser()
	}
}