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
		name: 'Chamarra de piel',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'MALE',
		price: 2299.5,
		images: [],
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
		createdAt: new Date(),
	},
	{
		name: 'Chamarra de piel',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'FEMALE',
		price: 2499.5,
		images: [],
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
		],
		createdAt: new Date(),
	},
	{
		name: 'Pantalón de mezclilla',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'FEMALE',
		price: 599.5,
		images: [],
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
		createdAt: new Date(),
	},
	{
		name: 'Pantalón de mezclilla',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'MALE',
		price: 599.5,
		images: [],
		items: [
			{
				stock: 6,
				size: 'S',
				color: 'Azul',
			},
			{
				stock: 4,
				size: 'M',
				color: 'Negro',
			},
		],
		createdAt: new Date(),
	},
	{
		name: 'Playera manga corta',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'MALE',
		price: 117,
		images: [],
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
			{
				stock: 2,
				size: 'S',
				color: 'Rojo',
			},
			{
				stock: 7,
				size: 'M',
				color: 'Negro',
			},
		],
		createdAt: new Date(),
	},
	{
		name: 'Blusa tirantes',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'FEMALE',
		price: 100,
		images: [],
		items: [
			{
				stock: 6,
				size: 'S',
				color: 'Azul',
			},
			{
				stock: 4,
				size: 'M',
				color: 'Blanco',
			},
			{
				stock: 2,
				size: 'S',
				color: 'Rojo',
			},
			{
				stock: 7,
				size: 'M',
				color: 'Negro',
			},
		],
		createdAt: new Date(),
	},
	{
		name: 'Playera manga larga',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'MALE',
		price: 135,
		images: [],
		items: [
			{
				stock: 15,
				size: 'M',
				color: 'Negro',
			},
		],
		createdAt: new Date(),
	},
	{
		name: 'Blusa de vestir',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'FEMALE',
		price: 300,
		images: [],
		items: [
			{
				stock: 10,
				size: 'M',
				color: 'Blanco',
			},
			{
				stock: 7,
				size: 'M',
				color: 'Negro',
			},
		],
		createdAt: new Date(),
	},
	{
		name: 'Camisa de vestir',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'MALE',
		price: 350,
		images: [],
		items: [
			{
				stock: 8,
				size: 'L',
				color: 'Blanco',
			},
			{
				stock: 7,
				size: 'M',
				color: 'Negro',
			},
		],
		createdAt: new Date(),
	},
	{
		name: 'Abrigo largo',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'FEMALE',
		price: 1200,
		images: [],
		items: [
			{
				stock: 2,
				size: 'S',
				color: 'Beige',
			},
			{
				stock: 1,
				size: 'M',
				color: 'Negro',
			},
		],
		createdAt: new Date(),
	},
	{
		name: 'Abrigo',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'MALE',
		price: 0,
		images: [],
		items: [],
		createdAt: new Date(),
	},
	{
		name: 'Blazer',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'FEMALE',
		price: 0,
		images: [],
		items: [],
		createdAt: new Date(),
	},
	{
		name: 'Chamarra de mezclilla',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'FEMALE',
		price: 0,
		images: [],
		items: [],
		createdAt: new Date(),
	},
	{
		name: 'Saco',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'FEMALE',
		price: 0,
		images: [],
		items: [],
		createdAt: new Date(),
	},
	{
		name: 'Saco',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'MALE',
		price: 0,
		images: [],
		items: [],
		createdAt: new Date(),
	},
	{
		name: 'Gabardina',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'MALE',
		price: 0,
		images: [],
		items: [],
		createdAt: new Date(),
	},
	{
		name: 'Falda',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'FEMALE',
		price: 0,
		images: [],
		items: [],
		createdAt: new Date(),
	},
	{
		name: 'Sudadera',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'FEMALE',
		price: 0,
		images: [],
		items: [],
		createdAt: new Date(),
	},
	{
		name: 'Blusa manga corta',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'FEMALE',
		price: 0,
		images: [],
		items: [],
		createdAt: new Date(),
	},
]);

db.users.drop();
db.users.insertMany([
	{
		name: 'Administrator',
		email: 'admin@example.com',
		password: '$2a$12$MvG9OVguxwW3h9xLU/RqtO2hhAtPvtETEOAgOk1VtHTp1XQaryOXu', // test1234
		photo: 'http://localhost:9000/monkey/users/default.png',
		role: 'admin',
		verified: true,
		createdAt: new Date(),
	},
	{
		name: 'SingleUser',
		email: 'user@example.com',
		password: '$2a$12$MvG9OVguxwW3h9xLU/RqtO2hhAtPvtETEOAgOk1VtHTp1XQaryOXu', // test1234
		photo: 'http://localhost:9000/monkey/users/default.png',
		role: 'user',
		verified: true,
		createdAt: new Date(),
	},
]);
