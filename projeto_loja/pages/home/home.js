var produtos = [
  {
    id: 2,
    nome: "Dark Magician",
    raridade: "Ultra Raro",
    preco: 120.0,
    descricao: "O mago mais icônico do Yu-Gi-Oh!",
    imagem: "https://images.ygoprodeck.com/images/cards/46986414.jpg",
  },
  {
    id: 3,
    nome: "Red-Eyes Black Dragon",
    raridade: "Ultra Raro",
    preco: 135.0,
    descricao: "Dragão lendário de olhos vermelhos",
    imagem: "https://images.ygoprodeck.com/images/cards/74677422.jpg",
  },
  {
    id: 4,
    nome: "Exodia the Forbidden One",
    raridade: "Secretária Rara",
    preco: 200.0,
    descricao: "A criatura proibida suprema",
    imagem: "https://images.ygoprodeck.com/images/cards/33396948.jpg",
  },
  {
    id: 5,
    nome: "Pot of Greed",
    raridade: "Raro",
    preco: 80.0,
    descricao: "Feitiço que aumenta sua mão",
    imagem: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
  },
  {
    id: 6,
    nome: "Mirror Force",
    raridade: "Raro",
    preco: 90.0,
    descricao: "Armadilha defensiva poderosa",
    imagem: "https://images.ygoprodeck.com/images/cards/44095762.jpg",
  },

  {
    id: 8,
    nome: "Celtic Guardian",
    raridade: "Raro",
    preco: 70.0,
    descricao: "Guerreiro protetor celta",
    imagem: "https://images.ygoprodeck.com/images/cards/39239728.jpg",
  },
  {
    id: 9,
    nome: "Elemental Hero Neos",
    raridade: "Ultra Raro",
    preco: 95.0,
    descricao: "O herói supremo que pode se evoluir",
    imagem: "https://images.ygoprodeck.com/images/cards/89631139.jpg",
  },
  {
    id: 10,
    nome: "Elemental Hero Stratos",
    raridade: "Ultra Raro",
    preco: 110.0,
    descricao: "Herói elemental do vento que invoca aliados",
    imagem: "https://images.ygoprodeck.com/images/cards/40044918.jpg",
  },
];

// produtos.forEach(function (item) {});

produtos.forEach((meuItem) => {
  var meuProdutoHTML = `
       <div class="produto">
        <div class="produto_imagem_container">
          <img
            src=${meuItem.imagem}
            class="produto_imagem"
          />
        </div>
        <div class="produto_informacoes_container">
          <h3>${meuItem.nome}</h3>
          <span>${meuItem.raridade}</span>
          <p>${meuItem.descricao}</p>
          <span>R$ ${meuItem.preco}</span>
          <button>Adicionar</button>
        </div>
      </div>
    `;

  document
    .getElementById("lista")
    .insertAdjacentHTML("afterbegin", meuProdutoHTML);
});
