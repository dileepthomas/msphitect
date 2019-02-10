const express = require('express');
const CheckoutController = require('./controller');

const router = express.Router();


const handlers = {
    getCourierCharges: (req, res) => {
        const controller = new CheckoutController(req, res);
        controller.getCourierCharges();
    }
}

router.get('/couriercharges', handlers.getCourierCharges);

module.exports = {
    router,
    handlers
}