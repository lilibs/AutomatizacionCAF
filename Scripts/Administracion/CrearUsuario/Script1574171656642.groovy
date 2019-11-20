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

WebUI.openBrowser('http://smdessc01:4800/CAF.Tesoreria.Web')

WebUI.click(findTestObject('Object Repository/Administracion/i_Administracin_fas fa-cog'))

WebUI.click(findTestObject('Object Repository/Administracion/a_Crear Usuarios'))

WebUI.setText(findTestObject('Object Repository/Administracion/input_LoginUsuario'), 'login')

WebUI.click(findTestObject('Administracion/btnBuscarLoginUsuario'))

WebUI.delay(5)

WebUI.waitForElementPresent(findTestObject('Object Repository/Administracion/p_El usuario no es vlido o no existe por favor verifique el usuario'), 
    5)

WebUI.click(findTestObject('Object Repository/Administracion/div_Login Usuario'))

WebUI.setText(findTestObject('Object Repository/Administracion/input_LoginUsuario'), loginUsuario)

WebUI.delay(5)

WebUI.click(findTestObject('Administracion/btnBuscarLoginUsuario'))

WebUI.click(findTestObject('Object Repository/Administracion/span_Roles Disponibles'))

WebUI.click(findTestObject('Object Repository/Administracion/btnGuardarUser'))

WebUI.waitForElementPresent(findTestObject('Object Repository/Administracion/p_El usuario ya existe en el sistema'), 5)

WebUI.click(findTestObject('Object Repository/Administracion/a_Regresar'))

WebUI.delay(5)

WebUI.click(findTestObject('Object Repository/Administracion/h1_Bandeja de Usuarios'))

WebUI.closeBrowser()






