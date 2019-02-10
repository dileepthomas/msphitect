const CheckoutService = require('./service');
const CheckoutModel = require('./model');

class CheckoutController{
    constructor(req, res){
        this.service = new CheckoutService();
        this.req = req;
        this.res = res;
    }

    async getCourierCharges(){
        try {
            const response = await this.service.getCourierCharges();
            const checkoutModel = new CheckoutModel(response);
            this.res.send(checkoutModel.courierCharges);
        }
        catch(err){
            this.res.send(err.message)
        }
    }
}

module.exports = CheckoutController