const compras = [
    {
        id: 0,
        nome: 'SCARPIN CRYSTAL SALTO FINO COURO SUEDE WILD BERRY',
        preco: 450.90 ,
        Cor: 'Roxo',
        Material: 'Couro',
        Altura: 11,
        Salto: 'Fino',
        img:'https://d2ar6xj8wdvg55.cloudfront.net/Custom/Content/Products/11/33/1133292_scarpin-crystal-salto-fino-couro-suede-wild-berry404081-303-128_z1_638053120133443481.jpg',
        informacao: ' É impossível tirar os olhos desse salto alto fino, que é sexy, confortável e pode complementar um vestido preto básico ou acompanhar conjuntos de alfaiataria dentro do mesmo estilo luxuoso. Você vai amar!',
    },
    {
        id: 1,
        nome: 'SCARPIN LACE SALTO FINO COURO OFF WHITE LAIT',
        preco: 690.90 ,
        Cor: 'Off White',
        Material: 'Couro',
        Altura: 11,
        Salto: 'Fino',
        img:'https://d2ar6xj8wdvg55.cloudfront.net/Custom/Content/Products/11/36/1136642_scarpin-lace-salto-fino-couro-off-white-lait404088-287-2_z2_638179277363004187.jpg',
        informacao:' O sapato scarpin moderno e sofisticado foi repaginado e surgiu com um laço traseiro com detalhes em studs. Em bico fino para transmitir delicadeza, o seu salto alto fino deixa o visual mais sexy.',
    },
    {
        id: 2,
        nome: 'SANDÁLIA TIRAS SALTO OVAL COURO OFF WHITE LAIT',
        preco: 350.90 ,
        Cor: 'Off White',
        Material: 'Couro',
        Altura: 8.5,
        Salto: 'Geométrico',
        img:'https://d2ar6xj8wdvg55.cloudfront.net/Custom/Content/Products/11/39/1139162_sandalia-tiras-salto-oval-couro-off-white-lait536008-287-2_z1_638126610283492165.jpg',
        informacao:' Sandália em couro com fivela ajustável, salto alto oval arredondado e design criativo com recortes no peito do pé, seguindo a tendência cut out. Aposte!',
    },
    {
        id: 3,
        nome: 'BOTA CRYSTAL PEDRAS CANO MÉDIO SALTO FINO SUEDE PRETO',
        preco: 770.90 ,
        Cor: ' Preto',
        Material: 'Couro',
        Altura: 8.7,
        Salto: 'Fino',
        img:'https://d2ar6xj8wdvg55.cloudfront.net/Custom/Content/Products/11/66/1166619_bota-crystal-pedras-cano-medio-salto-fino-suede-preto195118-1-75_z1_638349742182114666.jpg',
        informacao:' A bota mais glamourosa que você vai conhecer! Com aplicações em pedras cristais, cano médio, bico fino e salto alto fino, esse modelo fica ainda mais único e impactante.',
    },
    {
        id: 4,
        nome: 'SANDÁLIA SALTO FLARE COURO BEGE HONEY BEIGE',
        preco: 350.90 ,
        Cor: 'Bege',
        Material: 'Couro',
        Altura: 8.4,
        Salto: 'Geométrico',
        img:'https://d2ar6xj8wdvg55.cloudfront.net/Custom/Content/Products/11/67/1167431_sandalia-salto-flare-couro-bege-honey-beige252003-219-4_z1_638354857888512409.jpg',
        informacao:' Sandália feita em couro com estampa animal print, com salto de shape único. O modelo apresenta uma duas tiras sobre o peito do pé. Seu fechamento é feito por tira afivelada regulável contornando o calcanhar.',
    },
    {
        id: 5,
        nome: 'BOTA PLATAFORMA COURO BEGE BELLA',
        preco: 330.90 ,
        Cor: 'Bege',
        Material: 'Couro',
        Altura: 12.6,
        Salto: ' Bloco',
        img:'https://d2ar6xj8wdvg55.cloudfront.net/Custom/Content/Products/11/66/1166471_bota-plataforma-couro-bege-bella529003b-6-2_z8_638338484463641835.jpg',
        informacao:' Feita todo de couro, essa bota traz forte informação de tendência com a meia pata imponente, salto bloco alto e cano médio. A plataforma pede por looks poderosos!',
    },
];

compras.forEach((produto) => {
    produto.quantidade = 0;
});

function inicializarLoja() {
    var containerProdutos = document.getElementById('product-list');

    compras.map((val) => {
        containerProdutos.innerHTML += `
            <div class="produto-single">
                <img src="${val.img}" alt="${val.nome}" />
                <p>${val.nome}</p>
                <p>R$ ${val.preco.toFixed(2).replace(".", ",")}</p>
                <p>Cor: ${val.Cor}</p>
                <p>Material: ${val.Material}</p>
                <p>Altura do Salto: ${val.Altura}</p>
                <p>Salto: ${val.Salto}</p>
                <p>${val.informacao}</p>
                <a key="${val.id}" href="#" class="add-to-cart" onclick="addToCart(${val.id})">Adicionar ao carrinho</a>
            </div>
        `;
    })
}  

inicializarLoja();

function addToCart(productId) {
    const produto = compras.find((p) => p.id === productId);

    if (produto) {
        produto.quantidade++;
        atualizarCarrinho();
    }
}

function removeFromCart(productId) {
    const produto = compras.find((p) => p.id === productId);

    if (produto && produto.quantidade > 0) {
        produto.quantidade--;
        atualizarCarrinho();
    }
}

function atualizarCarrinho() {
    var containerCarrinho = document.getElementById('cart-list');
    containerCarrinho.innerHTML = "";

    compras.forEach((val) => {
        if (val.quantidade > 0) {
            containerCarrinho.innerHTML += `
                <li>
                    <img src="${val.img}" alt="${val.nome}" />
                    <p>${val.nome}</p>
                    <p>${val.quantidade}x - R$ ${val.preco.toFixed(2).replace(".", ",")}</p>
                    <button onclick="removeFromCart(${val.id})">Remover do Carrinho</button>
                </li>
            `;
        }
    });
}