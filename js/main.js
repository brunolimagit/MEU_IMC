const form = document.getElementById("form");
const resultado = document.getElementById("resultado");

function imc(altura, peso) {
  return peso / (altura + altura);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const altura = Number(form.altura.value.trim());
  const peso = Number(form.peso.value.trim());

  if (altura > 0 && peso > 0) {
    let classificacao = "";

    if (imc < 18.5) {
      return `abaixo do peso`;
    } else if (imc < 24.9) {
      return `peso normal`;
    }else if(imc < 29.9){
        return `sobrepeso`
    }else if(imc < 34.9){
        return`obesidade`
    }else if ( imc <39.9){
        return`obesidade grau 2`
    }else{
        return`obesidade grau 3(grave)`
    }
    resultado.innerText = `Seu IMC (Indice De massa Corporal) e = ${imc(
      altura,
      peso
    ).toFixed(2)}`;
  }
});

/*  resultado.innerText= `Preencha Todos Os Campos Corretamente.`
        resultado.style.color="red";
        return; */
