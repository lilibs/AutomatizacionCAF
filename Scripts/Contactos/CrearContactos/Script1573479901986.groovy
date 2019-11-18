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

WebUI.openBrowser('http://smdessc01:4800/CAF.Tesoreria.Web/')

WebUI.maximizeWindow()

WebUI.click(findTestObject('Object Repository/CrearCliente/Page_Contactos Tesorera - Contactos de Tesorera/a_Contactos'))

WebUI.click(findTestObject('Page_Bandeja de Contactos - Contactos de Tesorera/a_Crear Contactos'))

WebUI.click(findTestObject('CrearContacto/Page_Crear Contacto - Contactos de Tesorera/span_Seleccione'))

WebUI.delay(5)

WebUI.click(findTestObject('Object Repository/CrearCliente/Page_Crear Contacto - Contactos de Tesorera/li_Chorizo con papas'))

WebUI.delay(5)

WebUI.click(findTestObject('Bandeja de Contactos/SpanFuncion'))

WebUI.delay(5)

WebUI.click(findTestObject('CrearContacto/Page_Crear Contacto - Contactos de Tesorera/li_CIFO'))

WebUI.setText(findTestObject('Bandeja de Contactos/NombreContacto'), 'Luis')

WebUI.setText(findTestObject('Bandeja de Contactos/ApellidosContacto'), 'Trujillo')

not_run: WebUI.verifyElementPresent(findTestObject('CrearContacto/Page_Crear Contacto - Contactos de Tesorera/btnGuardar'), 
    5)

WebUI.delay(2)

WebUI.click(findTestObject('CrearContacto/Page_Crear Contacto - Contactos de Tesorera/btnGuardar'))

not_run: WebUI.verifyElementPresent(findTestObject('CrearContacto/Page_Crear Contacto - Contactos de Tesorera/p_El usuario fue guardado exitosamente'), 
    2)

WebUI.delay(5)

