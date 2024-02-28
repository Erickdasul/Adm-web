function calcularIMC() {
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);
    
    if (altura > 0 && peso > 0) {
        var imc = peso / (altura * altura);
        var mensagem = '';

        if (imc < 18.5) { 
            mensagem = 'Abaixo do peso';
        } else if (imc < 25) {
            mensagem = 'peso adequado';
        } else if (imc < 30) {
             mensagem = 'sobrepeso';
        } else {
            mensagem = 'obeso';
        }

        var resultado = document.getElementById('resultado');
        resultado.innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + '<br>' + mensagem;
        resultado.style.color = mensagem === 'Peso adequado' ? 'blue' : mensagem === 'Obeso' ? 'red' : 'blue';
		// Após o cálculo do IMC, mostramos o banner após 5 segundos
        setTimeout(function() {
            document.getElementById('banner-overlay').style.display = 'block';
        }, 600);
    } else {
        alert('Por favor, insira valores válidos para altura e peso.');
    }
}

// Adicionando um ouvinte de evento para o botão de calcular IMC
document.getElementById('calcular-button').addEventListener('click', calcularIMC);

// Adicionando um ouvinte de evento para o botão de fechar o banner
document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('banner-overlay').style.display = 'none';
});

// Função para redirecionar o usuário para outra página
function redirecionarParaPagina() {
    // Altere "pagina-de-destino.html" para a página para a qual deseja redirecionar
    window.location.href = "pagina-de-destino.html";
}


