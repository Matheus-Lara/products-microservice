const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const productController = require('./controller/product.controller')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    productController.getProducts().then(data => res.json(data));
});

app.post('/', (req, res) => {
    productController.createProduct(req.body).then(data => res.json(data));
});

app.get('/:id', (req, res) => {
    productController.getProductById(req.params.id).then(data => res.json(data));
});

app.put('/:id', (req, res) => {
    productController.updateProduct(req.params.id, req.body).then(data => res.json(data));
});

app.delete('/:id', (req, res) => {
    productController.deleteProduct(req.params.id).then(data => res.json(data));
});

app.get('/test', (req, res) => {
    res.send('API Healthy!');
});

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
});

app.use(function(req, res) {
	res.status(404).json({
		type: 'NOT_FOUND',
		title: 'Not Found',
		message: 'Resource not found. Check the URL and try again.'
	});
});