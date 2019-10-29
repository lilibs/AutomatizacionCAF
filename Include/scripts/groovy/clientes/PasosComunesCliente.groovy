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

import cucumber.api.Scenario

class PasosComunesCliente {

	/*@Before
	 public static void prepararAmbiente(){
	 WebUI.waitForPageLoad(30)
	 }
	 @After
	 public static void finalizarEjecucion(Scenario escenario){
	 ActividadGlobal.tomarEvidencia(escenario)
	 ActividadGlobar.cerrarNavegador()
	 }
	 */


	@Given("El usuario ingresa a la página principal")
	def El_usuario_ingresa_a_la_pagina_principal() {
		println ("Ingreso Pagina Principal")
		WebUI.openBrowser('')
		WebUI.navigateToUrl(GlobalVariable.url)
	}

	@Then("el sistema muestra un mensaje de éxito")
	def el_sistema_muestra_un_mensaje_de_exito() {
		println ("Visualizar mensajes de éxito")
		WebUI.verifyElementPresent(findTestObject('Object Repository/CrearCliente/div_xito El cliente fue guardado exitosamente'))
		WebUI.closeBrowser()
	}
}