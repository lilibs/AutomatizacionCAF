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
import org.openqa.selenium.JavascriptExecutor
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


class CrearContactos {

	@And("da clic en el link Crear contactos")
	def da_clic_en_el_link_Crear_contactos() {
		println "Opción crear contactos"

		WebUI.click(findTestObject('Page_Bandeja de Contactos - Contactos de Tesorera/a_Crear Contactos'))
	}

	@Then("el sistema muestra el formulario Crear Contactos")
	def el_sistema_muestra_el_formulario_Crear_Contactos() {
		println "Formulario de contactos"

		WebUI.verifyElementPresent(findTestObject('Bandeja de Contactos/Form_CrearContacto'), 2)
	}



	@When("presiona el botón Regresar de contactos")
	def presiona_el_boton_Regresar_de_contactos() {
		println  "Presiona botón regresar"

		WebUI.delay(5)
		WebUI.verifyTextPresent('Regresar', false)
		/*	WebUI.verifyElementPresent(findTestObject('Object Repository/Bandeja de Contactos/a_Regresar'), 5)*/
		WebUI.click(findTestObject('Object Repository/Bandeja de Contactos/a_Regresar'))
	}



	@Then("se visualiza nuevamente la página principal de contactos")
	def se_visualiza_nuevamente_la_pagina_principal_de_contactos() {
		println ("Visualizar página principal")
		WebUI.click(findTestObject('Object Repository/Bandeja de Contactos/Bandeja de Contactos'))
		WebUI.closeBrowser()
	}



	@And("se ubica en el formulario de crear contactos")
	def se_ubica_en_el_formulario_de_crear_contactos() {
		println "Formulario de crear contactos"
		WebUI.verifyElementPresent(findTestObject('Object Repository/Bandeja de Contactos/h1_Crear Contacto'), 1)
	}


	@When("selecciona el cliente que representa")
	def selecciona_el_cliente_que_representa() {
		println "Seleccionar cliente que representa"

		WebUI.delay(5)
		
		(DriverFactory.getWebDriver() as JavascriptExecutor).executeScript('$("#ddlCliente").data("kendoDropDownList").select(3);')
		
	
		
		
		/*WebUI.click(findTestObject('Object Repository/Bandeja de Contactos/SeleccioneLi'))

		WebUI.delay(5)

		WebUI.click(findTestObject('Object Repository/Bandeja de Contactos/ClienteRepLili'))*/

		
	}

	@And("selecciona la función")
	def selecciona_la_funcion() {
		println "Selecciona la función"

		/*WebUI.click(findTestObject('Bandeja de Contactos/SpanFuncion'))

		WebUI.delay(5)

		WebUI.click(findTestObject('CrearContacto/Page_Crear Contacto - Contactos de Tesorera/li_CIFO'))*/
		
		WebUI.delay(5)
		
		(DriverFactory.getWebDriver() as JavascriptExecutor).executeScript('$("#ddlCargo").data("kendoDropDownList").select(1);')
		
		
	}

	@And("digita el nombre para el contacto a crear (.*)")
	def digita_el_nombre_para_el_contacto_a_crear(String nombreContacto) {
		println "Ingresar nombre del contacto"
		WebUI.click(findTestObject('Bandeja de Contactos/NombreContacto'))
		WebUI.setText(findTestObject('Bandeja de Contactos/NombreContacto'), nombreContacto)
		WebUI.delay(3)
	}

	@And("digita los apellidos del contacto (.*)")
	def digita_los_apellidos_del_contacto(String apellidosContacto) {
		println "Ingresar apellidos del contacto"
		WebUI.click(findTestObject('Bandeja de Contactos/ApellidosContacto'))
		WebUI.setText(findTestObject('Bandeja de Contactos/ApellidosContacto'), apellidosContacto)
	}

	@And("se presiona el botón Guardar")
	def se_presiona_el_boton_Guardar() {
		println  "Guardar Cliente"

		WebUI.click(findTestObject('Object Repository/CrearCliente/Create/Page_Crear Cliente - Contactos de Tesorera/input_Campo Opcional_btnGuardar'))
		WebUI.delay(5)
		/*WebUI.verifyTextPresent("El nombre del cliente ya existe")*/
		/*WebUI.closeBrowser()*/
	}

	@Then("el sistema guarda la información del contacto")
	def el_sistema_guarda_la_informacion_del_contacto() {
		println "Se guarda la información"
		WebUI.delay(3)
		WebUI.verifyElementPresent(findTestObject('CrearContacto/Page_Crear Contacto - Contactos de Tesorera/btnGuardar'), 5)
		WebUI.click(findTestObject('Object Repository/Bandeja de Contactos/btnGuardar'))
		/*WebUI.verifyTextPresent(findTestObject('Object Repository/Bandeja de Contactos/span_Debe seleccionar el cliente que representa'), 2)
		 WebUI.verifyTextPresent(findTestObject('Object Repository/Bandeja de Contactos/span_Debe seleccionar el cargo'), 2)*/
	}

	@And("muestra mensaje de confirmación de la creación")
	def muestra_mensaje_de_confirmacion_de_la_creacion() {
		println "muestra mensaje de confirmación"
		WebUI.verifyElementPresent(findTestObject('CrearContacto/Page_Crear Contacto - Contactos de Tesorera/p_El usuario fue guardado exitosamente'),
				2)
		WebUI.delay(5)
		WebUI.takeScreenshot()
		WebUI.closeBrowser()
	}



	/*@And("muestra los campos faltantes por información")
	 def muestra_los_campos_faltantes_por_informacion() {
	 println "se muestra la información requerida"
	 WebUI.verifyTextPresent(findTestObject('Object Repository/Bandeja de Contactos/span_Debe seleccionar el cliente que representa'), 2)
	 WebUI.verifyTextPresent(findTestObject('Object Repository/Bandeja de Contactos/span_Debe seleccionar el cargo'), 2)
	 WebUI.takeScreenshot()
	 WebUI.closeBrowser()
	 }*/
}