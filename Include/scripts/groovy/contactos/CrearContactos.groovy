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


class CrearContactos {
	
	@When("da clic en el link Crear contactos")
	def da_clic_en_el_link_Crear_contactos() {
		println "Opción crear contactos"
		
		WebUI.click(findTestObject('Object Repository/Bandeja de Contactos/LinkCrearContactos'))
	}

	@Then("el sistema muestra el formulario Crear Contactos")
	def el_sistema_muestra_el_formulario_Crear_Contactos() {
		println "Formulario de contactos"
		
		WebUI.verifyElementPresent(findTestObject('Bandeja de Contactos/Form_CrearContacto'), 0)
		
	}


	@Given("El usuario ingresa a la opción Crear Contactos")
	def El_usuario_ingresa_a_la_opcion_Crear_Contactos() {
		println "Opción Crear Contactos"
		WebUI.click(findTestObject('Object Repository/Bandeja de Contactos/LinkCrearContactos'))
		
	}


	@When("digita el nombre para el contacto a crear (.*)")
	def digita_el_nombre_para_el_contacto_a_crear(String nombreContacto) {
		println "Ingresar nombre del contacto"
		WebUI.click(findTestObject('Object Repository/Bandeja de Contactos/NombreContacto'))
		WebUI.setText(findTestObject('Object Repository/Bandeja de Contactos/NombreContacto'), nombreContacto)
		
	}

	@And("digita los apellidos del contacto (.*)")
	def digita_los_apellidos_del_contacto(String apellidosContacto) {
		println "Ingresar apellidos del contacto"
		WebUI.click(findTestObject('Object Repository/Bandeja de Contactos/ApellidosContacto'))
		WebUI.setText(findTestObject('Object Repository/Bandeja de Contactos/ApellidosContacto'), apellidosContacto)
		
		
		}

	@And("selecciona el cliente que representa")
	def selecciona_el_cliente_que_representa() {
		println "Seleccionar cliente que representa"
	}

	@And("selecciona la función")
	def selecciona_la_funcion() {
		println "Selecciona la función"
	}


	@Then("el sistema guarda la información del contacto")
	def el_sistema_guarda_la_informacion_del_contacto() {
		println "Se guarda la información"
		
		WebUI.click(findTestObject('Object Repository/Bandeja de Contactos/btnGuardar'))
		
		
	}
}