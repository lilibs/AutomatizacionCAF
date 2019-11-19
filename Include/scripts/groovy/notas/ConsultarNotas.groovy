package notas
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


class ConsultarNotas {


	@When("digita el nombre de la nota a consultar (.*) en el campo búsqueda")
	def digita_el_nombre_de_la_nota_a_consultar_en_el_campo_busqueda(String consultarNota) {
		println consultarNota
		WebUI.setText(findTestObject('Notas/TextoParaBusqueda'),
				'BMW')
	}

	@And("presiona la tecla enter en el campo de búsqueda de la nota")
	def presion_la_tecla_enter_en_el_campo_de_busqueda_de_la_nota() {

		WebUI.sendKeys(findTestObject('Notas/TextoParaBusqueda'),
				Keys.chord(Keys.ENTER))
	}

	@Then("se visualiza el registro de la nota en el resultado de la búsqueda")
	def se_visualiza_el_registro_de_la_nota_en_el_resultado_de_la_busqueda() {

		WebUI.verifyElementPresent(findTestObject('Notas/IDBBG'), 5)
		WebUI.takeScreenshot()
		WebUI.closeBrowser()
	}
}