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
				newOrder = state.orders.map((order, index) => {
					if (index === itemIndex) {
						return { ...order, quantity: order.quantity + 1 }
					} else {
						return order
					}
				})
			}
			return {
				...state,
				orders: newOrder,
				alertName: payload.name,
			}
		}

		case 'INC_QUANTITY': {
			const incQuantity = state.orders.map(order => {
				if (order.id === payload) {
					if (order.quantity === 1) {
						state.orders.filter(order => order.id !== payload)
					}
					return {
						...order,
						quantity: order.quantity++,
					}
				} else {
					return order
				}
			})
			return { ...state, orders: incQuantity }
		}

		case 'DEC_QUANTITY': {
			let decQuantity = state.orders.map(order => {
				if (order.id === payload) {
					return {
						...order,
						quantity: order.quantity--,
					}
				} else {
					return order
				}
			})
			return { ...state, orders: decQuantity }
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

		case 'SET_IMAGES':
			return {
				...state,
				images: payload || [],
				loading: false,
			}

		case 'REMOVE_IMAGE':
			return {
				...state,
				images: state.images.filter(img => img.name !== payload),
			}

		default:
			return state
	}
}

export { reducer }
