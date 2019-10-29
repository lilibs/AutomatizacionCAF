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

WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Contactos Tesorera - Contactos de Tesorera/a_Clientes'))

WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Bandeja de Clientes - Contactos de Tesorera/a_BBVA Colombia'))

WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Detalle de Cliente - Contactos de Tesorera/a_Modificar'))

WebUI.setText(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/input_Nombre Cliente_Nombre'), 
    'BBVA Colombia1')

WebUI.setText(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/input_Campo Opcional_txtCorreo'), 
    'lili@hotmail.com')

WebUI.setText(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/input_Campo Opcional_txtTag'), 
    'tag')

WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/button_Agregar'))

WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/button_Agregar'))

WebUI.setText(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/textarea_Campo Opcional_InformacionDireccion'), 
    'Direccion')

WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/input_No hay datos_btn btn-primary active orange-button no-margin-top'))

WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Cliente - Contactos de Tesorera/p_El cliente fue guardado exitosamente'))

WebUI.closeBrowser()

*/

CucumberKW.runFeatureFile('Include/features/Clientes/ModificarCliente.feature')