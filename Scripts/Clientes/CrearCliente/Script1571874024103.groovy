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

WebUI.click(findTestObject('Object Repository/CrearCliente/Create/Page_Contactos Tesorera - Contactos de Tesorera/i_Clientes_fas fa-users'))

WebUI.click(findTestObject('Object Repository/CrearCliente/Create/Page_Bandeja de Clientes - Contactos de Tesorera/a_Crear Cliente'))

WebUI.setText(findTestObject('Object Repository/CrearCliente/Create/Page_Crear Cliente - Contactos de Tesorera/input_Nombre Cliente_Nombre'), 
    'cliente')

WebUI.setText(findTestObject('Object Repository/CrearCliente/Create/Page_Crear Cliente - Contactos de Tesorera/input_BBG Broker ID_Sigla'), 
    '5')

WebUI.click(findTestObject('Object Repository/CrearCliente/Create/Page_Crear Cliente - Contactos de Tesorera/a_Modalidades Cliente Disponibles_k-button k-button-icon'))

WebUI.click(findTestObject('Object Repository/CrearCliente/Create/Page_Crear Cliente - Contactos de Tesorera/span_Productos Disponibles_k-icon k-i-arrow-double-60-right'))

WebUI.click(findTestObject('Object Repository/CrearCliente/Create/Page_Crear Cliente - Contactos de Tesorera/input_Campo Opcional_btnGuardar'))

WebUI.delay(50)

not_run: WebUI.closeBrowser()*/

CucumberKW.runFeatureFile('Include/features/Clientes/CrearCliente.feature')
