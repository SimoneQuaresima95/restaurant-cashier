var numA = 0;
var numB = 0;
var numC = 0;
var numD = 0;
var numE = 0;
var numF = 0;
sumtot = [];


function foodButton1() {
    numA = document.getElementById('an').value;
    if (numA > 0) {
      document.getElementById("cucina").innerHTML += 'Nigiri sake x' + numA + '<br>';
      document.getElementById('an').value = null;
    } else {
      document.getElementById("cucina").innerHTML +='';
    }
  }
  function foodButton2(){
    numB = document.getElementById('bn').value;
    if (numB > 0) {
      document.getElementById("cucina").innerHTML += 'Nigiri ebi x' + numB + '<br>';
      document.getElementById('bn').value = null;
    } else {
      document.getElementById("cucina").innerHTML +='';
    }
  }
  function foodButton3(){
    numC = document.getElementById('cn').value;
    if (numC > 0) {
      document.getElementById("cucina").innerHTML += 'Hosomaki salmone x' + numC + '<br>';
      document.getElementById('cn').value = null;
    } else {
      document.getElementById("cucina").innerHTML +='';
    }
  }
  function foodButton4(){
    numD = document.getElementById('dn').value;
    if (numD > 0) {
      document.getElementById("cucina").innerHTML += 'Hosomaki tonno x' + numD + '<br>';
      document.getElementById('dn').value = null;
    } else {
      document.getElementById("cucina").innerHTML +='';
    }
  
  }
  function foodButton5(){
    numE = document.getElementById('en').value;
    if (numE > 0) {
      document.getElementById("cucina").innerHTML += 'Temaki sake x' + numE + '<br>';
      document.getElementById('en').value = null;
    } else {
      document.getElementById("cucina").innerHTML +='';
    }
  }
  function foodButton6(){
    numF = document.getElementById('fn').value;
    if (numF > 0) {
      document.getElementById("cucina").innerHTML += 'Temaki maguro x' + numF + '<br>';
      document.getElementById('fn').value = null;
    } else {
      document.getElementById("cucina").innerHTML +='';
    }
  }

  function cancella() {
    numA = 0;
    numB = 0;
    numC = 0;
    numD = 0;
    numE = 0;
    numF = 0;
    document.getElementById("cucina").innerHTML = " ";
  }

  function cansco(){
    numA = 0;
    numB = 0;
    numC = 0;
    numD = 0;
    numE = 0;
    numF = 0;
    document.getElementById("Totale").innerHTML = " ";
    sumtot.splice(0, sumtot.length);
    //console.log(sumtot);
  }
  
  function price() {
    let price1 = 3;
    let price2 = 4;
    let price3 = 5;

  if (numA > 0) {
    sum1 = numA * price1;
    sumtot.push(sum1)
    document.getElementById("Totale").innerHTML += "Nigiri sake x" + numA + " = " + sum1 + " $ <br>";
  }

  if (numB > 0) {
    sum2 = numB * price1;
    sumtot.push(sum2)
    document.getElementById("Totale").innerHTML += "Nigiri ebi x" + numB + " = " + sum2 + " $ <br>";
  }

  if (numC > 0) {
    sum3 = numC * price2;
    sumtot.push(sum3)
    document.getElementById("Totale").innerHTML += "Hosomaki salmone x" + numC + " = " + sum3 + "$ <br>";
  }

  if (numD > 0) {
    sum4 = numD * price2;
    sumtot.push(sum4)
    document.getElementById("Totale").innerHTML += "Hosomaki tonno x" + numD + " = " + sum4 + " $<br>";
  }

  if (numE > 0) {
    sum5 = numE * price3;
    sumtot.push(sum5)
    document.getElementById("Totale").innerHTML += "Temaki sake x" + numE + " = " + sum5 + " $<br>";
  }

  if (numF > 0) {
    sum6 = numF * price3;
    sumtot.push(sum6)
    document.getElementById("Totale").innerHTML += "Temaki maguro x" + numF + " = " + sum6 + " $<br>";
  }

  var totale = 0;
  var i;
  for (i in sumtot) {
	  totale = totale +  sumtot[i];
}

if(totale > 0){
  document.getElementById("Totale").innerHTML += "TOT " + totale + " $<br>";
  sumtot.splice(0, sumtot.length);
}
//console.log(sumtot)
}