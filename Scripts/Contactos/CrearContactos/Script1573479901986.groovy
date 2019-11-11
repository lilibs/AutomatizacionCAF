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

WebUI.openBrowser('')

WebUI.maximizeWindow()

WebUI.navigateToUrl('http://smdessc01:4800/CAF.Tesoreria.Web/Contacto/Crear')

WebUI.setText(findTestObject('Page_Crear Contacto - Contactos de Tesorera/input_Nombre_Nombre'), 'nombre')

WebUI.setText(findTestObject('Page_Crear Contacto - Contactos de Tesorera/input_Apellidos_Apellidos'), 'apellido')

WebUI.verifyElementPresent(findTestObject('CrearContacto/Page_Crear Contacto - Contactos de Tesorera/span_Seleccione'), 
    5)

WebUI.click(findTestObject('Object Repository/CrearContacto/Page_Crear Contacto - Contactos de Tesorera/span_Seleccione'))

WebUI.verifyElementPresent(findTestObject('Bandeja de Contactos/textboxClienteRepresenta'), 5)

WebUI.click(findTestObject('Bandeja de Contactos/textboxClienteRepresenta'))

WebUI.setText(findTestObject('Bandeja de Contactos/textboxClienteRepresenta'), 'liliana')

WebUI.sendKeys(findTestObject('Bandeja de Contactos/textboxClienteRepresenta'), Keys.chord(Keys.ENTER))

WebUI.closeBrowser()

