const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const produtoSchema = new Schema(
	{
		codigo: Number,
		nome: String,
		desc: String,
		preco: Number,
	}
);

module.exports = mongoose.model('Product', produtoSchema);