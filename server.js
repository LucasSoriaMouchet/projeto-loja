const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Server rodando em: ${PORT}`);
});

app.get('/camisetas', (req, res) => {
    const camisetas = {
            id: 1,
            nome: 'Camiseta Preta',
            preco: 49.99
    }
    res.render("camisetas",{
        camisetas: camisetas
    })
})