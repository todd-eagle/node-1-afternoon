const products = require('../products.json');

// const getProduct = (req, res) => {
//     // find returns the item if it finds it, or undefined if not
//     const item = products.find(val => val.id === parseInt(req.params.id));
//     if (!item) {
//         return res.status(500).send("Item not in list");
//     }
//     res.status(200).send(item);
// }



const getProduct = ((req, res) => {
    const product = products.find(element => element.id === +req.params.id)
    if(!product){
        res.status(404).send('Product not found.')
    }
    res.status(200).send(product)
})

module.exports = getProduct