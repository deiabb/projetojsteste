document.addEventListener('DOMContentLoaded', async () => {
  const listaProdutos = document.getElementById('listaProdutos');
  const adicionarProdutoBtn = document.getElementById('adicionarProdutoBtn');
  const newProductContainer = document.getElementById('newProductContainer');
  const categoriaSelect = document.getElementById('categoriaSelect');
  const filterCategoria = document.getElementById('filterCategoria');
  const newProductFields = document.getElementById('newProductFields');
  const newProductInputs = document.getElementById('newProductInputs');
  const salvarProdutoBtn = document.getElementById('salvarProdutoBtn');
  const cancelarProdutoBtn = document.getElementById('cancelarProdutoBtn');

  let produtos = [];

  // Função para carregar produtos do JSON
  async function carregarProdutos() {
      try {
          const response = await fetch('./bebidas.json');
          produtos = await response.json();
          localStorage.setItem('bebidasDisponiveis', JSON.stringify(produtos));
          renderizarProdutos();
      } catch (error) {
          console.error('Erro ao carregar os produtos:', error);
      }
  }

  function renderizarProdutos(categoriaFiltro = '') {
      listaProdutos.innerHTML = '';
      produtos.forEach((produto, index) => {
          if (categoriaFiltro === '' || produto.categoria === categoriaFiltro) {
              const produtoRow = document.createElement('tr');
              produtoRow.innerHTML = `
              <td><img src="${produto.img}" class="adm-img" alt="Imagem de ${produto.marca}"></td>
              <td>${produto.marca} ${produto.tipo || produto.sabor}</td>
              <td>${produto.categoria}</td>
              <td>R$ ${produto.preco.toFixed(2)}</td>
              <td><button class="btn btn-danger btn-sm" onclick="removerProduto(${index})">Remover</button></td>
              `;
              listaProdutos.appendChild(produtoRow);
          }
      });
  }

  window.removerProduto = (index) => {
      produtos.splice(index, 1);
      localStorage.setItem('bebidasDisponiveis', JSON.stringify(produtos));
      renderizarProdutos(filterCategoria.value);
  };

  adicionarProdutoBtn.addEventListener('click', () => {
      newProductContainer.style.display = 'block';
      limparFormulario();
  });

  categoriaSelect.addEventListener('change', () => {
      const categoria = categoriaSelect.value;
      newProductFields.innerHTML = '';
      newProductInputs.innerHTML = '';

      const camposComuns = [
          { label: 'Imagem', id: 'img' },
          { label: 'Marca', id: 'marca' },
          { label: 'Preço', id: 'preco' }
      ];

      const camposEspecificos = {
          'cerveja': [{ label: 'Tipo', id: 'tipo' }, { label: 'Peso', id: 'peso' }],
          'vinho': [{ label: 'Tipo', id: 'tipo' }, { label: 'Peso', id: 'peso' }],
          'refrigerante': [{ label: 'Sabor', id: 'sabor' }, { label: 'Peso', id: 'peso' }],
          'agua': [{ label: 'Sabor', id: 'sabor' }, { label: 'Peso', id: 'peso' }]
      };

      const campos = [...camposComuns, ...camposEspecificos[categoria]];

      campos.forEach(campo => {
          const th = document.createElement('th');
          th.textContent = campo.label;
          newProductFields.appendChild(th);

          const td = document.createElement('td');
          const input = document.createElement('input');
          input.type = (campo.id === 'preco' || campo.id === 'peso') ? 'number' : 'text';
          input.id = `new-${campo.id}`;
          input.placeholder = campo.label;
          td.appendChild(input);
          newProductInputs.appendChild(td);
      });
  });

  salvarProdutoBtn.addEventListener('click', () => {
      const categoria = categoriaSelect.value;
      if (!categoria) return;

      const novoProduto = {
          img: document.getElementById('new-img').value,
          marca: document.getElementById('new-marca').value,
          preco: parseFloat(document.getElementById('new-preco').value),
          categoria: categoria
      };

      if (categoria === 'cerveja' || categoria === 'vinho') {
          novoProduto.tipo = document.getElementById('new-tipo').value;
          novoProduto.peso = parseFloat(document.getElementById('new-peso').value);
      } else if (categoria === 'refrigerante' || categoria === 'agua') {
          novoProduto.sabor = document.getElementById('new-sabor').value;
          novoProduto.peso = parseFloat(document.getElementById('new-peso').value);
      }

      produtos.push(novoProduto);
      localStorage.setItem('bebidasDisponiveis', JSON.stringify(produtos));
      renderizarProdutos(filterCategoria.value);
      limparFormulario();
      newProductContainer.style.display = 'none';
  });

  cancelarProdutoBtn.addEventListener('click', () => {
      newProductContainer.style.display = 'none';
  });

  filterCategoria.addEventListener('change', () => {
      renderizarProdutos(filterCategoria.value);
  });

  // Função para limpar o formulário
  function limparFormulario() {
      categoriaSelect.value = '';
      newProductFields.innerHTML = '';
      newProductInputs.innerHTML = '';
  }

  await carregarProdutos();
});
