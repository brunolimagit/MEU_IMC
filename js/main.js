const form = document.getElementById("form");
const resultado = document.getElementById("resultado");

function imc(altura, peso) {
  return peso / (altura * altura);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const altura = Number(form.altura.value.trim());
  const peso = Number(form.peso.value.trim());

  if (altura > 0 && peso > 0) {
    const valorImc = imc(altura, peso).toFixed(2);

    if (valorImc < 18.5) {
      resultado.innerHTML = `
      <div class="container-innerHTML">
      <h2 class="color-h2-valorImc">Seu IMC é:  <span class="color-valorImc"> ${valorImc}</span></h2>
      <h3 class="color-modal-h3">Abaixo do Normal</h3>
      <p class="color-modal">Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso</p>
      </div>`;
      return;
    } else if (valorImc < 24.9) {
      resultado.innerHTML = `
      <div class="container-innerHTML">
       <h2 class="color-h2-valorImc">Seu IMC é:  <span class="color-valorImc"> ${valorImc}</span></h2>
       <h3 class="color-modal-h3">Normal</h3>
       <p class="color-modal">Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.</p>
      </div>`;
      return;
    } else if (valorImc < 29.9) {
    resultado.innerHTML = `
    <div class="container-innerHTML">
       <h2 class="color-h2-valorImc">Seu IMC é:  <span class="color-valorImc"> ${valorImc}</span></h2>
       <h3 class="color-modal-h3">Sobrepeso</h3>
       <p class="color-modal">Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.</p>
       </div>`
       return;
    } else if (valorImc < 34.9) {
      resultado.innerHTML = `
      <div class="container-innerHTML">
       <h2 class="color-h2-valorImc">Seu IMC é:  <span class="color-valorImc"> ${valorImc}</span></h2>
       <h3 class="color-modal-h3">Obesidade Grau I</h3>
       <p class="color-modal">Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.</p>
       </div>`
       return;
    } else if (valorImc < 39.9) {
      resultado.innerHTML = `
      <div class="container-innerHTML">
       <h2 class="color-h2-valorImc">Seu IMC é:  <span class="color-valorImc"> ${valorImc}</span></h2>
       <h3 class="color-modal-h3">Obesidade Grau II</h3>
       <p class="color-modal">Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.</p>
       </div>`
       resultado.style.color="blue"
       return;
    } else {
      resultado.innerHTML = `
      <div class="container-innerHTML">
       <h2 class="color-h2-valorImc">Seu IMC é:  <span class="color-valorImc"> ${valorImc}</span></h2>
       <h3 class="color-modal-h3">Obesidade Grau III</h3>
       <p class="color-modal">Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.</p>
       </div>`
       
       return;
    } //fim do if secundário
  } else {
    resultado.innerHTML = `Por Favor, Insira Valores Válidos`;
    resultado.style.color = "red";
    return;
  } //fim do if principal
});


