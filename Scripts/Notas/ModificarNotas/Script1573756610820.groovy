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

/*WebUI.openBrowser('http://smdessc01:4800/CAF.Tesoreria.Web/')

WebUI.click(findTestObject('Notas/Notas'))

WebUI.verifyElementPresent(findTestObject('Notas/a_Modificar'), 5)

WebUI.click(findTestObject('Notas/a_Modificar'))

WebUI.setText(findTestObject('Notas/input_Ttulo_Titulo'), 'NOTA DE PRUEBA MODIFICADA')

not_run: WebUI.click(findTestObject('Notas/div_NotasCrearNotaModNota'))

not_run: WebUI.setText(findTestObject('Notas/input_Ttulo_Titulo'), 'MODIFICADO')

WebUI.click(findTestObject('Notas/input_Fecha baja_btn'))

WebUI.click(findTestObject('Notas/p_La nota fue guardada exitosamente (1)'))

WebUI.verifyElementPresent(findTestObject('Notas/Bandeja de Notas'), 2)

WebUI.closeBrowser()
*/

CucumberKW.runFeatureFile('Include/features/Notas/ModificarNotas.feature')