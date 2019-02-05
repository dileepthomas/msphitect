class ProductModel{
    constructor(payload){
        this.products = payload.products
        this.courierCharges = payload.courierCharges
    }
}

module.exports = ProductModel