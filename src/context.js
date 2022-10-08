import { createContext, useReducer } from 'react'

import { reducer } from './reducer'

const initialState = {
	goods: [],
	loading: true,
	orders: [],
	alertName: '',
	isCartOpen: false,
	images: [],
	goodsItem: [],
}

export const Context = createContext()

const ContextProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initialState)

	value.setGoods = data => {
		dispatch({ type: 'SET_GOODS', payload: data })
	}
	value.addToOrder = goodItem => {
		dispatch({ type: 'ADD_TO_ORDER', payload: goodItem })
	}
	value.setCartOpen = () => {
		dispatch({ type: 'SET_CART_OPEN' })
	}
	value.incQuantity = id => {
		dispatch({ type: 'INC_QUANTITY', payload: id })
	}
	value.decQuantity = id => {
		dispatch({ type: 'DEC_QUANTITY', payload: id })
	}
	value.removeFromOrder = id => {
		dispatch({ type: 'REMOVE_FROM_ORDER', payload: id })
	}
	value.closeAlert = id => {
		dispatch({ type: 'CLOSE_ALERT', payload: id })
	}
	value.setImages = data => {
		dispatch({ type: 'SET_IMAGES', payload: data })
		console.log(data)
	}
	value.removeImages = name => {
		dispatch({ type: 'REMOVE_IMAGE', payload: name })
	}
	value.addToDB = item => {
		dispatch({ type: 'ADD_TO_DB', payload: item })
	}

	return <Context.Provider value={value}>{children}</Context.Provider>
}

export { ContextProvider }
