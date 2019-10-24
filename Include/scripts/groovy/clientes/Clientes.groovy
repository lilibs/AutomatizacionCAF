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

	@When("El usuario selecciona la opcion cliente")
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
	
	
	@And("El usuario selecciona la Modalidad de Cliente Disponible")
	def SeleccionarModalidadClienteDisponible() {
		println ("Seleccionar modalidad Cliente Disponible")
		
		WebUI.click(findTestObject('Page_Crear Cliente - Contactos de Tesorera/li_Activo'))
		WebUI.click(findTestObject('Object Repository/CrearCliente/a_Modalidades Cliente Disponibles_k-button k-button-icon'))	
		WebUI.verifyElementPresent(findTestObject('Object Repository/CrearCliente/li_Activo_1'))
		
	}
	
	
	@And("El usuario selecciona la Modalidad de Productos Disponible")
	def SeleccionarModalidadProductoDisponible() {
		println ("Seleccionar modalidad Producto Disponible")
		
		WebUI.click(findTestObject('Page_Crear Cliente - Contactos de Tesorera/li_Act- Time Deposit'))
		WebUI.click(findTestObject('Object Repository/CrearCliente/a_Productos Disponibles_k-button k-button-icon'))
		WebUI.verifyElementPresent(findTestObject('Object Repository/CrearCliente/li_Act- Time Deposit_1'))
		
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

	@And("El usuario selecciona el link de Crear Cliente")
	def SeleccionarLinkCrearCliente() {
		println ("Seleccionar Boton crear Cliente")
		
		WebUI.click(findTestObject('Object Repository/Page_Bandeja de Clientes - Contactos de Tesorera/a_Crear Cliente'))

	}
	
	@And("El usuario seleccione el boton Regresar")
	def SeleccionarBotonRegresar() {
		println ("Seleccionar Boton Regresar")
		
		WebUI.click(findTestObject('Object Repository/CrearCliente/a_Regresar'))

	}
	
	@Then("Deberia visualizar nuevamente la pagina principal")
	def VisualizarPaginaPrincipal() {
		println ("Visualizar de Nuevo la página principal")
		
		WebUI.click(findTestObject('Object Repository/Page_Bandeja de Clientes - Contactos de Tesorera/h1_Bandeja de Clientes'))

	}
	

	@And("El usuario selecciona el boton de Guardar")
	def SeleccionarBotonGuardar() {
		println ("Seleccionar Boton Guardar")
		
		WebUI.click(findTestObject('Object Repository/CrearCliente/input_Campo Opcional_btnGuardar'))

	}
	
	
	@Then("Deberia visualizar los mensajes de validacion")
	def VisualizarMensajesValidacion() {
		println ("Visualizar mensajes de Validacion")
		
		WebUI.verifyElementPresent(findTestObject('Object Repository/CrearCliente/span_Debe ingresar un nombre'), 5)
		
	}
	
	
	@And("El usuario ingresa los campos de (.*) y (.*)")
	def IngresarInformacion(String NombreCliente, String IdBBG) {
		println ("Ingresar información")
		
		
		WebUI.setText(findTestObject('Object Repository/CrearCliente/input_Nombre Cliente_Nombre'), NombreCliente)
		WebUI.setText(findTestObject('Object Repository/CrearCliente/input_BBG Broker ID_Sigla'), IdBBG)

	}
	
	
	@Then("Deberia visualizar el mensaje de confirmacion")
	def VisualizarMensajesConfirmacionRegistro() {
		println ("Visualizar mensajes de Confirmacion")
		
		WebUI.verifyElementPresent(findTestObject('Object Repository/CrearCliente/div_xito                El cliente fue guardado exitosamente'))
		
	}
	
	
}