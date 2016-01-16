function addRow() {
         
    var Functionality = document.getElementById("F");
    var RAG = document.getElementById("R");
    var Code = document.getElementById("C");
    var End = document.getElementById("P");
    var T = document.getElementById("T");
    var Total = document.getElementById("Total");
    var Summary = document.getElementById("S");
    var Owner = document.getElementById("O");
    var table = document.getElementById("myTableData");
    //Summary = Summary.replace("\r\n", "\\r\\n");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML= Functionality.innerHTML;
    row.insertCell(1).innerHTML= RAG.innerHTML;
    row.insertCell(2).innerHTML= Code.innerHTML;
    row.insertCell(3).innerHTML= End.innerHTML;
    row.insertCell(4).innerHTML= T.innerHTML;
    row.insertCell(5).innerHTML= Total.innerHTML;
    row.insertCell(6).innerHTML= Summary.innerHTML;
    row.insertCell(7).innerHTML= Owner.innerHTML;

    if(('localStorage' in window) && window['localStorage'] !== null){
    var fs = document.getElementById("myTableData");
    console.log("Page load finished");
    localStorage.setItem('state',fs.innerHTML);}
    //alert(fs.innerHTML);}
    //if('state' in localStorage){fs.innerHTML=localStorage.getItem('state')};}
}

function addRow1() {
         
    var defectid = document.getElementById("F1");
    var summary1 = document.getElementById("R1");
    var severity1 = document.getElementById("C1");
    var table = document.getElementById("myTableData1");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML= defectid.value;
    row.insertCell(1).innerHTML= summary1.value;
    row.insertCell(2).innerHTML= severity1.value;

     if(('localStorage' in window) && window['localStorage'] !== null){
    var fs1 = document.getElementById("myTableData1");
    console.log("Page load finished");
    localStorage.setItem('state1',fs1.innerHTML);}
    //alert(fs1.innerHTML);}
}
function deleteRow() {
     
   
    var j = document.getElementById("pp").value;
    if(j>0){
    var table = document.getElementById("myTableData");
    table.deleteRow(pp.value);
  }
   
   }
   function deleteRow1() {
     
   
    var j = document.getElementById("pp").value;
    if(j>0){
    var table = document.getElementById("myTableData1");
    table.deleteRow(pp.value);
  }
   
   
}

function updateRow() {

    var Functionality = document.getElementById("F");
    var RAG = document.getElementById("R");
    var Code = document.getElementById("C");
    var End = document.getElementById("P");
    var T = document.getElementById("T");
    var Total = document.getElementById("Total");
    var Summary = document.getElementById("S");
    var Owner = document.getElementById("O");
    var j = document.getElementById("Serial").value;
    var x=document.getElementById('myTableData').rows;
    var y = x[j].getElementsByTagName("td");
    Functionality.innerHTML=y[0].innerText;
    //y[0].bgColor = "Yellow"
    RAG.innerHTML=y[1].innerText;
    Code.innerHTML=y[2].innerText;
    End.innerHTML=y[3].innerText;
    T.innerHTML=y[4].innerText;
    Total.innerHTML=y[5].innerText;
    Summary.innerHTML=y[6].innerText;
    Owner.innerHTML=y[7].innerText;
    //var row = table.insertRow(j);

}

function updateRow1() {

    var defectid = document.getElementById("F1");
    var summary1 = document.getElementById("R1");
    var severity1 = document.getElementById("C1");
    var j = document.getElementById("Serial2").value;
    var x=document.getElementById('myTableData1').rows;
    var y = x[j].getElementsByTagName("td");
    defectid.value=y[0].innerText;
    summary1.value=y[1].innerText;
    severity1.value=y[2].innerText;
}

function edit() {
    
    var Functionality = document.getElementById("F");
    var RAG = document.getElementById("R");
    var Code = document.getElementById("C");
    var End = document.getElementById("P");
    var T = document.getElementById("T");
    var Total = document.getElementById("Total");
    var Summary = document.getElementById("S");
    var Owner = document.getElementById("O");
    var table = document.getElementById("myTableData");
    var a = document.getElementById("Serial").value;
    var rowCount = table.rows.length;
    var row = table.insertRow(a);
   // summary.innerHTML = this.value.replace(/\n/g, "<br />");
   // T.innerHTML = this.value.replace(/\n/g, "<br />");
   // Total.innerHTML = this.value.replace(/\n/g, "<br />");
    row.insertCell(0).innerHTML= Functionality.innerHTML;
    row.insertCell(1).innerHTML= RAG.innerHTML;
    row.insertCell(2).innerHTML= Code.innerHTML;
    row.insertCell(3).innerHTML= End.innerHTML;
    row.insertCell(4).innerHTML= T.innerHTML;
    row.insertCell(5).innerHTML= Total.innerHTML;
    row.insertCell(6).innerHTML= Summary.innerHTML;
    row.insertCell(7).innerHTML= Owner.innerHTML;
    //deleteRow(b+1);


}

function edit1() {
    var table = document.getElementById("myTableData1");
    var a = document.getElementById("Serial2").value;
    var defectid = document.getElementById("F1");
    var summary1 = document.getElementById("R1");
    var severity1 = document.getElementById("C1");
    var rowCount = table.rows.length;
    var row = table.insertRow(a);
    row.insertCell(0).innerHTML= defectid.value;
    row.insertCell(1).innerHTML= summary1.value;
    row.insertCell(2).innerHTML= severity1.value;
}

function Green(){
var j = document.getElementById("pp1").value;
    var x=document.getElementById('myTableData').rows;
    var y = x[j].getElementsByTagName("td");
    if(j>0){
    y[1].bgColor = "#49E20E";
  }
}

function commit() {

if(('localStorage' in window) && window['localStorage'] !== null){
    var fs = document.getElementById("myTableData");
    console.log("Page load finished");
    localStorage.setItem('state',fs.innerHTML);}
    
    var kk = document.getElementById("Z");
    var kk1 = document.getElementById("Y");
    var kk2 = document.getElementById("X");
    var kk3 = document.getElementById("W");
    var ct =0;
    var ct1 =0;
    var ct2 =0;
    var tab = document.getElementById('myTableData');
    var tab1 = tab.rows.length;
    var tab2 = document.getElementById('myTableData').rows;
   // alert(tab1);
   var y,i;
   for(i =1;i<tab1;i++) {
    var y = tab2[i].getElementsByTagName("td");
   //alert(y[1].value);
    if(y[1].bgColor=="#49E20E")
      ct++; 
   else if(y[1].bgColor=="#FF8000")
      ct1++; 
   else if(y[1].bgColor=="FF0000#")
      ct2++; 
    //alert(y[1].innerText);
   }         
    //alert(ct);
    kk.innerText=tab1-1; 
    kk1.innerText=ct;
    kk2.innerText=ct1;
    kk3.innerText=ct2

}

function Amber(){
var j = document.getElementById("pp1").value;
    var x=document.getElementById('myTableData').rows;
    var y = x[j].getElementsByTagName("td");
    if(j>0){
    y[1].bgColor = "#FF8000";
  }
}

function Red(){
var j = document.getElementById("pp1").value;
    var x=document.getElementById('myTableData').rows;
    var y = x[j].getElementsByTagName("td");
    if(j>0){
    y[1].bgColor = "FF0000#";
  }

}

function Blue(){
var j = document.getElementById("pp1").value;
    var x=document.getElementById('myTableData').rows;
    var y = x[j].getElementsByTagName("td");
    if(j>0){
    y[1].bgColor = "#003F87";
  }

}

function total() {

var fab = document.getElementById("table2").rows;
var f= fab[1].getElementsByTagName("td");
var f1=fab[2].getElementsByTagName("td");
var f2=fab[3].getElementsByTagName("td");
var f3=fab[4].getElementsByTagName("td");
var f4=document.getElementById("q1");
var f5=document.getElementById("q2");
var f6=document.getElementById("q3");
var f7=document.getElementById("q4");
var z=parseInt(f[1].innerText) + parseInt(f1[1].innerText)+parseInt(f2[1].innerText)+parseInt(f3[1].innerText);
var z1=parseInt(f[2].innerText) + parseInt(f1[2].innerText)+parseInt(f2[2].innerText)+parseInt(f3[2].innerText);
var z2=parseInt(f[3].innerText) + parseInt(f1[3].innerText)+parseInt(f2[3].innerText)+parseInt(f3[3].innerText);
var z3=parseInt(f[4].innerText) + parseInt(f1[4].innerText)+parseInt(f2[4].innerText)+parseInt(f3[4].innerText);
f4.innerHTML=z;
f5.innerText=z1;
f6.innerText=z2;
f7.innerText=z3;
if(('localStorage' in window) && window['localStorage'] !== null){
    var fs2 = document.getElementById("table2");
    console.log("Page load finished");
    localStorage.setItem('state2',fs2.innerHTML);}
    
//var z1=parseInt(f1[1].innerText);
//var z2=parseInt(f2[1].innerText)
//var z3= parseInt(f3[1].innerText);
//alert(z);
}


function load() {
  
   var fs = document.getElementById("myTableData");
   console.log("llff");
   if('state' in localStorage){fs.innerHTML=localStorage.getItem('state')};

}

function load1() {
  
   var fs1 = document.getElementById("myTableData1");
   console.log("llfff");
   if('state1' in localStorage){fs1.innerHTML=localStorage.getItem('state1')};

}

function load2() {
  
   var fs2 = document.getElementById("table2");
   console.log("llff");
   if('state2' in localStorage){fs2.innerHTML=localStorage.getItem('state2')};

}

function ClearStorage() {

var s = document.getElementById("pass").value;
if(s=="admin") {
localStorage.clear();
alert("Reset Successful !!! Refresh the page to start from Scratch ;)")
}
else {
    alert("Wrong Password Dear !!!");
};

}

function SelectContent (el) {


var elemToSelect = document.getElementById (el);

        if (window.getSelection) {  // all browsers, except IE before version 9
            var selection = window.getSelection ();
            var rangeToSelect = document.createRange ();
            rangeToSelect.selectNodeContents (elemToSelect);

            selection.removeAllRanges ();
            selection.addRange (rangeToSelect);



        }

    else       // Internet Explorer before version 9
          if (document.body.createTextRange) {    // Internet Explorer
                var rangeToSelect = document.body.createTextRange ();
                rangeToSelect.moveToElementText (elemToSelect);
                rangeToSelect.select ();

        }

  else if (document.createRange && window.getSelection) {         
          range = document.createRange();             
          range.selectNodeContents(el);             
    sel = window.getSelection();     
                  sel.removeAllRanges();             
    sel.addRange(range);              
 }  

}

function SelectContent1 (el) {


var elemToSelect = document.getElementById (el);

        if (window.getSelection) {  // all browsers, except IE before version 9
            var selection = window.getSelection ();
            var rangeToSelect = document.createRange ();
            rangeToSelect.selectNodeContents (elemToSelect);

            selection.removeAllRanges ();
            selection.addRange (rangeToSelect);



        }

    else       // Internet Explorer before version 9
          if (document.body.createTextRange) {    // Internet Explorer
                var rangeToSelect = document.body.createTextRange ();
                rangeToSelect.moveToElementText (elemToSelect);
                rangeToSelect.select ();

        }

  else if (document.createRange && window.getSelection) {         
          range = document.createRange();             
          range.selectNodeContents(el);             
    sel = window.getSelection();     
                  sel.removeAllRanges();             
    sel.addRange(range);              
 }  
}