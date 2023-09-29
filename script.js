function transformar(){
  var num;
  let codigoInternacional = document.getElementById("codigoInternacional").value;
  console.log(codigoInternacional);
  let numero = document.getElementById("numero").value;
  console.log(numero);
  num = "https://wa.me/" + codigoInternacional + numero;
  console.log(num);
  window.open(num);
}