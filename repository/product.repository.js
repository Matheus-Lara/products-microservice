const { connect, disconnect } = require('../config/db.config');
const Product = require('../model/product.model');
const logger = require('../logger/api.logger');

class ProductRepository {

	constructor() {
		connect();
	}

	async getProducts() {
		const products = await Product.find({});
		return products;
	}

	async getProductById(productId) {
		const product = await Product.findById(productId);
		return product;
	}

	async createProduct(product) {
		let data = {};
		product.codigo = await this.getNextCodigo();
		try {
			data = await Product.create(product);
		} catch(err) {
			logger.error('Error::' + err);
		}
		return data;
	}

	async updateProduct(id, product) {
		delete product.codigo;
		let data = {};
		try {
			data = await Product.findByIdAndUpdate(id, product, {new: true});
		} catch(err) {
			logger.error('Error::' + err);
		}
		return data;
	}

	async deleteProduct(productId) {
		let data = {};
		try {
			data = await Product.deleteOne({_id : productId});
		} catch(err) {
			logger.error('Error::' + err);
		}
		return {status: `${data.deletedCount > 0 ? true : false}`};
	}

	async getNextCodigo() {
		const max = await Product.findOne({}).sort({codigo: -1});
		return max == null ? 1 : max.codigo + 1;
	}
}

module.exports = new ProductRepository();