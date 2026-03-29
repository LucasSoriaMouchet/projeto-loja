const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Server rodando em: ${PORT}`);
});

app.get('/camisetas', (req, res) => {
    const camisetas = [
        { id: 1, marca: "BEBIDAS", preco: 49.90, imagem: "camiseta1.jpg" },
        { id: 2, marca: "FUMA", preco: 59.90, imagem: "camiseta2.jpg" },
        { id: 3, marca: "LACTOSE", preco: 69.90, imagem: "camiseta3.webp" }
    ]
    res.render("camisetas",{
        camisetas: camisetas
    })
})

app.get('/meias', (req, res) => {
    const meias = [
        { id: 4, marca: "Verde Esportiva", preco: 19.90, imagem: "meia1.webp" },
        { id: 5, marca: "Cinza", preco: 29.90, imagem: "meia2.webp" },
        { id: 6, marca: "Pantera Cor-De-Rosa", preco: 24.90, imagem: "meia3.webp" }
    ]
    res.render("meias",{
        meias: meias
    })
})

app.get('/bermudas', (req, res) => {
    const bermudas = [
        { id: 7, marca: "SAVE", preco: 89.90, imagem: "bermuda1.avif" },
        { id: 8, marca: "LS", preco: 39.90, imagem: "bermuda2.webp" },
        { id: 9, marca: "GUCCI", preco: 109.90, imagem: "bermuda3.webp" }
    ]
    res.render("bermudas",{
        bermudas: bermudas
    })
})

app.get('/camisetas/:id', (req, res) => {
    const URL_id = parseInt(req.params.id);
    
})