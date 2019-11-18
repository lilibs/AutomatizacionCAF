<?xml version="1.0" encoding="UTF-8"?>
<WebElementEntity>
   <description></description>
   <name>body_Men</name>
   <tag></tag>
   <elementGuidId>076843fb-7ed0-459f-989b-bb1b5acdadbf</elementGuidId>
   <selectorCollection>
      <entry>
         <key>XPATH</key>
         <value>//body</value>
      </entry>
   </selectorCollection>
   <selectorMethod>XPATH</selectorMethod>
   <useRalativeImagePath>false</useRalativeImagePath>
   <webElementProperties>
      <isSelected>false</isSelected>
      <matchCondition>equals</matchCondition>
      <name>tag</name>
      <type>Main</type>
      <value>body</value>
   </webElementProperties>
   <webElementProperties>
      <isSelected>true</isSelected>
      <matchCondition>equals</matchCondition>
      <name>text</name>
      <type>Main</type>
      <value>
    
        
        
            
            
                
                    Menú
                    
                    
                    
                
                
                    
                    
                        .st0 {
                            fill: #094A82;
                        }

                        .st1 {
                            fill: #48A334;
                        }
                    
                    
                    
                    
                    
                    
                    Contactos  de Tesorería
                
            
            
            
            
                
                    
                        
                              Liliana Beatriz Sepulveda Patiño
                        
                    
                
            
            
            
                
                    
                         Inicio 
                    
                    
                         Clientes
                    
                    
                         Contactos
                    
                    
                         Notas
                    
                    
                         Administración
                    
                
            
            
        
        
            
                
                
                
            
        
        
        



    
            
            
                
                    
                          Contactos
                    
                
                Crear Contacto
            
            
            
                
                    
                        Crear Contacto
                    
                
            
            
                
                    
                        
                            
                                Foto
                                Campo Opcional
                            

                            Select files...
	kendo.syncReady(function(){jQuery(&quot;#rutaImagen&quot;).kendoUpload({&quot;multiple&quot;:false,&quot;validation&quot;:{&quot;allowedExtensions&quot;:[&quot;.gif&quot;,&quot;.jpg&quot;,&quot;.png&quot;]}});});

                        
                    
                
                
                
                    
                        
                            Nombre
                            

                            
                        
                        
                            Apellidos
                            
                        
                    
                
                
                
                    
                        
                            Cliente que Representa
                            Liliana
	kendo.syncReady(function(){jQuery(&quot;#ddlCliente&quot;).kendoDropDownList({&quot;dataSource&quot;:{&quot;transport&quot;:{&quot;read&quot;:{&quot;url&quot;:&quot;/CAF.Tesoreria.Web/Contacto/ConsultarListaClientes&quot;},&quot;prefix&quot;:&quot;&quot;},&quot;schema&quot;:{&quot;errors&quot;:&quot;Errors&quot;}},&quot;dataTextField&quot;:&quot;Descripcion&quot;,&quot;filter&quot;:&quot;contains&quot;,&quot;noDataTemplate&quot;:&quot;\u003ctext\u003e\u003cstrong\u003eNo se encontraron datos.\u003c/strong\u003e\u003c/text\u003e&quot;,&quot;dataValueField&quot;:&quot;Id&quot;,&quot;optionLabel&quot;:&quot;Seleccione...&quot;});});

                        
                        
                            
                                Nombre Contactos Similares
                                Campo Opcional
                            
                            Seleccione...
	kendo.syncReady(function(){jQuery(&quot;#CodigoContactoExistente&quot;).kendoDropDownList({&quot;dataSource&quot;:{&quot;transport&quot;:{&quot;read&quot;:{&quot;url&quot;:&quot;/CAF.Tesoreria.Web/Contacto/ConsultarSimilares&quot;,&quot;data&quot;:filterSimilares},&quot;prefix&quot;:&quot;&quot;},&quot;serverFiltering&quot;:true,&quot;filter&quot;:[],&quot;schema&quot;:{&quot;errors&quot;:&quot;Errors&quot;}},&quot;dataTextField&quot;:&quot;Descripcion&quot;,&quot;noDataTemplate&quot;:&quot;\u003ctext\u003e\u003cstrong\u003eNo se encontraron datos.\u003c/strong\u003e\u003c/text\u003e&quot;,&quot;dataValueField&quot;:&quot;Id&quot;,&quot;optionLabel&quot;:&quot;Seleccione...&quot;});});

                        
                    
                
                
                
                    
                        
                            Función
                            Seleccione...
	kendo.syncReady(function(){jQuery(&quot;#ddlCargo&quot;).kendoDropDownList({&quot;dataSource&quot;:{&quot;transport&quot;:{&quot;read&quot;:{&quot;url&quot;:&quot;/CAF.Tesoreria.Web/Contacto/ConsultarListaCargos&quot;},&quot;prefix&quot;:&quot;&quot;},&quot;schema&quot;:{&quot;errors&quot;:&quot;Errors&quot;}},&quot;dataTextField&quot;:&quot;Descripcion&quot;,&quot;filter&quot;:&quot;contains&quot;,&quot;noDataTemplate&quot;:&quot;\u003ctext\u003e\u003cstrong\u003eNo se encontraron datos.\u003c/strong\u003e\u003c/text\u003e&quot;,&quot;dataValueField&quot;:&quot;Id&quot;,&quot;optionLabel&quot;:&quot;Seleccione...&quot;});});

                        
                        
                            
                                Cargo Corporativo
                                Campo Opcional
                            
                            
                        
                    
                
                
                
                    
                        
                            
                                Inmediato Superior
                                Campo Opcional
                            
                            Seleccione...
	kendo.syncReady(function(){jQuery(&quot;#CodigoSuperior&quot;).kendoDropDownList({&quot;dataSource&quot;:{&quot;transport&quot;:{&quot;read&quot;:{&quot;url&quot;:&quot;/CAF.Tesoreria.Web/Contacto/ConsultarContactosCliente&quot;,&quot;data&quot;:filterContactosCliente},&quot;prefix&quot;:&quot;&quot;},&quot;serverFiltering&quot;:true,&quot;filter&quot;:[],&quot;schema&quot;:{&quot;errors&quot;:&quot;Errors&quot;}},&quot;dataTextField&quot;:&quot;Descripcion&quot;,&quot;noDataTemplate&quot;:&quot;\u003ctext\u003e\u003cstrong\u003eNo se encontraron datos.\u003c/strong\u003e\u003c/text\u003e&quot;,&quot;autoBind&quot;:false,&quot;dataValueField&quot;:&quot;Id&quot;,&quot;optionLabel&quot;:&quot;Seleccione...&quot;,&quot;cascadeFrom&quot;:&quot;ddlCliente&quot;});});

                        
                    
                
                
                    
                        
                            
                        
                    
                
                
                
                    
                        
                            
                                Observaciones Generales
                                Campo Opcional
                            
                            
                        
                    
                
                
                
                    
                        
                            
                                Teléfonos - Contactos
                                Campo Opcional
                            
                            
                        
                    
                
                
                
                    
                        
                            
                                Correo Electrónico
                                Campo Opcional
                            
                            
                        
                        
                            
                                Tags
                                Campo Opcional
                            
                            
                        
                    
                
                
                    
                        
                            Agregar
                        
                        
                            Agregar
                        
                    
                
                
                
                    
                        
                            Correo Electrónico AsociadosAcción001051020registros por páginaNo hay datos.
	kendo.syncReady(function(){jQuery(&quot;#grvCorreos&quot;).kendoGrid({&quot;columns&quot;:[{&quot;title&quot;:&quot;Correo Electrónico Asociados&quot;,&quot;headerAttributes&quot;:{&quot;style&quot;:&quot;text-align: center; background: #048dde; color: white&quot;,&quot;data-field&quot;:&quot;CorreoAsociado&quot;,&quot;data-title&quot;:&quot;Correo Electrónico Asociados&quot;},&quot;field&quot;:&quot;CorreoAsociado&quot;,&quot;filterable&quot;:{&quot;messages&quot;:{&quot;info&quot;:&quot;Mostrar filas con valor que&quot;,&quot;title&quot;:&quot;Mostrar filas con valor que&quot;,&quot;isTrue&quot;:&quot;Si&quot;,&quot;isFalse&quot;:&quot;No&quot;,&quot;filter&quot;:&quot;Filtrar&quot;,&quot;clear&quot;:&quot;Limpiar filtro&quot;,&quot;and&quot;:&quot;Y&quot;,&quot;operator&quot;:&quot;Operador&quot;,&quot;additionalOperator&quot;:&quot;Operador adicional&quot;,&quot;value&quot;:&quot;Valor&quot;,&quot;additionalValue&quot;:&quot;Valor adicional&quot;,&quot;cancel&quot;:&quot;Cancelar&quot;,&quot;checkAll&quot;:&quot;Seleccionar todo&quot;,&quot;logic&quot;:&quot;Lógica de filtros&quot;},&quot;operators&quot;:{&quot;string&quot;:{&quot;eq&quot;:&quot;Es igual a&quot;,&quot;neq&quot;:&quot;No es igual a&quot;,&quot;startswith&quot;:&quot;Comienza con&quot;,&quot;endswith&quot;:&quot;Termina en&quot;,&quot;contains&quot;:&quot;Contiene&quot;,&quot;doesnotcontain&quot;:&quot;No contiene&quot;,&quot;isnull&quot;:&quot;Es nulo&quot;,&quot;isnotnull&quot;:&quot;No es nulo&quot;,&quot;isempty&quot;:&quot;Esta vacio&quot;,&quot;isnotempty&quot;:&quot;No está vacío&quot;,&quot;isnullorempty&quot;:&quot;Has no value&quot;,&quot;isnotnullorempty&quot;:&quot;Has value&quot;},&quot;number&quot;:{&quot;eq&quot;:&quot;Es igual a&quot;,&quot;neq&quot;:&quot;No es igual a&quot;,&quot;gte&quot;:&quot;Es mayor o igual que&quot;,&quot;gt&quot;:&quot;Es mayor que&quot;,&quot;lte&quot;:&quot;Es menor o igual que&quot;,&quot;lt&quot;:&quot;Es menor que&quot;,&quot;isnull&quot;:&quot;Es nulo&quot;,&quot;isnotnull&quot;:&quot;No es nulo&quot;},&quot;date&quot;:{&quot;eq&quot;:&quot;Es igual a&quot;,&quot;neq&quot;:&quot;No es igual a&quot;,&quot;gte&quot;:&quot;Es posterior o igual a&quot;,&quot;gt&quot;:&quot;Es posterior&quot;,&quot;lte&quot;:&quot;Es anterior o igual a&quot;,&quot;lt&quot;:&quot;Es anterior&quot;,&quot;isnull&quot;:&quot;Es nulo&quot;,&quot;isnotnull&quot;:&quot;No es nulo&quot;},&quot;enums&quot;:{&quot;eq&quot;:&quot;Es igual a&quot;,&quot;neq&quot;:&quot;No es igual a&quot;,&quot;isnull&quot;:&quot;Es nulo&quot;,&quot;isnotnull&quot;:&quot;No es nulo&quot;}}},&quot;encoded&quot;:true},{&quot;title&quot;:&quot;Acción&quot;,&quot;attributes&quot;:{&quot;style&quot;:&quot;text-align:center;&quot;},&quot;headerAttributes&quot;:{&quot;style&quot;:&quot;text-align: center; background: #048dde; color: white&quot;},&quot;template&quot;:&quot;\u003cbutton type=\u0027button\u0027 class=\u0027k-button\u0027 onclick=\u0027eliminarElementoGridCorreo(this)\u0027 \u003eEliminar\u003c/Button\u003e&quot;}],&quot;pageable&quot;:{&quot;refresh&quot;:true,&quot;pageSizes&quot;:[5,10,20],&quot;buttonCount&quot;:5,&quot;messages&quot;:{&quot;display&quot;:&quot;Elementos mostrados  {0} - {1} de {2}&quot;,&quot;empty&quot;:&quot;No hay datos.&quot;,&quot;page&quot;:&quot;Página&quot;,&quot;of&quot;:&quot;de {0}&quot;,&quot;itemsPerPage&quot;:&quot;registros por página&quot;,&quot;first&quot;:&quot;Ir a la primera página&quot;,&quot;previous&quot;:&quot;Ir a la página anterior&quot;,&quot;next&quot;:&quot;Ir a la página siguiente&quot;,&quot;last&quot;:&quot;Ir a la última página&quot;,&quot;refresh&quot;:&quot;Actualizar&quot;,&quot;morePages&quot;:&quot;Mas paginas&quot;}},&quot;sortable&quot;:true,&quot;scrollable&quot;:false,&quot;messages&quot;:{&quot;noRecords&quot;:&quot;No records available.&quot;},&quot;dataSource&quot;:{&quot;type&quot;:(function(){if(kendo.data.transports['aspnetmvc-ajax']){return 'aspnetmvc-ajax';} else{throw new Error('The kendo.aspnetmvc.min.js script is not included.');}})(),&quot;transport&quot;:{&quot;read&quot;:{&quot;url&quot;:&quot;/CAF.Tesoreria.Web/Contacto/ConsultarCorreos&quot;,&quot;data&quot;:filterDatosCorreo},&quot;prefix&quot;:&quot;&quot;},&quot;pageSize&quot;:10,&quot;page&quot;:1,&quot;total&quot;:0,&quot;error&quot;:onGridError,&quot;schema&quot;:{&quot;data&quot;:&quot;Data&quot;,&quot;total&quot;:&quot;Total&quot;,&quot;errors&quot;:&quot;Errors&quot;,&quot;model&quot;:{&quot;id&quot;:&quot;CorreoAsociado&quot;,&quot;fields&quot;:{&quot;CorreoAsociado&quot;:{&quot;type&quot;:&quot;string&quot;}}}}}});});

                        
                        
                            TagsAcción001051020registros por páginaNo hay datos.
	kendo.syncReady(function(){jQuery(&quot;#grvTags&quot;).kendoGrid({&quot;columns&quot;:[{&quot;title&quot;:&quot;Tags&quot;,&quot;headerAttributes&quot;:{&quot;style&quot;:&quot;text-align: center; background: #048dde; color: white&quot;,&quot;data-field&quot;:&quot;Tag&quot;,&quot;data-title&quot;:&quot;Tags&quot;},&quot;field&quot;:&quot;Tag&quot;,&quot;filterable&quot;:{&quot;messages&quot;:{&quot;info&quot;:&quot;Mostrar filas con valor que&quot;,&quot;title&quot;:&quot;Mostrar filas con valor que&quot;,&quot;isTrue&quot;:&quot;Si&quot;,&quot;isFalse&quot;:&quot;No&quot;,&quot;filter&quot;:&quot;Filtrar&quot;,&quot;clear&quot;:&quot;Limpiar filtro&quot;,&quot;and&quot;:&quot;Y&quot;,&quot;operator&quot;:&quot;Operador&quot;,&quot;additionalOperator&quot;:&quot;Operador adicional&quot;,&quot;value&quot;:&quot;Valor&quot;,&quot;additionalValue&quot;:&quot;Valor adicional&quot;,&quot;cancel&quot;:&quot;Cancelar&quot;,&quot;checkAll&quot;:&quot;Seleccionar todo&quot;,&quot;logic&quot;:&quot;Lógica de filtros&quot;},&quot;operators&quot;:{&quot;string&quot;:{&quot;eq&quot;:&quot;Es igual a&quot;,&quot;neq&quot;:&quot;No es igual a&quot;,&quot;startswith&quot;:&quot;Comienza con&quot;,&quot;endswith&quot;:&quot;Termina en&quot;,&quot;contains&quot;:&quot;Contiene&quot;,&quot;doesnotcontain&quot;:&quot;No contiene&quot;,&quot;isnull&quot;:&quot;Es nulo&quot;,&quot;isnotnull&quot;:&quot;No es nulo&quot;,&quot;isempty&quot;:&quot;Esta vacio&quot;,&quot;isnotempty&quot;:&quot;No está vacío&quot;,&quot;isnullorempty&quot;:&quot;Has no value&quot;,&quot;isnotnullorempty&quot;:&quot;Has value&quot;},&quot;number&quot;:{&quot;eq&quot;:&quot;Es igual a&quot;,&quot;neq&quot;:&quot;No es igual a&quot;,&quot;gte&quot;:&quot;Es mayor o igual que&quot;,&quot;gt&quot;:&quot;Es mayor que&quot;,&quot;lte&quot;:&quot;Es menor o igual que&quot;,&quot;lt&quot;:&quot;Es menor que&quot;,&quot;isnull&quot;:&quot;Es nulo&quot;,&quot;isnotnull&quot;:&quot;No es nulo&quot;},&quot;date&quot;:{&quot;eq&quot;:&quot;Es igual a&quot;,&quot;neq&quot;:&quot;No es igual a&quot;,&quot;gte&quot;:&quot;Es posterior o igual a&quot;,&quot;gt&quot;:&quot;Es posterior&quot;,&quot;lte&quot;:&quot;Es anterior o igual a&quot;,&quot;lt&quot;:&quot;Es anterior&quot;,&quot;isnull&quot;:&quot;Es nulo&quot;,&quot;isnotnull&quot;:&quot;No es nulo&quot;},&quot;enums&quot;:{&quot;eq&quot;:&quot;Es igual a&quot;,&quot;neq&quot;:&quot;No es igual a&quot;,&quot;isnull&quot;:&quot;Es nulo&quot;,&quot;isnotnull&quot;:&quot;No es nulo&quot;}}},&quot;encoded&quot;:true},{&quot;title&quot;:&quot;Acción&quot;,&quot;attributes&quot;:{&quot;style&quot;:&quot;text-align:center;&quot;},&quot;headerAttributes&quot;:{&quot;style&quot;:&quot;text-align: center; background: #048dde; color: white&quot;},&quot;template&quot;:&quot;\u003cbutton type=\u0027button\u0027 class=\u0027k-button\u0027 onclick=\u0027eliminarElementoGridTags(this)\u0027 \u003eEliminar\u003c/Button\u003e&quot;}],&quot;pageable&quot;:{&quot;refresh&quot;:true,&quot;pageSizes&quot;:[5,10,20],&quot;buttonCount&quot;:5,&quot;messages&quot;:{&quot;display&quot;:&quot;Elementos mostrados  {0} - {1} de {2}&quot;,&quot;empty&quot;:&quot;No hay datos.&quot;,&quot;page&quot;:&quot;Página&quot;,&quot;of&quot;:&quot;de {0}&quot;,&quot;itemsPerPage&quot;:&quot;registros por página&quot;,&quot;first&quot;:&quot;Ir a la primera página&quot;,&quot;previous&quot;:&quot;Ir a la página anterior&quot;,&quot;next&quot;:&quot;Ir a la página siguiente&quot;,&quot;last&quot;:&quot;Ir a la última página&quot;,&quot;refresh&quot;:&quot;Actualizar&quot;,&quot;morePages&quot;:&quot;Mas paginas&quot;}},&quot;sortable&quot;:true,&quot;scrollable&quot;:false,&quot;messages&quot;:{&quot;noRecords&quot;:&quot;No records available.&quot;},&quot;dataSource&quot;:{&quot;type&quot;:(function(){if(kendo.data.transports['aspnetmvc-ajax']){return 'aspnetmvc-ajax';} else{throw new Error('The kendo.aspnetmvc.min.js script is not included.');}})(),&quot;transport&quot;:{&quot;read&quot;:{&quot;url&quot;:&quot;/CAF.Tesoreria.Web/Contacto/ConsultarTags&quot;,&quot;data&quot;:filterDatosTag},&quot;prefix&quot;:&quot;&quot;},&quot;pageSize&quot;:10,&quot;page&quot;:1,&quot;total&quot;:0,&quot;error&quot;:onGridError,&quot;schema&quot;:{&quot;data&quot;:&quot;Data&quot;,&quot;total&quot;:&quot;Total&quot;,&quot;errors&quot;:&quot;Errors&quot;,&quot;model&quot;:{&quot;id&quot;:&quot;Tag&quot;,&quot;fields&quot;:{&quot;Tag&quot;:{&quot;type&quot;:&quot;string&quot;}}}}}});});

                        
                        
                    
                
            
            
            
                
                    

Regresar
                
            
    
    
        
	kendo.syncReady(function(){jQuery(&quot;#wndAgregarContacto&quot;).kendoWindow({&quot;close&quot;:wndAgregarSuperiorClose,&quot;modal&quot;:true,&quot;iframe&quot;:true,&quot;scrollable&quot;:true,&quot;pinned&quot;:false,&quot;title&quot;:&quot;Crear Inmediato Superior&quot;,&quot;resizable&quot;:false,&quot;actions&quot;:[&quot;Close&quot;]});});

    




    $(document).ready(function () {
        $('#Nombre').change(onNombreChange);
        $('#Apellidos').change(onNombreChange);
        $(&quot;#frmCrearContacto&quot;).kendoValidator();

        $(&quot;#frmCrearContacto&quot;).submit(function (event) {           

            var datosTag = $(&quot;#grvTags&quot;).data(&quot;kendoGrid&quot;).dataSource.data();
            var datosCorreos = $(&quot;#grvCorreos&quot;).data(&quot;kendoGrid&quot;).dataSource.data();

            var tags = $.map(datosTag, function (element) { return element.Tag });
            var correos = $.map(datosCorreos, function (element) { return element.CorreoAsociado });

            $(&quot;#TagsSeleccionados&quot;).val(JSON.stringify(tags));
            $(&quot;#CorreosSeleccionados&quot;).val(JSON.stringify(correos));
            $('#btnGuardar').prop('disabled', true);            
        });
    });

    function onNombreChange() {
        var combo = $('#CodigoContactoExistente').data('kendoDropDownList');
        combo.dataSource.read();
        combo.enable();
    }

    function filterSimilares() {
        var nombre = $('#Nombre').val();
        var apellidos = $('#Apellidos').val();
        return {
            nombre : nombre,
            apellidos : apellidos
        };
    }

    function filterContactosCliente() {
        var idcliente = $('#ddlCliente').val();

        return {
            codigoCliente: idcliente
        };
    }

    function failure(result) {
        console.log(result);
    }

    function success(result) {
        if (result) {
            mostrarMensaje(result.mensaje, result.tipo, result.redireccionarA);
        }
    }

    function agregarSuperior() {
        var wndSuperior = $(&quot;#wndAgregarContacto&quot;).data(&quot;kendoWindow&quot;);
        var idCliente = $(&quot;#ddlCliente&quot;).data(&quot;kendoDropDownList&quot;).value();
        var url = &quot;/CAF.Tesoreria.Web/Contacto/CargarVistaCrearSuperior?codigoCliente=0&quot;
        url = url.replace(&quot;0&quot;, idCliente !== &quot;&quot; ? idCliente : &quot;0&quot;);
        wndSuperior.refresh({
            url: url,
            data: { }
        });

       var opts = wndSuperior.options;
       opts.height = '90%';
       opts.width = '90%';
       wndSuperior.setOptions(opts);
       wndSuperior.center().open();
    }

    function wndAgregarSuperiorClose() {
        $(&quot;#CodigoSuperior&quot;).data(&quot;kendoDropDownList&quot;).dataSource.read();
    }

    function agregarElementoGridTag() {
        if ($(&quot;#txtTag&quot;)[0].validity.valid == false || $(&quot;#txtTag&quot;).val() == '' || $(&quot;#txtTag&quot;).val() == undefined) {
            $(&quot;#txtTag&quot;).val('');
            return;
        }

        var dataSource = $('#grvTags').data('kendoGrid').dataSource;
        dataSource.add({ Tag: $(&quot;#txtTag&quot;).val() });
        $(&quot;#txtTag&quot;).val('');
        dataSource.read();
    }

    function indice(nombreGrid, datoElemento) {

        var data = $(&quot;#&quot; + nombreGrid).data(&quot;kendoGrid&quot;).dataSource.data();
        return data.indexOf(datoElemento);
    }

    function eliminarElementoGridTags(fila) {
        var grid = $(&quot;#grvTags&quot;).data(&quot;kendoGrid&quot;);

        grid.removeRow($(fila).closest(&quot;tr&quot;));
    }

    function filterDatosTag() {
        var data = $(&quot;#grvTags&quot;).data(&quot;kendoGrid&quot;).dataSource.data();
        var dataSerialize = JSON.stringify(data);
        return {
            datos: dataSerialize
        }
    }

    function filterDatosCorreo() {
        var data = $(&quot;#grvCorreos&quot;).data(&quot;kendoGrid&quot;).dataSource.data();
        var dataSerialize = JSON.stringify(data);
        return {
            datos: dataSerialize
        }
    }

    function agregarElementoGridCorreo() {
        if ($(&quot;#txtCorreo&quot;)[0].validity.valid == false || $(&quot;#txtCorreo&quot;).val() == '' || $(&quot;#txtCorreo&quot;).val() == undefined) {
            $(&quot;#txtCorreo&quot;).val('');
            return;
        }

        var dataSource = $('#grvCorreos').data('kendoGrid').dataSource;
        dataSource.add({ CorreoAsociado: $(&quot;#txtCorreo&quot;).val() });
        $(&quot;#txtCorreo&quot;).val('');
        dataSource.read();
    }

    function eliminarElementoGridCorreo(fila) {
        var grid = $(&quot;#grvCorreos&quot;).data(&quot;kendoGrid&quot;);

        grid.removeRow($(fila).closest(&quot;tr&quot;));
    }

    function onGridError(e) {
        mostrarMensaje(&quot;No se pudo realizar la transacción.&quot;, &quot;error&quot;);
        console.error(&quot;Error consultando tags, mensaje : &quot; + e.errorThrown.stack);
    }


        
        
	kendo.syncReady(function(){jQuery(&quot;#notificaciones&quot;).kendoNotification({&quot;show&quot;:onShow,&quot;hide&quot;:onHide,&quot;stacking&quot;:&quot;up&quot;,&quot;button&quot;:true,&quot;autoHideAfter&quot;:3000,&quot;templates&quot;:[{&quot;type&quot;:&quot;info&quot;,&quot;templateId&quot;:&quot;infoNotificacionTemplate&quot;},{&quot;type&quot;:&quot;error&quot;,&quot;templateId&quot;:&quot;errorNotificacionTemplate&quot;},{&quot;type&quot;:&quot;success&quot;,&quot;templateId&quot;:&quot;successNotificacionTemplate&quot;}]});});

        
            &lt;div style=&quot;padding:20px;&quot;>
                &lt;span class=&quot;k-icon k-i-close pull-right&quot; title=&quot;Hide&quot;>&lt;/span>
                &lt;h4>&lt;i class=&quot;fas fa-info-circle&quot;>&amp;nbsp;&lt;/i>&lt;strong>Información&lt;/strong>&lt;/h4>
                &lt;p>#= texto #&lt;/p>
            &lt;/div>
        
        
            &lt;div style=&quot;padding:20px;&quot;>
                &lt;span class=&quot;k-icon k-i-close pull-right&quot; title=&quot;Hide&quot;>&lt;/span>
                &lt;h4>&lt;i class=&quot;fas fa-exclamation-circle&quot;>&amp;nbsp;&lt;/i>&lt;strong>Error&lt;/strong>&lt;/h4>
                &lt;p>#= texto #&lt;/p>
            &lt;/div>
        
        
            &lt;div style=&quot;padding:20px;&quot;>
                &lt;span class=&quot;k-icon k-i-close pull-right&quot; title=&quot;Hide&quot;>&lt;/span>
                &lt;h4>&lt;i class=&quot;fas fa-check-circle&quot;>&amp;nbsp;&lt;/i>&lt;strong>Éxito!&lt;/strong>&lt;/h4>
                &lt;p>#= texto #&lt;/p>
            &lt;/div>
                
    
    


Seleccione...LilianaLilianaliliana modificadoLiliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana Liliana LilianaNo se encontraron datos.Seleccione...Contacto 1 Apellido 1 Apellido 2nombre contacto poniente apellido contacto ponienteNo se encontraron datos.Seleccione...No se encontraron datos.Seleccione...Lars Jan von Hindenberg - Financial AdvisorAegon Targaryen - CIFOShang Tsung Lee - CIFOJon Snow - BurgmeisterMiguel Gomez - BurgmeisterAegon Targaryen - CIFOLucho Snake - CIFOPrueba contacto paginación aaaa - BurgmeisterPruebas YO - Financial AdvisorMaegor Fuegoscuro - Quality Assurance MonitorNo se encontraron datos.51020No data found.51020No data found.Crear Inmediato Superiorid(&quot;frmCrearContacto&quot;)/div[@class=&quot;row&quot;]/div[@class=&quot;row padding&quot;]</value>
   </webElementProperties>
   <webElementProperties>
      <isSelected>false</isSelected>
      <matchCondition>equals</matchCondition>
      <name>xpath</name>
      <type>Main</type>
      <value>/html[@class=&quot;js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers no-applicationcache svg inlinesvg smil svgclippaths k-webkit k-webkit78 js&quot;]/body[1]</value>
   </webElementProperties>
   <webElementXpaths>
      <isSelected>true</isSelected>
      <matchCondition>equals</matchCondition>
      <name>xpath:position</name>
      <type>Main</type>
      <value>//body</value>
   </webElementXpaths>
</WebElementEntity>
