const products = require('../products.json');

const getProducts = (req, res) => {
    const p = req.query.price
    if(p){
        const filteredPrice = products.filter((element) => 
        element.price.includes(price)
        )
        res.status(200).send(filteredPrice)
    }
    res.status(200).send(products);
}

module.exports = getProducts;