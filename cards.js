function gerarCards(categoria = '') {
    const produtosContainer = document.querySelector('.produtos');
    produtosContainer.innerHTML = '';
  
    bebidasDisponiveis.forEach((bebida, index) => {
      if (categoria === '' || bebida.categoria === categoria) {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.width = '14rem';
  
        const img = document.createElement('img');
        img.className = 'img-card';
        img.src = bebida.img;
        img.alt = `Imagem de ${bebida.marca} ${bebida.tipo || bebida.sabor}`;
  
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
  
        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = `${bebida.marca} ${bebida.tipo || bebida.sabor} R$ ${bebida.preco}`;
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '-';
        deleteButton.className = 'card-button';
        deleteButton.onclick = () => deletarItemDoCarrinho(index);
  
        const contador = document.createElement('p');
        contador.className = 'contador';
        contador.textContent = '0';
  
        const addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.className = 'card-button';
        addButton.onclick = () => adicionarItemAoCarrinho(index);
  
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(deleteButton);
        cardBody.appendChild(contador);
        cardBody.appendChild(addButton);
  
        card.appendChild(img);
        card.appendChild(cardBody);
  
        produtosContainer.appendChild(card);
      }
    });
  }
  
  function atualizarContador(index, valor) {
    const card = document.querySelectorAll('.card')[index];
    const contador = card.querySelector('.contador');
    let contadorValor = parseInt(contador.textContent);
    contadorValor += valor;
    if (contadorValor < 0) contadorValor = 0;
    contador.textContent = contadorValor;
  }
  
  function adicionarItemAoCarrinho(index) {
    const item = bebidasDisponiveis[index];
    const itemExistente = carrinho.find(carrinhoItem => carrinhoItem.marca === item.marca && carrinhoItem.tipo === item.tipo && carrinhoItem.sabor === item.sabor);
    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      item.quantidade = 1;
      carrinho.push(item);
    }
    console.log(`Adicionado: ${item.marca} ${item.tipo || item.sabor}`);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
    atualizarContador(index, 1);
  }
  
  function deletarItemDoCarrinho(index) {
    const item = bebidasDisponiveis[index];
    const itemIndex = carrinho.findIndex(carrinhoItem => carrinhoItem.marca === item.marca && carrinhoItem.tipo === item.tipo && carrinhoItem.sabor === item.sabor);
    if (itemIndex !== -1) {
      carrinho[itemIndex].quantidade -= 1;
      if (carrinho[itemIndex].quantidade === 0) {
        carrinho.splice(itemIndex, 1);
      }
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      atualizarCarrinho();
      atualizarContador(index, -1);
    } else {
      console.log('Item não encontrado no carrinho');
    }
  }
  
  function atualizarCarrinho() {
    console.log("Itens no carrinho:");
    carrinho.forEach(item => {
      console.log(`${item.marca} ${item.tipo || item.sabor} R$ ${item.preco}`);
    });
    totalCarrinho(carrinho);
  }
  
  function totalCarrinho(objeto) {
    const total = objeto.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco * valorAtual.quantidade, 0);
    console.log("Valor total: R$ " + total.toFixed(2));
    document.getElementById('valor-total').textContent = "Valor Total: R$ " + total.toFixed(2);
  }