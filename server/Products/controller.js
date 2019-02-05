const ProductService = require('./service');
const ProductModel = require('./model');

class ProductController{
    constructor(req, res){
        this.service = new ProductService();
        this.req = req;
        this.res = res;
    }

    async getProductList(){
        try {
            const response = await this.service.getProductList();
            const productModel = new ProductModel(response);
            this.res.send(productModel.products);
        }
        catch(err){
            this.res.send(err.message)
        }
    }
}

module.exports = ProductController