const products = require('../products.json');

const getProducts = (req, res) => {
    if(req.query.price) {
        const filteredPrice = products.filter(element => element.price >= +req.query.price)
        if (filteredPrice < 1 ) {
          return res.status(404).send('No products found.')
        }
        return res.status(200).send(filteredPrice) 

    }
    res.status(200).send(products) 
}

module.exports = getProducts;