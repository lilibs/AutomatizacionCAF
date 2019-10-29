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


class ModificarCliente {

	@Given("El usuario da clic sobre el nombre del cliente")
	def El_usuario_da_clic_sobre_el_nombre_del_cliente() {
		println "Seleccionar cliente"
	}

	@When("da clic sobre la opción Modificar")
	def da_clic_sobre_la_opción_Modificar () {
		println "Opción Modificar"
	}

	@And("actualiza el nombre del cliente (.*)")
	def actualiza_el_nombre_del_cliente (String nombreCliente1) {
		println "Modifica nombre cliente"
	}

	@And("digita el correo (.*)")
	def digita_el_correo (String correo) {
		println "Modifica correo"
	}

	@And("da clic en el botón Agregar correo")
	def da_clic_en_el_boton_Agregar_correo() {
		println "agregar opción"
	}

	@And("digita un tag (.*)")
	def digita_un_tag (String tag) {
		println "Modifica tag"
	}

	@And("da clic en el botón Agregar tag")
	def da_clic_en_el_boton_Agregar_tag () {
		println "agregar opción"
	}

	@And("digita la dirección (.*)")
	def digita_la_direccion (String direccion) {
		println "Modifica dirección"
	}

	@And("da clic en el botón Guardar")
	def da_clic_en_el_boton_Guardar () {
		println "Guarda la modificación de los datos del cliente"
	}

	/*@And("el sistema muestra un mensaje de éxito")
	 def el_sistema_muestra_un_mensaje_de_exito () {
	 println "Muestra mensaje de éxito"
	 }*/
}