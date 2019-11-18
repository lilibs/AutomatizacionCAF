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

WebUI.navigateToUrl('http://smdessc01:4800/CAF.Tesoreria.Web/Contacto/Crear')

not_run: WebUI.switchToFrame(findTestObject('Page_Crear Contacto - Contactos de Tesorera/frame1'), 3)

WebUI.setText(findTestObject('Page_Crear Contacto - Contactos de Tesorera/input_Nombre_Nombre'), 'nombre')

WebUI.setText(findTestObject('Page_Crear Contacto - Contactos de Tesorera/input_Apellidos_Apellidos'), 'apellido')

WebUI.selectOptionByValue(findTestObject('Page_Crear Contacto - Contactos de Tesorera/span_Regresar_k-icon k-i-zoom'), 'Liliana', 
    false)

WebUI.verifyElementPresent(findTestObject('Page_Crear Contacto - Contactos de Tesorera/span_Seleccione'), 5)

WebUI.click(findTestObject('Page_Crear Contacto - Contactos de Tesorera/span_Seleccione'))

WebUI.click(findTestObject('Object Repository/CrearContacto/Page_Crear Contacto - Contactos de Tesorera/span_Liliana 1_k-icon k-i-arrow-60-down'))

WebUI.click(findTestObject('Object Repository/CrearContacto/Page_Crear Contacto - Contactos de Tesorera/li_Liliana 1_1'))

WebUI.sendKeys(findTestObject('CrearContacto/Page_Crear Contacto - Contactos de Tesorera/li_Liliana 1_1'), Keys.chord(Keys.ENTER))

not_run: WebUI.click(findTestObject('Object Repository/CrearContacto/Page_Crear Contacto - Contactos de Tesorera/li_Liliana 1_1'))

not_run: WebUI.click(findTestObject('Page_Crear Contacto - Contactos de Tesorera/span_Seleccione'))

not_run: WebUI.click(findTestObject('Page_Crear Contacto - Contactos de Tesorera/li_CIFO'))

not_run: WebUI.click(findTestObject('Object Repository/CrearContacto/Page_Crear Contacto - Contactos de Tesorera/span_CIFO_k-icon k-i-arrow-60-down'))

not_run: WebUI.click(findTestObject('Object Repository/CrearContacto/Page_Crear Contacto - Contactos de Tesorera/li_CIFO_1'))

not_run: WebUI.click(findTestObject('Page_Crear Contacto - Contactos de Tesorera/input_No hay datos_btnGuardar'))

not_run: WebUI.click(findTestObject('Page_Crear Contacto - Contactos de Tesorera/p_El usuario fue guardado exitosamente'))

