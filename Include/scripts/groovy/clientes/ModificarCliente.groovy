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

		//	WebUI.verifyElementPresent(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/input_NombreCliente_Nombre'), 5)
		WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_BandejaClientesContactosTesorera/a_BBVA Colombia'))
	}

	@When("da clic sobre la opción Modificar")
	def da_clic_sobre_la_opcion_Modificar () {
		println "Opción Modificar"

		WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Detalle de Cliente - Contactos de Tesorera/a_Modificar'))
	}


	@And("actualiza el nombre del cliente (.*)")
	def actualiza_el_nombre_del_cliente (String NombreCliente1) {
		println "Modifica nombre cliente"

		WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/input_NombreCliente_Nombre'))
		WebUI.setText(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/input_NombreCliente_Nombre'), NombreCliente1)
	}


	@And("digita el correo (.*)")
	def digita_el_correo (String correo) {
		println "Modifica correo"

		WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/input_Campo Opcional_txtCorreo'))
		WebUI.setText(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/input_Campo Opcional_txtCorreo'), correo)
	}


	@And("da clic en el botón Agregar correo")
	def da_clic_en_el_boton_Agregar_correo() {
		println "agregar opción"

		WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/button_Agregar'))
	}


	@And("digita un tag (.*)")
	def digita_un_tag (String tag) {
		println "Modifica tag"

		WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/input_Campo Opcional_txtTag'))
		WebUI.setText(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/input_Campo Opcional_txtTag'), tag)
	}



	@And("da clic en el botón Agregar tag")
	def da_clic_en_el_boton_Agregar_tag () {
		println "agregar opción"

		WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/button_Agregar'))
	}

	@And("digita la dirección (.*)")
	def digita_la_direccion (String direccion) {
		println "Modifica dirección"

		WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/textarea_Campo Opcional_InformacionDireccion'))
		WebUI.setText(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/textarea_Campo Opcional_InformacionDireccion'), direccion)
	}



	@And("da clic en el botón Guardar")
	def da_clic_en_el_boton_Guardar () {
		println "Guarda la modificación de los datos del cliente"

<<<<<<< HEAD
	/*@And("el sistema muestra un mensaje de éxito")
	 def el_sistema_muestra_un_mensaje_de_exito () {
	 println "Muestra mensaje de éxito"
	 }*/
=======
		WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/BotonGuardar_Registro'))
		WebUI.delay(15)
	}
>>>>>>> branch 'master' of https://github.com/lilibs/AutomatizacionCAF.git
}