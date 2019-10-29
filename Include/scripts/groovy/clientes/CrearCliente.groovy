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
		WebUI.click(findTestObject('Object Repository/Clientes/a_Clientes'))
	}

	@When("digita el nombre del cliente (.*)")
	def digita_el_nombre_del_cliente (String nombreCliente) {
		println ("Ingresar Nombre del cliente")
		
		WebUI.setText(findTestObject('Clientes/ConsultaCliente/input_Crear Cliente_txtBuscar'), nombreCliente)
		WebUI.sendKeys(findTestObject('Clientes/ConsultaCliente/input_Crear Cliente_txtBuscar'), Keys.chord(Keys.ENTER))
	}

	@And("digita el BBG Broker ID(.*)")
	def digita_el_BBG_Broker_ID (String IdBBG) {
		println ("Ingresar BBG Broker ID")
		WebUI.setText(findTestObject('Object Repository/CrearCliente/input_BBG Broker ID_Sigla'), IdBBG)
	}

	@And("selecciona la modalidad cliente disponible el item(.*)")
	def selecciona_la_modalidad_cliente_disponible_el_item (String itemModalidad) {
		println ("Seleccionar modalidad Cliente Disponible")
		WebUI.click(findTestObject('Page_Crear Cliente - Contactos de Tesorera/li_Activo'))
		WebUI.click(findTestObject('Object Repository/CrearCliente/a_Modalidades Cliente Disponibles_k-button k-button-icon'))
		WebUI.verifyElementPresent(findTestObject('Object Repository/CrearCliente/li_Activo_1'))
	}

	@And("se da clic en el botón transfer to modalidad")
	def se_da_clic_en_el_boton_transfer_to_modalidad () {
		//println  "Mensaje"
	}

	@And("selecciona en productos disponibles el item(.*)")
	def se_da_clic_en_el_boton_transfer_to_modalidad (String itemProducto) {
		println ("Seleccionar Producto Disponible")
		WebUI.click(findTestObject('Page_Crear Cliente - Contactos de Tesorera/li_Act- Time Deposit'))
		WebUI.click(findTestObject('Object Repository/CrearCliente/a_Productos Disponibles_k-button k-button-icon'))
		WebUI.verifyElementPresent(findTestObject('Object Repository/CrearCliente/li_Act- Time Deposit_1'))
	}

	@And("se da clic en el botón transfer to productos")
	def se_da_clic_en_el_boton_transfer_to_productos () {
		//println  "Mensaje"
	}

	@And("se da clic en el botón Guardar")
	def se_da_clic_en_el_botón_Guardar() {
		//println  "Mensaje"
	}

	/*@Then("el sistema muestra un mensaje de éxito")
	def el_sistema_muestra_un_mensaje_de_exito() {
		println ("Visualizar mensajes de Confirmacion")
		WebUI.verifyElementPresent(findTestObject('Object Repository/CrearCliente/div_xito El cliente fue guardado exitosamente'))
		WebUI.closeBrowser()
	}
*/
	/*
	 @And("se ubica en la opción clientes")
	 def se_ubica_en_la_opcion_clientes () {
	 println  "Mensaje"
	 }
	 */

	@When("da clic en el link Crear cliente")
	def da_clic_en_el_link_Crear_cliente () {
		println ("Seleccionar Boton crear Cliente")
		WebUI.click(findTestObject('Object Repository/Page_Bandeja de Clientes - Contactos de Tesorera/a_Crear Cliente'))
	}

	@And("presiona el botón Guardar")
	def presiona_el_boton_Guardar () {
		//println  "Mensaje"
	}


	@Then("Se visualizan los mensajes de validación")
	def Se_visualizan_los_mensajes_de_validacion() {
		println ("Visualizar mensajes de Validacion")
		WebUI.verifyElementPresent(findTestObject('Object Repository/CrearCliente/span_Debe ingresar un nombre'), 5)
	}

	@Then("el sistema muestra el formulario Crear Cliente")
	def el_sistema_muestra_el_formulario_Crear_Cliente() {
		println ("Visualizar formulario crear cliente")
	WebUI.verifyElementPresent(findTestObject('Object Repository/CrearCliente/Page_Crear Cliente - Contactos de Tesorera/h1_Crear Cliente'),
		0)

	
		}
	
	
	
	
	
	}



















