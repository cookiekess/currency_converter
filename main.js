function calc(){
  var a = document.querySelector("#value1").value;
  var b = document.querySelector("#mon").value;
  var yen = 38.51;
  var cad = 0.47;
  var usd = 0.37;
  var pound = 0.27;
  var euro = 0.30;
  var currency;

  if(b == "yen" ){
    conversion = a * yen;
  }
  if(b == "cad" ){
    conversion = a * cad;
  }
  if(b == "usd" ){
    conversion = a * usd;
  }
  if(b == "pound" ){
    conversion = a * pound;
  }
  if(b == "euro" ){
    conversion = a * euro;
  }
}
document.querySelector("#result").innerHTML = currency.toFixed(2);
