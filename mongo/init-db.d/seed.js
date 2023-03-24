db.createUser({
	user: 'monkeyadmin',
	pwd: 'password',
	roles: [
		{
			role: 'readWrite',
			db: 'monkey',
		},
	],
});

db.products.drop();
db.products.insertMany([
	{
		name: 'Chamarra',
		description: 'Chamarra de piel para caballero',
		category: 'MALE',
		price: 2299.5,
		items: [
			{
				stock: 3,
				size: 'L',
				color: 'Negro',
			},
			{
				stock: 4,
				size: 'M',
				color: 'Negro',
			},
			{
				stock: 1,
				size: 'L',
				color: 'Marron',
			},
		],
	},
	{
		name: 'Pantalón',
		description: 'Pantalón de mezclilla para caballero',
		category: 'FEMALE',
		price: 699.5,
		items: [
			{
				stock: 6,
				size: 'S',
				color: 'Azul',
			},
			{
				stock: 4,
				size: 'M',
				color: 'Azul',
			},
		],
	},
]);

db.users.drop();
db.users.insertMany([
	{
		name: 'Administrator',
		email: 'admin@ejemplo.com',
		password: '$2a$12$MvG9OVguxwW3h9xLU/RqtO2hhAtPvtETEOAgOk1VtHTp1XQaryOXu', // test1234
		photo: 'default.png',
		role: 'admin',
		verified: true,
	},
	{
		name: 'SingleUser',
		email: 'user@ejemplo.com',
		password: '$2a$12$MvG9OVguxwW3h9xLU/RqtO2hhAtPvtETEOAgOk1VtHTp1XQaryOXu', // test1234
		photo: 'default.png',
		role: 'user',
		verified: true,
	},
]);
