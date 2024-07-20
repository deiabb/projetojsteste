// document.getElementById('categoria-cerveja').addEventListener('click', () => filtrarCategoria('cerveja'));
// document.getElementById('categoria-vinho').addEventListener('click', () => filtrarCategoria('vinho'));
// document.getElementById('categoria-refrigerante').addEventListener('click', () => filtrarCategoria('refrigerante'));
// document.getElementById('categoria-agua').addEventListener('click', () => filtrarCategoria('agua'));
// document.getElementById('categoria-todas').addEventListener('click', () => filtrarCategoria('Todas'));

// function filtrarCategoria(categoria) {
//     let categoriaClasse;
//     switch (categoria) {
//         case 'cerveja':
//             categoriaClasse = 'cerveja';
//             break;
//         case 'vinho':
//             categoriaClasse = 'vinho';
//             break;
//         case 'refrigerante':
//             categoriaClasse = 'refrigerante';
//             break;
//         case 'agua':
//             categoriaClasse = 'agua';
//             break;
//         case 'Todas':
//             categoriaClasse = '';
//             break;
//         default:
//             categoriaClasse = '';
//     }
//     gerarCards(categoriaClasse);
// }

// gerarCards();
document.getElementById('categoria-cerveja').addEventListener('click', () => filtrarCategoria('cerveja'));
document.getElementById('categoria-vinho').addEventListener('click', () => filtrarCategoria('vinho'));
document.getElementById('categoria-refrigerante').addEventListener('click', () => filtrarCategoria('refrigerante'));
document.getElementById('categoria-agua').addEventListener('click', () => filtrarCategoria('agua'));
document.getElementById('categoria-todas').addEventListener('click', () => filtrarCategoria(''));

function filtrarCategoria(categoria) {
    gerarCards(categoria);
}

gerarCards();