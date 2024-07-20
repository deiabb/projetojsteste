let bebidasDisponiveis = [];
let carrinho = [];

//  - Carregar bebidas do JSON
async function carregarBebidas() {
  try {
      const response = await fetch('./bebidas.json');
      bebidasDisponiveis = await response.json();
      localStorage.setItem('bebidasDisponiveis', JSON.stringify(bebidasDisponiveis));
      gerarCards();  // Chama a função para gerar os cards depois que os dados são carregados
  } catch (error) {
      console.error('Erro ao carregar as bebidas:', error);
  }
}

document.addEventListener('DOMContentLoaded', carregarBebidas);
