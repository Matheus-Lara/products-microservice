const productRepository  = require('../repository/product.repository');

class ProductService {

    constructor() {}

    async getProducts() {
        return await productRepository.getProducts();
    }

    async createProduct(product) {
		const created = await productRepository.createProduct(product);
		if (created._id) {
			return await productRepository.getProductById(created._id);
		}
		return created;
    }

	async getProductById(productId) {
		return await productRepository.getProductById(productId);
	}

    async updateProduct(id, product) {
        return await productRepository.updateProduct(id, product);
    }

    async deleteProduct(productId) {
        return await productRepository.deleteProduct(productId);
    }
}

module.exports = new ProductService();