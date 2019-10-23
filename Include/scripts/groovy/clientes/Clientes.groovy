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
import org.openqa.selenium.Keys as Keys

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


class Clientes {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */

	
//Consultar Cliente
	
	@Given("El usuario ingresa en la pagina principal")
	def IngresarPaginaPrincipal() {
		println ("Ingreso Pagina Principal")
		WebUI.openBrowser('')
		WebUI.navigateToUrl('http://smdessc01:4800/CAF.Tesoreria.Web/')
	}

	@When("El usuario seleccione la opcion cliente")
	def SeleccionarOpcionCliente() {
		println ("Seleccion Modulo Clientes")
		WebUI.click(findTestObject('Object Repository/Clientes/a_Clientes'))
	}


	@And("El usuario ingrese el nombre del cliente (.*) en el campo de busqueda")
	def BuscarCliente(String Informacion) {
		println ("Ingresar Nombre de Busqueda")

		WebUI.setText(findTestObject('Clientes/ConsultaCliente/input_Crear Cliente_txtBuscar'), Informacion)
		WebUI.sendKeys(findTestObject('Clientes/ConsultaCliente/input_Crear Cliente_txtBuscar'), Keys.chord(Keys.ENTER))
	}



	@Then("Deberia visualizar en el resultado de la busqueda el nombre de (.*)")
	def VisualizarRespuestaBusqueda(String Respuesta) {
		println ("Visualizar Resultado Consulta")

		WebUI.verifyElementPresent(findTestObject('Clientes/ConsultaCliente/ConsultaCliente_Existente/td_BBVCOL'), 5)
		WebUI.closeBrowser()
	}



	@Then("Deberia visualizar en el resultado de la busqueda cero registros (.*)")
	def VisualizarRespuestaBusquedaSinRegistro(String RespuestaSinRegistro) {
		println ("Visualizar Resultado Consulta")

		WebUI.verifyElementPresent(findTestObject('Object Repository/Clientes/ConsultaCliente/ConsultaCliente_NoExitoso/span_No hay datos'), 5)
		WebUI.closeBrowser()
	}
	
	
// Crear Cliente 
	
	
	//El usuario seleccione el link de Crear Cliente
	
}