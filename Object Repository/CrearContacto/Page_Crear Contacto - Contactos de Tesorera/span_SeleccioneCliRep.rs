<?xml version="1.0" encoding="UTF-8"?>
<WebElementEntity>
   <description></description>
   <name>span_SeleccioneCliRep</name>
   <tag></tag>
   <elementGuidId>b832a08d-e8e4-4a7b-aea3-6ed414f0fa25</elementGuidId>
   <selectorCollection>
      <entry>
         <key>BASIC</key>
         <value></value>
      </entry>
      <entry>
         <key>XPATH</key>
         <value>&lt;div class=&quot;row padding&quot;>
                    &lt;div class=&quot;form-group&quot;>
                        &lt;div class=&quot;col-lg-6&quot;>
                            &lt;label for=&quot;CodigoCliente&quot;>Cliente que Representa&lt;/label>
                            &lt;span title=&quot;&quot; class=&quot;k-widget k-dropdown form-control&quot; unselectable=&quot;on&quot; role=&quot;listbox&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot; tabindex=&quot;0&quot; aria-owns=&quot;ddlCliente_listbox&quot; aria-live=&quot;polite&quot; aria-disabled=&quot;false&quot; aria-busy=&quot;false&quot; aria-activedescendant=&quot;a3ceb36c-8221-4167-bb30-da9644cd5f7b&quot; style=&quot;font-size: 16px; height: 25px;&quot;>&lt;span unselectable=&quot;on&quot; class=&quot;k-dropdown-wrap k-state-default&quot;>&lt;span unselectable=&quot;on&quot; class=&quot;k-input&quot;>Chorizo con papas.&lt;/span>&lt;span unselectable=&quot;on&quot; class=&quot;k-select&quot; aria-label=&quot;select&quot;>&lt;span class=&quot;k-icon k-i-arrow-60-down&quot;>&lt;/span>&lt;/span>&lt;/span>&lt;input class=&quot;form-control k-valid&quot; data-val=&quot;true&quot; data-val-number=&quot;The field Cliente que Representa must be a number.&quot; data-val-required=&quot;Debe seleccionar el cliente que representa.&quot; id=&quot;ddlCliente&quot; name=&quot;ddlCliente&quot; style=&quot;font-size: 16px; height: 25px; display: none;&quot; type=&quot;text&quot; value=&quot;0&quot; data-role=&quot;dropdownlist&quot;>&lt;/span>&lt;script>
	kendo.syncReady(function(){jQuery(&quot;#ddlCliente&quot;).kendoDropDownList({&quot;dataSource&quot;:{&quot;transport&quot;:{&quot;read&quot;:{&quot;url&quot;:&quot;/CAF.Tesoreria.Web/Contacto/ConsultarListaClientes&quot;},&quot;prefix&quot;:&quot;&quot;},&quot;schema&quot;:{&quot;errors&quot;:&quot;Errors&quot;}},&quot;dataTextField&quot;:&quot;Descripcion&quot;,&quot;filter&quot;:&quot;contains&quot;,&quot;noDataTemplate&quot;:&quot;\u003ctext\u003e\u003cstrong\u003eNo se encontraron datos.\u003c/strong\u003e\u003c/text\u003e&quot;,&quot;dataValueField&quot;:&quot;Id&quot;,&quot;optionLabel&quot;:&quot;Seleccione...&quot;});});
&lt;/script>
                        &lt;/div>
                        &lt;div class=&quot;col-lg-6&quot;>
                            &lt;label for=&quot;CodigoContactoExistente&quot; id=&quot;CodigoContactoExistente_label&quot;>
                                Nombre Contactos Similares
                                &lt;span class=&quot;label label-required-field position-right&quot;>Campo Opcional&lt;/span>
                            &lt;/label>
                            &lt;span title=&quot;&quot; class=&quot;k-widget k-dropdown form-control&quot; unselectable=&quot;on&quot; role=&quot;listbox&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot; tabindex=&quot;0&quot; aria-owns=&quot;CodigoContactoExistente_listbox&quot; aria-labelledby=&quot;CodigoContactoExistente_label&quot; aria-live=&quot;polite&quot; aria-disabled=&quot;false&quot; aria-busy=&quot;false&quot; aria-activedescendant=&quot;a8448679-7f92-436a-a395-23abf145cbf7&quot; style=&quot;font-size: 16px; height: 25px;&quot;>&lt;span unselectable=&quot;on&quot; class=&quot;k-dropdown-wrap k-state-default&quot;>&lt;span unselectable=&quot;on&quot; class=&quot;k-input&quot;>Seleccione...&lt;/span>&lt;span unselectable=&quot;on&quot; class=&quot;k-select&quot; aria-label=&quot;select&quot;>&lt;span class=&quot;k-icon k-i-arrow-60-down&quot;>&lt;/span>&lt;/span>&lt;/span>&lt;input class=&quot;form-control&quot; data-val=&quot;true&quot; data-val-number=&quot;The field Contactos Similares must be a number.&quot; id=&quot;CodigoContactoExistente&quot; name=&quot;CodigoContactoExistente&quot; style=&quot;font-size: 16px; height: 25px; display: none;&quot; type=&quot;text&quot; data-role=&quot;dropdownlist&quot;>&lt;/span>&lt;script>
	kendo.syncReady(function(){jQuery(&quot;#CodigoContactoExistente&quot;).kendoDropDownList({&quot;dataSource&quot;:{&quot;transport&quot;:{&quot;read&quot;:{&quot;url&quot;:&quot;/CAF.Tesoreria.Web/Contacto/ConsultarSimilares&quot;,&quot;data&quot;:filterSimilares},&quot;prefix&quot;:&quot;&quot;},&quot;serverFiltering&quot;:true,&quot;filter&quot;:[],&quot;schema&quot;:{&quot;errors&quot;:&quot;Errors&quot;}},&quot;dataTextField&quot;:&quot;Descripcion&quot;,&quot;noDataTemplate&quot;:&quot;\u003ctext\u003e\u003cstrong\u003eNo se encontraron datos.\u003c/strong\u003e\u003c/text\u003e&quot;,&quot;dataValueField&quot;:&quot;Id&quot;,&quot;optionLabel&quot;:&quot;Seleccione...&quot;});});
&lt;/script>
                        &lt;/div>
                    &lt;/div></value>
      </entry>
   </selectorCollection>
   <selectorMethod>XPATH</selectorMethod>
   <useRalativeImagePath>false</useRalativeImagePath>
   <webElementProperties>
      <isSelected>false</isSelected>
      <matchCondition>equals</matchCondition>
      <name>tag</name>
      <type>Main</type>
      <value>span</value>
   </webElementProperties>
   <webElementProperties>
      <isSelected>false</isSelected>
      <matchCondition>equals</matchCondition>
      <name>unselectable</name>
      <type>Main</type>
      <value>on</value>
   </webElementProperties>
   <webElementProperties>
      <isSelected>false</isSelected>
      <matchCondition>equals</matchCondition>
      <name>class</name>
      <type>Main</type>
      <value>k-input</value>
   </webElementProperties>
   <webElementProperties>
      <isSelected>false</isSelected>
      <matchCondition>equals</matchCondition>
      <name>text</name>
      <type>Main</type>
      <value>Seleccione...</value>
   </webElementProperties>
   <webElementProperties>
      <isSelected>false</isSelected>
      <matchCondition>equals</matchCondition>
      <name>xpath</name>
      <type>Main</type>
      <value>id(&quot;frmCrearContacto&quot;)/div[@class=&quot;row&quot;]/div[@class=&quot;row padding&quot;]/div[@class=&quot;form-group&quot;]/div[@class=&quot;col-lg-6&quot;]/span[@class=&quot;k-widget k-dropdown form-control&quot;]/span[@class=&quot;k-dropdown-wrap k-state-default k-state-hover k-invalid k-state-focused&quot;]/span[@class=&quot;k-input&quot;]</value>
   </webElementProperties>
   <webElementXpaths>
      <isSelected>true</isSelected>
      <matchCondition>equals</matchCondition>
      <name>xpath:idRelative</name>
      <type>Main</type>
      <value>//form[@id='frmCrearContacto']/div[2]/div[3]/div/div/span/span/span</value>
   </webElementXpaths>
   <webElementXpaths>
      <isSelected>false</isSelected>
      <matchCondition>equals</matchCondition>
      <name>xpath:neighbor</name>
      <type>Main</type>
      <value>(.//*[normalize-space(text()) and normalize-space(.)='Cliente que Representa'])[1]/following::span[3]</value>
   </webElementXpaths>
   <webElementXpaths>
      <isSelected>false</isSelected>
      <matchCondition>equals</matchCondition>
      <name>xpath:neighbor</name>
      <type>Main</type>
      <value>(.//*[normalize-space(text()) and normalize-space(.)='Apellidos'])[1]/following::span[3]</value>
   </webElementXpaths>
   <webElementXpaths>
      <isSelected>false</isSelected>
      <matchCondition>equals</matchCondition>
      <name>xpath:neighbor</name>
      <type>Main</type>
      <value>(.//*[normalize-space(text()) and normalize-space(.)='Debe seleccionar el cliente que representa.'])[1]/preceding::span[3]</value>
   </webElementXpaths>
   <webElementXpaths>
      <isSelected>false</isSelected>
      <matchCondition>equals</matchCondition>
      <name>xpath:position</name>
      <type>Main</type>
      <value>//span/span/span</value>
   </webElementXpaths>
</WebElementEntity>
