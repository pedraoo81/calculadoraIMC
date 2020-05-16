var form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    var peso = converterNumber('peso');
    var altura = converterNumber('altura');
    var imc = (peso / (altura * altura));
    var texto;

    if (imc < 0) {
      texto = "Valor inválido, recarregue a página.";
    }

    else if (imc < 18){
      texto = "Você está abaixo do peso recomendado";
    }

    else if (imc <= 25) {
      texto = "Você está no peso ideal";  
    }

    else if (imc <= 30) {
      texto = "Você acima do peso ideal (Obesidade de grau I)";
    }
    
    else {
      texto = "Você está com obesidade de grau II"
    }

    var layout = `
    <h2>Aqui está o resultado:</h2>

    <div class="result-content">
      <ul>
        <li>
          Seu Índice de Massa Corporal é <strong>${imc.toFixed(2)}</strong>. ${texto}.
        </li>
      </ul>
    </div>
    `;

    var result = document.getElementById('result');

    result.innerHTML = layout;
}

function converterNumber(id) {
    return Number(document.getElementById(id).value);
}

