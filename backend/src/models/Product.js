const { Schema, model } = require('mongoose');

const productSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		category: { type: String },
		price: { type: Number },
		images: [{ primary: { type: Boolean, default: false }, url: { type: String }, alt: { type: String } }],
		items: [
			{
				stock: { type: Number },
				size: { type: String },
				color: { type: String },
			},
		],
	},
	{ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

module.exports = model('Product', productSchema);
