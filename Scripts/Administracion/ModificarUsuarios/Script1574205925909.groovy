import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

/*WebUI.openBrowser('')

WebUI.navigateToUrl('http://smdessc01:4800/CAF.Tesoreria.Web/')

WebUI.click(findTestObject('Object Repository/Administracion/i_Administracin_fas fa-cog'))

WebUI.click(findTestObject('Object Repository/Administracion/button_Modificar'))

WebUI.delay(5)

WebUI.click(findTestObject('Object Repository/Administracion/span_Roles Disponibles_k-icon k-i-arrow-double-60-right'))

WebUI.click(findTestObject('Object Repository/Administracion/input_Off_btn btn-primary orange-button no-margin-top'))

WebUI.verifyElementPresent(findTestObject('Object Repository/Administracion/p_El usuario fue guardado exitosamente'), 5)

WebUI.click(findTestObject('Object Repository/Administracion/h1_Bandeja de Usuarios'))

WebUI.closeBrowser()*/

WebUI.openBrowser('')

WebUI.navigateToUrl('http://smdessc01:4800/CAF.Tesoreria.Web/')

WebUI.click(findTestObject('Object Repository/Administracion/Administracion/i_Administracin_fas fa-cog'))

WebUI.click(findTestObject('Object Repository/Administracion/Administracion/button_Modificar'))

WebUI.delay(5)

WebUI.click(findTestObject('Object Repository/Administracion/li_AdministradorFuncional'))

WebUI.click(findTestObject('Object Repository/Administracion/Page_Modificar Roles De Usuario - Contactos de Tesorera/span_Roles Disponibles_k-icon k-i-arrow-60-left'))

WebUI.click(findTestObject('Object Repository/Administracion/Page_Modificar Roles De Usuario - Contactos de Tesorera/input_Off_btn btn-primary orange-button no-margin-top'))

WebUI.click(findTestObject('Object Repository/Administracion/Page_Modificar Roles De Usuario - Contactos de Tesorera/p_El usuario fue guardado exitosamente'))

WebUI.click(findTestObject('Object Repository/Administracion/Page_Bandeja de Usuarios - Contactos de Tesorera/h1_Bandeja de Usuarios'))

WebUI.closeBrowser()

