

function load() {
	var mydata = JSON.parse(data1);
	
	
	
	 var col = [];
     for (var i = 0; i < mydata.length; i++) {
         for (var key in mydata[i]) {
             if (col.indexOf(key) === -1) {
                 col.push(key);
             }
         }
     }
     
     var table = document.createElement("table");
     	table.style.border = "1px solid #000";
     // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

     var tr = table.insertRow(-1);                   // TABLE ROW.

     for (var i = 0; i < col.length; i++) {
         var th = document.createElement("th");      // TABLE HEADER.
         th.style.border = "1px solid #000";
         th.innerHTML = col[i];
         tr.appendChild(th);
     }

     // ADD JSON DATA TO THE TABLE AS ROWS.
     for (var i = 0; i < mydata.length; i++) {

         tr = table.insertRow(-1);

         for (var j = 0; j < col.length; j++) {
             var tabCell = tr.insertCell(-1);
             tabCell.style.cssFloat = "center";
             tabCell.style.border = "1px solid #000";
             tabCell.innerHTML = mydata[i][col[j]];
         }
     }

     // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
     var divContainer = document.getElementById("showData");
     divContainer.innerHTML = "";
     divContainer.appendChild(table);
 
}