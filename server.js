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
        { marca: "BEBIDAS", preco: 49.90, imagem: "camiseta1.jpg" },
        { marca: "FUMA", preco: 59.90, imagem: "camiseta2.jpg" },
        { marca: "LACTOSE", preco: 69.90, imagem: "camiseta3.webp" }
    ]
    res.render("camisetas",{
        camisetas: camisetas
    })
})