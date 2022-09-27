const reducer = (state, { type, payload }) => {
	switch (type) {
		case 'SET_GOODS':
			return {
				...state,
				goods: payload || [],
				loading: false,
			};

		case 'ADD_TO_ORDER': {
			const itemIndex = state.orders.findIndex(
				orderItem => orderItem.id === payload.id,
			);
			console.log(itemIndex);
			let newOrder = null;
			if (itemIndex < 0) {
				const newItem = {
					...payload,
					quantity: 1,
				};
				console.log(newItem);

				newOrder = [...state.orders, newItem];
			} else {
				newOrder = state.orders.map((order, index) => {
					if (index === itemIndex) {
						return { ...order, quantity: order.quantity + 1 };
					} else {
						return order;
					}
				});
			}

			return {
				...state,
				order: newOrder,
				alertName: payload.name,
			};
		}
		default:
			return state;
	}
};

export { reducer };
