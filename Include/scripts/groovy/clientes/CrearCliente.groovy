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


class CrearCliente {


	/*@Given("El usuario ingresa a la página principal")
	 def El_usuario_ingresa_a_la_pagina_principal() {
	 println ("Ingreso Pagina Principal")
	 WebUI.openBrowser('')
	 WebUI.navigateToUrl('http://smdessc01:4800/CAF.Tesoreria.Web/')
	 }
	 */

	@Given("El usuario ingresa a la opción Crear Cliente")
	def El_usuario_ingresa_a_la_opcion_Crear_Cliente() {
		println "Ingresar a Crear Cliente"
		WebUI.verifyElementPresent(findTestObject('Object Repository/CrearCliente/Page_Crear Cliente - Contactos de Tesorera/h1_Crear Cliente'),
				0)
	}

	@When("digita el nombre del cliente a crear(.*)")
	def digita_el_nombre_del_cliente_a_crear (String nombreCliente) {
		println ("Ingresar Nombre del cliente")

		WebUI.click(findTestObject('CrearCliente/Page_Crear Cliente - Contactos de Tesorera/Page_Crear Cliente - Contactos de Tesorera/input_Nombre Cliente_Nombre'))
		WebUI.setText(findTestObject('CrearCliente/Page_Crear Cliente - Contactos de Tesorera/Page_Crear Cliente - Contactos de Tesorera/input_Nombre Cliente_Nombre'), nombreCliente)
	}

	@And("digita el BBG Broker ID(.*)")
	def digita_el_BBG_Broker_ID (String IdBBG) {
		println ("Ingresar BBG Broker ID")
		WebUI.setText(findTestObject('Object Repository/CrearCliente/input_BBG Broker ID_Sigla'), IdBBG)
	}

	@And("selecciona la modalidad de cliente disponible")
	def selecciona_la_modalidad_de_cliente_disponible () {
		WebUI.click(findTestObject('Object Repository/CrearCliente/Create/Page_Crear Cliente - Contactos de Tesorera/a_Modalidades Cliente Disponibles_k-button k-button-icon'))
	}



	@And("selecciona el producto disponible")
	def selecciona_el_producto_disponible () {
		println ("Seleccionar Producto Disponible")
		WebUI.click(findTestObject('Object Repository/CrearCliente/Create/Page_Crear Cliente - Contactos de Tesorera/span_Productos Disponibles_k-icon k-i-arrow-double-60-right'))
	}


	@And("se da clic en el botón Guardar")
	def se_da_clic_en_el_botón_Guardar() {
		println  "Guardar Cliente"
		WebUI.click(findTestObject('Object Repository/CrearCliente/Create/Page_Crear Cliente - Contactos de Tesorera/input_Campo Opcional_btnGuardar'))
		WebUI.delay(5)
	}


	@And("presiona el botón Regresar")
	def presiona_el_boton_Regresar() {
		println  "Presiona botón regresar"

		WebUI.click(findTestObject('Object Repository/CrearCliente/a_Regresar'))
	}



	@Then("se visualiza nuevamente la página principal")
	def se_visualiza_nuevamente_la_pagina_principal() {
		println ("Visualizar página principal")
		/*--WebUI.click(findTestObject('Object Repository/Page_Bandeja de Clientes - Contactos de Tesorera/h1_Bandeja de Clientes'))*/
		WebUI.click(findTestObject('Object Repository/Clientes/a_Clientes'))
	}
	@Then("el sistema guarda la información del cliente")
	def el_sistema_muestra_un_mensaje_de_exito() {
		println ("Visualizar mensajes de Confirmacion")
		WebUI.delay(10)
		WebUI.closeBrowser()
	}


	@When("da clic en el link Crear cliente")
	def da_clic_en_el_link_Crear_cliente () {
		println ("Seleccionar Boton crear Cliente")
		WebUI.click(findTestObject('Object Repository/Page_Bandeja de Clientes - Contactos de Tesorera/a_Crear Cliente'))
	}

	@And("presiona el botón Guardar")
	def presiona_el_boton_Guardar () {
		println  "Mensaje"
		WebUI.click(findTestObject('CrearCliente/Page_Crear Cliente - Contactos de Tesorera/input_Campo Opcional_btnGuardar'))
	}


	@Then("Se visualizan los mensajes de validación")
	def Se_visualizan_los_mensajes_de_validacion() {
		println ("Visualizar mensajes de Validacion")
		/*WebUI.verifyElementText(findTestObject('CrearCliente/Page_Crear Cliente - Contactos de Tesorera/span_Debe ingresar un nombre'), 
		 '')*/
		WebUI.closeBrowser()
	}


	@Then("el sistema muestra el formulario Crear Cliente")
	def el_sistema_muestra_el_formulario_Crear_Cliente() {
		println ("Visualizar formulario crear cliente")
		WebUI.verifyElementPresent(findTestObject('Object Repository/CrearCliente/Page_Crear Cliente - Contactos de Tesorera/h1_Crear Cliente'),
				0)
	}
}



















