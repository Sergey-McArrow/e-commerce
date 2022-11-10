export const EMPTY_CART_MOCK_DATA = {
	orders: [],
	isCartOpen: true,
	setCartOpen: jest.fn(),
}

export const NOT_EMPTY_CART_MOCK_DATA = {
	orders: [
		{
			id: 'Keep it seamless.',
			name: 'Side Shuffle',
			price: 500,
			image:
				'https://media.fortniteapi.io/images/3038b07d09f6292f41a0cad6a5f426af/featured.png',
			quantity: 1,
		},
	],
	isCartOpen: true,
	setCartOpen: jest.fn(),
}

export const SEVERAL_GOODS_ORDERS_CART_MOCK_DATA = {
	orders: [
		{
			description: 'BEST FRIENDS BUNDLE',
			id: 'LeatherJacket_Bundle',
			name: 'Test1',
			image:
				'https://media.fortniteapi.io/images/b92f20b88e950945a7e035f14ec0c692/transparent.png',
			price: 2200,
		},
		{
			description: 'A bit prickly, until you get to know her.',
			id: 'CID_A_360_Athena_Commando_F_LeatherJacketPurple',
			name: 'Test2',
			image:
				'"https://media.fortniteapi.io/images/bf40aad7436661c0cf9a785eacee3f4a/featured.png"',
			price: 1200,
		},
		{
			description: 'Et tu, Fruitus?',
			id: 'CID_A_045_Athena_Commando_M_BananaLeader',
			name: 'Test3',
			image:
				'"https://media.fortniteapi.io/images/displayAssets/v2/CID_A_045_M_BananaLeader.png"',
			price: 1200,
		},
		{
			description: 'Ancient and gnarled.',
			id: 'Pickaxe_ID_122_Witch',
			name: 'Test4',
			image:
				'https://media.fortniteapi.io/images/displayAssets/DA_Featured_Pickaxe_ID_122_Witch.png',
			price: 800,
		},
	],
	goods: [
		{
			description: 'BEST FRIENDS BUNDLE',
			id: 'LeatherJacket_Bundle',
			name: 'Test1',
			image:
				'https://media.fortniteapi.io/images/b92f20b88e950945a7e035f14ec0c692/transparent.png',
			price: 2200,
		},
		{
			description: 'A bit prickly, until you get to know her.',
			id: 'CID_A_360_Athena_Commando_F_LeatherJacketPurple',
			name: 'Test2',
			image:
				'"https://media.fortniteapi.io/images/bf40aad7436661c0cf9a785eacee3f4a/featured.png"',
			price: 1200,
		},
		{
			description: 'Et tu, Fruitus?',
			id: 'CID_A_045_Athena_Commando_M_BananaLeader',
			name: 'Test3',
			image:
				'"https://media.fortniteapi.io/images/displayAssets/v2/CID_A_045_M_BananaLeader.png"',
			price: 1200,
		},
		{
			description: 'Ancient and gnarled.',
			id: 'Pickaxe_ID_122_Witch',
			name: 'Test4',
			image:
				'https://media.fortniteapi.io/images/displayAssets/DA_Featured_Pickaxe_ID_122_Witch.png',
			price: 800,
		},
	],
	alertName: '',
	isCartOpen: true,
	setCartOpen: jest.fn(),
	loading: false,
}

export const GOODS_LIST = [
	{
		description: 'BEST FRIENDS BUNDLE',
		id: 'LeatherJacket_Bundle',
		name: 'Test1',
		image:
			'https://media.fortniteapi.io/images/b92f20b88e950945a7e035f14ec0c692/transparent.png',
		price: 2200,
	},
	{
		description: 'A bit prickly, until you get to know her.',
		id: 'CID_A_360_Athena_Commando_F_LeatherJacketPurple',
		name: 'Test2',
		image:
			'"https://media.fortniteapi.io/images/bf40aad7436661c0cf9a785eacee3f4a/featured.png"',
		price: 1200,
	},
	{
		description: 'Et tu, Fruitus?',
		id: 'CID_A_045_Athena_Commando_M_BananaLeader',
		name: 'Test3',
		image:
			'"https://media.fortniteapi.io/images/displayAssets/v2/CID_A_045_M_BananaLeader.png"',
		price: 1200,
	},
	{
		description: 'Ancient and gnarled.',
		id: 'Pickaxe_ID_122_Witch',
		name: 'Test4',
		image:
			'https://media.fortniteapi.io/images/displayAssets/DA_Featured_Pickaxe_ID_122_Witch.png',
		price: 800,
	},
]

export const ORDER = {
	description: 'Ancient and gnarled.',
	id: 'Pickaxe_ID_122_Witch',
	name: 'Test4',
	image:
		'https://media.fortniteapi.io/images/displayAssets/DA_Featured_Pickaxe_ID_122_Witch.png',
	price: 800,
}

export const INITIAL_STATE = {
	goods: [],
	loading: true,
	orders: [],
	alertName: '',
	isCartOpen: false,
}

export const INITIAL_STATE_TWO_ORDERS = {
	goods: [],
	loading: true,
	orders: [
		{
			description: 'Ancient and gnarled.',
			id: 1,
			name: 'Test4',
			image:
				'https://media.fortniteapi.io/images/displayAssets/DA_Featured_Pickaxe_ID_122_Witch.png',
			price: 800,
			quantity: 2,
		},
	],
	alertName: '',
	isCartOpen: false,
}
