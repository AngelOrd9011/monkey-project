const { Schema, model } = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'El nombre de usuario es requerido'],
		},
		email: {
			type: String,
			required: [true, 'El correo electrónico es requerido'],
			unique: true,
			validate: [validator.isEmail, 'La dirección de correo electrónico es invalida'],
			lowercase: true,
		},
		password: {
			type: String,
			required: [true, 'La contraseña es requerida'],
			minlength: [8, 'La contraseña debe tener al menos 8 caracteres'],
			select: false,
		},
		passwordConfirm: {
			type: String,
			required: [true, 'Por favor confirma tu contraseña'],
			validate: {
				validator: function (val) {
					return val === this.password;
				},
				message: 'La confirmación de contraseña no coincide',
			},
		},
		photo: {
			type: String,
			default: 'default.png',
		},
		role: {
			type: String,
			default: 'user',
		},
		verified: {
			type: Boolean,
			default: true,
			select: false,
		},
	},
	{ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

userSchema.index({ email: 1 });

userSchema.pre('save', async function (next) {
	// Check if the password has been modified
	if (!this.isModified('password')) return next();

	// Hash password with strength of 12
	this.password = await bcrypt.hash(this.password, 12);

	// Remove the password confirm field
	this.passwordConfirm = undefined;
	next();
});

userSchema.methods.comparePasswords = async function (candidatePassword, hashedPassword) {
	return await bcrypt.compare(candidatePassword, hashedPassword);
};

module.exports = model('User', userSchema);
