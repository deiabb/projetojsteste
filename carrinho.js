document.addEventListener('DOMContentLoaded', () => {
  const listaCarrinho = document.getElementById('listaCarrinho');
  const totalValor = document.getElementById('totalValor');

  // Carrega os itens do carrinho do localStorage
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  function renderizarCarrinho() {
    listaCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach((item, index) => {
      const itemRow = document.createElement('tr');
      itemRow.innerHTML = `
        <td><img src="${item.img}" class="adm-img" alt="Imagem de ${item.marca}"></td>
        <td>${item.marca} ${item.tipo || item.sabor}</td>
        <td>R$ ${item.preco.toFixed(2)}</td>
        <td>
          <div class="input-group">
            <div class="input-group-prepend">
              <button class="btn btn-outline-secondary" type="button" onclick="alterarQuantidade(${index}, -1)">-</button>
            </div>
            <input type="number" class="form-control" min="1" value="${item.quantidade}" onchange="atualizarQuantidade(${index}, this.value)">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" onclick="alterarQuantidade(${index}, 1)">+</button>
            </div>
          </div>
        </td>
        <td><button class="btn btn-danger btn-sm" onclick="removerItem(${index})">Remover</button></td>
      `;
      listaCarrinho.appendChild(itemRow);
      total += item.preco * item.quantidade;
    });

    totalValor.textContent = total.toFixed(2);
  }

  window.alterarQuantidade = (index, delta) => {
    carrinho[index].quantidade += delta;
    if (carrinho[index].quantidade <= 0) {
      removerItem(index);
      return;
    }
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    renderizarCarrinho();
  };

  window.atualizarQuantidade = (index, quantidade) => {
    quantidade = parseInt(quantidade);
    if (quantidade <= 0) {
      removerItem(index);
      return;
    }
    carrinho[index].quantidade = quantidade;
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    renderizarCarrinho();
  };

  window.removerItem = (index) => {
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    renderizarCarrinho();
  };

  renderizarCarrinho();
});
