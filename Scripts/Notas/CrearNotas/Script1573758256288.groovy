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

WebUI.openBrowser('http://smdessc01:4800/CAF.Tesoreria.Web/')

WebUI.click(findTestObject('Notas/Notas'))

WebUI.click(findTestObject('Notas/a_Crear Notas'))

WebUI.verifyElementPresent(findTestObject('Notas/FormCrearNotas'), 2)

WebUI.verifyElementPresent(findTestObject('Notas/span_Seleccione cliente'), 5)

WebUI.click(findTestObject('Notas/span_Seleccione cliente'))

WebUI.click(findTestObject('Notas/li_Liliana'))

WebUI.setText(findTestObject('Notas/input_Ttulo_Titulo'), 'TITULO DE LA NOTA')

WebUI.setText(findTestObject('Notas/textarea_Contenido_Contenido'), 'CONTENIDO')

not_run: WebUI.click(findTestObject('Notas/btnGuardar'))

not_run: WebUI.click(findTestObject('Notas/p_La nota fue guardada exitosamente'))

WebUI.takeScreenshot()

WebUI.closeBrowser()

