const abrirModal = () => {
  const modal = document.querySelector('.modal');
  const estiloAtual = modal.style.display;
  if (estiloAtual == 'block') {
    modal.style.display = 'none'
  } else {
    modal.style.display = 'block'
  }
  return console.log('div criada')
}

const btnModal = document.querySelector('#simulador');
btnModal.addEventListener('click', abrirModal)

window.onclick = function(event) {
  const janelaModal = document.querySelector('.modal')
  if (event.target == janelaModal) {
    abrirModal()
  }
}




function calcularBebidas() {
    const numeroCriancas = parseInt(document.getElementById('numeroCriancas').value) || 0;
    const numeroAdultos = parseInt(document.getElementById('numeroAdultos').value) || 0;
    const incluirCerveja = document.getElementById('incluirCerveja').checked;
    const incluirVinho = document.getElementById('incluirVinho').checked;
  
    const litrosPorCrianca = 0.5; // Estimativa de 0.5 litro por criança
    const litrosPorAdultoRefrigeranteAgua = 1; // Estimativa de 1 litro por adulto para refrigerante/água
  
    let totalRefrigeranteAgua = (numeroCriancas * litrosPorCrianca) + (numeroAdultos * litrosPorAdultoRefrigeranteAgua);
    let totalCerveja = 0;
    let totalVinho = 0;
  
    if (incluirCerveja && incluirVinho) {
      totalCerveja = numeroAdultos * 1; // 1 litro por adulto
      totalVinho = numeroAdultos * 0.5; // 0.5 garrafa (375ml) por adulto
    } else if (incluirCerveja) {
      totalCerveja = numeroAdultos * 1.5; // 1.5 litros por adulto
    } else if (incluirVinho) {
      totalVinho = numeroAdultos * 1; // 1 garrafa (750ml) por adulto
    }
  
    const resultadoSimulacao = `
      <h3>Resultado da Simulação</h3>
      <p>Total de Refrigerantes/Água: ${totalRefrigeranteAgua} litros</p>
      ${incluirCerveja ? `<p>Total de Cerveja: ${totalCerveja.toFixed(2)} litros</p>` : ''}
      ${incluirVinho ? `<p>Total de Vinho: ${totalVinho.toFixed(2)} garrafas</p>` : ''}
    `;
  
    document.getElementById('resultadoSimulacao').innerHTML = resultadoSimulacao;
  }