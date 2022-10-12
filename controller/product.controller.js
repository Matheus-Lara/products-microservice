const productService  = require('../service/product.service');
const logger = require('../logger/api.logger');

class TodoController {

    async getProducts() {
        logger.info('Controller: getProducts');
        return await productService.getProducts();
    }

    async createProduct(product) {
        logger.info('Controller: createProduct');
        return await productService.createProduct(product);
    }

	async getProductById(productId) {
		logger.info('Controller: getProductById');
		return await productService.getProductById(productId);
	}

    async updateProduct(id, product) {
        logger.info('Controller: updateProduct', product);
        return await productService.updateProduct(id, product);
    }

    async deleteProduct(productId) {
        logger.info('Controller: deleteProduct', productId);
        return await productService.deleteProduct(productId);
    }
}
module.exports = new TodoController();