import { createContext, useReducer } from 'react';

import { reducer } from './reducer';

const initialState = {
	goods: [],
	loading: true,
	orders: [],
	alertName: '',
};
export const Context = createContext();

const ContextProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initialState);

	value.setGoods = data => {
		dispatch({ type: 'SET_GOODS', payload: data });
	};
	value.addToOrder = goodItem => {
		dispatch({ type: 'ADD_TO_ORDER', payload: goodItem });
	};
	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { ContextProvider };
