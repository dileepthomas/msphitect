const express = require('express');
const ProductController = require('./controller');

const router = express.Router();

const handlers = {
    getProductList: (req, res) => {
        const controller = new ProductController(req, res);
        controller.getProductList();
    }
}

router.get('/products', handlers.getProductList);

module.exports = {
    router,
    handlers
}