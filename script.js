var numeroSecreto = parseInt(Math.random() * 11);

 function Chutar() {
   var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
    
  if(chute == numeroSecreto){
    elementoResultado.innerHTML="Acertou!";
  }
  else if ( chute > 10 || chute < 0){
    elementoResultado.innerHTML="Voce deve digitar um número entre 0 e 10";
  }
    else {
    elementoResultado.innerHTML="Errou!O numero secreto era "  +  numeroSecreto;
    }
   
}
