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
import org.openqa.selenium.Keys as Keys



class CrearUsuario {


	@When("digita el login del usuario a validar (.*)")
	def digita_el_login_del_usuario_a_validar(String consultarLogin) {

		println ("Ingresar Login del usuario")
		WebUI.click(findTestObject('Object Repository/Administracion/i_Administracin_fas fa-cog'))
		WebUI.click(findTestObject('Object Repository/Administracion/a_Crear Usuarios'))
		WebUI.click(findTestObject('Object Repository/Administracion/input_LoginUsuario'))
		WebUI.setText(findTestObject('Object Repository/Administracion/input_LoginUsuario'), consultarLogin)
		
		WebUI.delay(2)

	/*Boolean MG = WebUI.verifyTextPresent('El usuario no es válido o no existe, por favor verifique el usuario.', true)

		/*WebUI.waitForElementPresent(findTestObject('Object Repository/Administracion/p_El usuario no es vlido o no existe por favor verifique el usuario'), 15);*/
		/*if (MG) {

			int RN;
			RN = (int)(Math.random()*500)
			WebUI.delay(3)
			WebUI.setText(findTestObject('Object Repository/Administracion/input_LoginUsuario'), consultarLogin+RN)
			WebUI.sendKeys(findTestObject('Administracion/btnBuscarLoginUsuario'), Keys.chord(Keys.ENTER))
		}
		else {
			WebUI.comment("El usuario fue guardado exitosamente");
		}*/
	}

	@And("se presiona Buscar")
	def se_presiona_Buscar() {

		WebUI.click(findTestObject('Administracion/btnBuscarLoginUsuario'))
		WebUI.delay(5)
	}



	@Then("se visualiza mensaje de validación")
	def se_visualiza_mensaje_de_validacion() {
		WebUI.waitForElementPresent(findTestObject('Object Repository/Administracion/p_El usuario no es vlido o no existe por favor verifique el usuario'),
				5)
		WebUI.delay(5)
		WebUI.closeBrowser()
	}

	@And("se ingresa la información de los roles disponibles")
	def se_ingresa_la_información_de_los_roles_disponibles() {

		WebUI.click(findTestObject('Object Repository/Administracion/span_Roles Disponibles'))
		WebUI.delay(5)
	}

	@And("se da clic en Guardar Usuario")
	def se_da_clic_en_Guardar_Usuario() {

		WebUI.click(findTestObject('Object Repository/Administracion/btnGuardarUser'))
		WebUI.delay(5)
	}

	@Then("el sistema muestra mensaje de confirmación")
	def el_sistema_muestra_mensaje_de_confirmacion() {

		WebUI.waitForElementPresent(findTestObject('Object Repository/Administracion/p_El usuario ya existe en el sistema'), 5)
		WebUI.click(findTestObject('Object Repository/Administracion/a_Regresar'))
		WebUI.delay(5)
		WebUI.click(findTestObject('Object Repository/Administracion/h1_Bandeja de Usuarios'))
		WebUI.closeBrowser()
	}
}