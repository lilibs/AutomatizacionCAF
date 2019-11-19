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

WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Contactos Tesorera - Contactos de Tesorera/i_Contactos_fas fa-id-card'))

WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Bandeja de Contactos - Contactos de Tesorera/h1_Bandeja de Contactos'))

WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Bandeja de Contactos - Contactos de Tesorera/a_Aegon Targaryen'))

WebUI.setText(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Contacto - Contactos de Tesorera/textarea_Otros Alias Jon Snow Jon NieveParece que no sabe nada'), 
    'Otros Alias: Jon Snow, Jon Nieve\n\nParece que no sabe nada.observaciones')

WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Contacto - Contactos de Tesorera/input_Elementos mostrados  1 - 3 de 3_btn btn-primary orange-button no-margin-top'))

WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Detalle - Modificar Contacto - Contactos de Tesorera/p_La operacin se realiz exitosamente'))

WebUI.click(findTestObject('Object Repository/ModificarCliente/Page_Bandeja de Contactos - Contactos de Tesorera/h1_Bandeja de Contactos'))

WebUI.closeBrowser()*/

CucumberKW.runFeatureFile('Include/features/Contactos/ModificarContactos.feature')

