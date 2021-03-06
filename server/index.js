const app = require('express')();
const productRoutes = require('./Products/routes')
const checkoutRoutes = require('./Checkout/routes')

// Fetching Data for Products
const root = '/api';
app.use(root, productRoutes.router)
app.use(root, checkoutRoutes.router)

try{
    app.listen(5000, () => {
        console.log("Server running on port 5000")
    })
}
catch(err){
    console.log(err.message)
}
