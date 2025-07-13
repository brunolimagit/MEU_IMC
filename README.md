# 🧮 Projeto: Calculadora de IMC

Este projeto consiste em uma aplicação web simples que calcula o IMC (Índice de Massa Corporal) com base nos dados de **peso** e **altura** informados pelo usuário. O sistema também classifica o resultado em diferentes categorias de saúde e oferece uma breve explicação para cada faixa de IMC.

---

## 📸 Capturas de Tela

| Interface Principal | Resultado e Validação |
|---------------------|------------------------|
| ![Interface](assets/img/Captura%20de%20Tela%20(24).png) | ![Erro de Validação](assets/img/Captura%20de%20Tela%20(25).png) |

---

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página.
- **CSS3**: Estilização moderna com `flexbox`, `border-radius`, `box-shadow`, `accent-color`, e classes temáticas para feedback visual.
- **JavaScript (Vanilla JS)**: Lógica de cálculo, manipulação do DOM e controle de fluxo para exibir resultados.

---

## ✅ Funcionalidades

- ✅ Entrada de sexo, peso e altura.
- ✅ Validação de valores numéricos.
- ✅ Cálculo automático do IMC ao clicar em "Calcular".
- ✅ Exibição de mensagens personalizadas com base na faixa do IMC.
- ✅ Feedback visual (cores e estilos) para facilitar a compreensão.
- ✅ Estilo adaptado para usabilidade e estética moderna.

---

## 🔍 Classificações do IMC Utilizadas

| IMC               | Classificação           |
|------------------|--------------------------|
| Menor que 18.5   | Abaixo do Normal         |
| 18.5 – 24.9      | Normal                   |
| 25.0 – 29.9      | Sobrepeso                |
| 30.0 – 34.9      | Obesidade Grau I         |
| 35.0 – 39.9      | Obesidade Grau II        |
| 40 ou mais       | Obesidade Grau III       |

---

## 💡 Boas Práticas Adotadas

- 🧩 **Separação de responsabilidades**: HTML para estrutura, CSS para estilo e JS para lógica.
- 💬 **Feedback visual amigável**: uso de cores e mensagens explicativas.
- 🧪 **Validação de dados**: garante que altura e peso sejam valores numéricos e positivos.
- 🔃 **Código reutilizável**: funções específicas como `imc()` e `exibirResultado()` facilitam manutenção e escalabilidade.
- 🎯 **Acessibilidade**: uso de `label for`, campos obrigatórios (`required`) e contraste de cores.

---

## 🛠️ Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/brunolimagit/imc-calculator.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd imc-calculator
   ```

3. Abra o arquivo `index.html` em seu navegador.

---

## 📁 Estrutura do Projeto

```
imc-calculator/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── README.md
└── imagens/
    └── Captura de Tela (24).png
    └── Captura de Tela (25).png
```

---

## 👨‍💻 Autor

- **Bruno Lima** – Desenvolvedor Front-End
- Tecnologias dominadas: HTML, CSS, JavaScript, React, Git, GitHub
