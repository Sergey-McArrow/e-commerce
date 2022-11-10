const reducer = (state, { type, payload }) => {
	switch (type) {
		case 'SET_GOODS':
			return {
				...state,
				goods: payload || [],
				loading: false,
			}

		case 'ADD_TO_ORDER': {
			const itemIndex = state.orders.findIndex(
				orderItem => orderItem.id === payload.id,
			)
			let newOrder
			if (itemIndex < 0) {
				const newItem = {
					...payload,
					quantity: 1,
				}

				newOrder = [...state.orders, newItem]
			} else {
				newOrder = state.orders.map((order, index) =>
					index === itemIndex
						? { ...order, quantity: order.quantity + 1 }
						: order,
				)
			}
			return {
				...state,
				orders: newOrder,
				alertName: payload.name,
			}
		}

		case 'INC_QUANTITY': {
			const newQuantity = state.orders.map(order =>
				order.id === payload
					? {
							...order,
							quantity: order.quantity + 1,
					  }
					: order,
			)
			return { ...state, orders: newQuantity }
		}

		case 'DEC_QUANTITY': {
			let newQuantity = state.orders.map(order =>
				order.id === payload
					? {
							...order,
							quantity: order.quantity - 1,
					  }
					: order,
			)
			return { ...state, orders: newQuantity }
		}

		case 'REMOVE_FROM_ORDER':
			return {
				...state,
				orders: state.orders.filter(order => order.id !== payload),
			}

		case 'SET_CART_OPEN':
			return {
				...state,
				isCartOpen: !state.isCartOpen,
			}

		case 'CLOSE_ALERT':
			return { ...state, alertName: '' }

		default:
			return state
	}
}

export { reducer }
