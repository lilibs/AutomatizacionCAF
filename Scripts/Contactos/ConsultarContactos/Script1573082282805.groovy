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

WebUI.click(findTestObject('Bandeja de Contactos/Contactos'))

WebUI.setText(findTestObject('Bandeja de Contactos/txtBuscarContacto'), 'Simpson')

WebUI.sendKeys(findTestObject('Bandeja de Contactos/txtBuscarContacto'), Keys.chord(Keys.ENTER))

WebUI.verifyTextPresent('Bartolomeo J Simpson', false)

WebUI.delay(10)

WebUI.closeBrowser()*/

CucumberKW.runFeatureFile('Include/features/Contactos/ConsultarContactos.feature')