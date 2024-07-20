class Cerveja {
  constructor(marca, origem, tipo, preco, peso, img) {
    this.marca = marca;
    this.origem = origem;
    this.tipo = tipo;
    this.preco = preco;
    this.peso = peso;
    this.img = img;
  }
}

const brahmaTradLata = new Cerveja ("Brahma", "Brasil", "Pilsen", 3.10, 350, "./img/brahma_lata.png");
const brahmaTradLong = new Cerveja ("Brahma", "Brasil", "Pilsen", 4.79, 355, "./img/brahma_ln.png");
const coronaExtraLong = new Cerveja ("Corona", "México", "American Lager", 5.99, 330, "./img/corona_ln.png");
const antarcticaTradLata = new Cerveja ("Artarctica", "Brasil", "Pilsen", 3.10, 350, "./img/antartica_lata.png");
const antarcticaTradLong = new Cerveja ("Antarctica", "Brasil", "Pilsen", 4.79, 355, "./img/antartica_ln.png");
const spatenLong = new Cerveja ("Spaten", "Alemanha", "Munich Helles", 5.99, 355, "./img/spaten_lata.jpeg");
const spaten600 = new Cerveja ("Spaten", "Alemanha", "Munich Helles", 8.89, 600, "./img/spaten_600.jpeg");

class Vinho {
  constructor (marca, origem, tipo, preco, peso, img) {
    this.marca = marca;
    this.origem = origem;
    this.tipo = tipo;
    this.preco = preco;
    this.peso = peso;
    this.img = img;
  }
}

const chacChacTinto = new Vinho ("Chac Chac", "Argentina", "Tinto Malbec", 40.99, 750, "./img/chacchac_tinto.png");
const chacChacBranco = new Vinho ("Chac Chac", "Argentina", "Sauvignon Blanc", 40.99, 750, "./img/chacchac_souvignon.png");
const trapicheTinto = new Vinho ("Trapiche", "Argentina", "Tinto Merlot", 51.99, 750, "./img/trapiche_tinto.png");
const periquitaRose = new Vinho ("Periquita", "Portugal", "Rosé Touriga Nacional", 69.99, 750, "./img/periquita_rose.png");
const periquitaTinto = new Vinho ("Periquita", "Portugal", "Tinto Seco", 79.99, 750, "./img/periquita_seco.png");
const novecentoTinto = new Vinho ("Concha Y Toro", "Chile", "Tinto Carménère Reservado", 35.99, 750, "./img/conchaytoro_carmenere.png"); 
const santaHelenaRose = new Vinho ("Santa Helena", "Chile", "Rosé Reservado Cabernet Sauvignon", 41.19, 750, "./img/santahelena_rose.png");
const espumanteBrutSalton = new Vinho ("Salton", "Brasil", "Espumante Brut", 43.99, 750, "./img/salton_brute.png");
const espumanteMoscatelSalton = new Vinho ("Salton", "Brasil", "Espumante Moscatel", 43.99, 750, "./img/salton_moscatel.png");

class Refrigerante {
  constructor (marca, sabor, preco, peso, img) {
    this.marca = marca;
    this.sabor = sabor;
    this.preco = preco;
    this.peso = peso;
    this.img = img;
  }
}

const cocaCola = new Refrigerante ("Coca Cola", "Canela", 7.50, 2, "./img/cocacola.jpeg");
const guaranaAntarctica = new Refrigerante ("Guaraná Antarctica", "Guaraná", 8.00, 2, "./img/guarana.jpeg");
const pepsi = new Refrigerante ("Pepsi", "Canela", 7.70, 2, "./img/pepsi_lata.png");
const fantaUva = new Refrigerante ("Fanta", "Uva", 7.00, 2, "./img/fanta_uva.jpeg");
const fantaLaranja = new Refrigerante ("Fanta", "Laranja", 7.00, 2, "./img/fanta_laranja.png");
const sprite = new Refrigerante ("Sprite", "Limão", 5.00, 2, "./img/sprite_lata.png");
const kuat = new Refrigerante ("Kuat", "Guaraná", 5.50, 2, "./img/kuat_lata.png");


class Agua {
  constructor (marca, sabor, preco, peso, img) {
    this.marca = marca;
    this.sabor = sabor;
    this.preco = preco;
    this.peso = peso;
    this.img = img;
  }
}

const crystal = new Agua ("Crystal", "Mineral", 2.00, 350, "./img/crystal_mineral.png");
const ibira = new Agua ("Ibirá", "Mineral", 1.50, 500, "./img/ibira_mineral.png");
const minalba = new Agua ("Minalba", "Mineral", 1.65, 500, "./img/minalba_mineral.png");
const cristal = new Agua ("Cristal", "Água com gás", 2.50, 500, "./img/crystal_gas.png");
const bioleve = new Agua ("Bioleve", "Água com gás", 2.75, 500, "./img/bioleve_gas.png");


const bebidasDisponiveis = [
  brahmaTradLata, brahmaTradLong, coronaExtraLong, antarcticaTradLata, antarcticaTradLong, spatenLong, spaten600, chacChacBranco, chacChacTinto, trapicheTinto, periquitaRose, periquitaTinto, novecentoTinto, santaHelenaRose, espumanteBrutSalton, espumanteMoscatelSalton, cocaCola, guaranaAntarctica, pepsi, fantaUva, fantaLaranja, sprite, kuat, crystal, ibira, minalba, cristal, bioleve
 ]; 

 localStorage.setItem("bebidasDisponiveis", JSON.stringify(bebidasDisponiveis));

 


let carrinho = [];


//desenvolvido em conjunto com o Gustavo Italo
//Pega os precos dos itens na lista do carrinho e soma. Utilizada na função de adicionar e na de deletar.
function totalCarrinho(objeto) {
  const total = objeto.reduce((acumulador, valorAtual) => {
    return (acumulador += valorAtual.preco);
  }, 0);
  console.log("Valor total: R$ " + total.toFixed(2));

  const valorTotalElemento = document.getElementById('valor-total'); // atualiza o elemento html que mostra o valor total
    valorTotalElemento.textContent = "Valor Total: R$ " + total.toFixed(2);
}