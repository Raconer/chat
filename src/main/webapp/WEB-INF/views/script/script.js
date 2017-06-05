  var win=null;
  function printIt(printThis)  {
    win = window.open();
    self.focus();
    win.document.open();
    win.document.write('<html><head>');
    win.document.write('<style>');
    win.document.write('body, td { font-family: Verdana; font-size: 10pt;}');
    win.document.write('table{'+
    						'margin:auto;'+ 
							'padding: 10px;'+ 
							'width: 100%;' +
							'text-align: center;'+ 
							'height: 100%;'  +
							'border: 1px solid #bcbcbc;'+
							'border-collapse: collapse;'+	
						'}'+
						'td{'+
							'height: 10%;'+
							'border: 1px solid #bcbcbc;'+
						'}');
    win.document.write('</style>');
    win.document.write('</style></head><body>');
    win.document.write(printThis);
    win.document.write('<'+'/'+'body'+'><'+'/'+'html'+'>');
    win.document.close();
    win.print();
    win.close();
  }