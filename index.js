//EXPRESS
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server rodando em: ${PORT}`);
});

//PRODUTOS
const camisetas = [
    { id: 1, marca: "BEBIDAS", preco: 49.90, imagem: "camiseta1.jpg", tamanho: ""},
    { id: 2, marca: "FUMA", preco: 59.90, imagem: "camiseta2.jpg", tamanho: ""},
    { id: 3, marca: "LACTOSE", preco: 69.90, imagem: "camiseta3.webp", tamanho: "" }
]

const meias = [
    { id: 4, marca: "Verde Esportiva", preco: 19.90, imagem: "meia1.webp", tamanho: "" },
    { id: 5, marca: "Cinza", preco: 29.90, imagem: "meia2.webp", tamanho: "" },
    { id: 6, marca: "Pantera Cor-De-Rosa", preco: 24.90, imagem: "meia3.webp", tamanho: "" }
]

const bermudas = [
    { id: 7, marca: "SAVE", preco: 89.90, imagem: "bermuda1.avif", tamanho: "" },
    { id: 8, marca: "LS", preco: 39.90, imagem: "bermuda2.webp", tamanho: "" },
    { id: 9, marca: "GUCCI", preco: 109.90, imagem: "bermuda3.webp", tamanho: "" }
]

const carrinho = [];

//ROTAS
app.get('/camisetas', (req, res) => {
    res.render("camisetas",{
        camisetas: camisetas
    })
})

app.get('/meias', (req, res) => {
    res.render("meias",{
        meias: meias
    })
})

app.get('/bermudas', (req, res) => {
    res.render("bermudas",{
        bermudas: bermudas
    })
})

app.get('/camisetas/:id', (req, res) => {
    const URL_id = parseInt(req.params.id);
    // Mostra a camiseta dependendo do ID
    if (URL_id === 1) {
        res.render("produtos", { camiseta: camisetas[0] })
    } else if (URL_id === 2) {
        res.render("produtos", { camiseta: camisetas[1] })
    } else if (URL_id === 3) {
        res.render("produtos", { camiseta: camisetas[2] })
    }
})

app.get('/meias/:id', (req, res) => {
    const URL_id = parseInt(req.params.id);
    // Mostra a meia dependendo do ID
    if (URL_id === 4) {
        res.render("produtos", { meia: meias[0] })
    } else if (URL_id === 5) {
        res.render("produtos", { meia: meias[1] })
    } else if (URL_id === 6) {
        res.render("produtos", { meia: meias[2] })
    }
})

app.get('/bermudas/:id', (req, res) => {
    const URL_id = parseInt(req.params.id);
    // Mostra a bermuda dependendo do ID
    if (URL_id === 7) {
        res.render("produtos", { bermuda: bermudas[0] })
    } else if (URL_id === 8) {
        res.render("produtos", { bermuda: bermudas[1] })
    } else if (URL_id === 9) {
        res.render("produtos", { bermuda: bermudas[2] })
    }
})

app.get('/carrinho', (req, res) => {
    res.render("carrinho", {
        carrinho: carrinho
    })
})

app.post('/carrinho', (req, res) => {
    const item = {
        id: req.body.id,
        marca: req.body.marca,
        preco: req.body.preco,
        tamanho: req.body.tamanho,
        imagem: req.body.imagem
    }
    carrinho.push(item);

    res.render("carrinho", {
        carrinho: carrinho
    })
})