import {
	GOODS_LIST,
	INITIAL_STATE,
	INITIAL_STATE_TWO_ORDERS,
	ORDER,
} from './mock'
import { reducer } from './reducer'

describe('Reducer tests', () => {
	beforeEach(() => {})

	it('should set goods', () => {
		const actionSetGoods = {
			type: 'SET_GOODS',
			payload: GOODS_LIST,
		}
		const state = reducer(INITIAL_STATE, actionSetGoods)
		expect(state.goods.length).toEqual(4)
	})

	describe('Orders', () => {
		it('should add order & alert', () => {
			const actionAddOrder = {
				type: 'ADD_TO_ORDER',
				payload: ORDER,
			}
			const state = reducer(INITIAL_STATE, actionAddOrder)
			expect(state.orders.length).toEqual(1)
			expect(state.alertName).toBe(ORDER.name)
			const twoOrdersState = reducer(state, actionAddOrder)
			expect(twoOrdersState.orders[0].quantity).toEqual(2)
		})

		it('should inctement quantity', () => {
			const actionIncQuantity = {
				type: 'INC_QUANTITY',
				payload: 1,
			}
			const state = reducer(INITIAL_STATE_TWO_ORDERS, actionIncQuantity)
			expect(state.orders[0].quantity).toEqual(3) //3
		})

		it('should decrement quantity', () => {
			const actionDecQuantity = {
				type: 'DEC_QUANTITY',
				payload: 1,
			}
			const state = reducer(INITIAL_STATE_TWO_ORDERS, actionDecQuantity)
			expect(state.orders[0].quantity).toEqual(1)
		})

		it('should remove order', () => {
			const actionRemoveOrder = {
				type: 'REMOVE_FROM_ORDER',
				payload: 1,
			}
			const state = reducer(INITIAL_STATE_TWO_ORDERS, actionRemoveOrder)
			expect(state.orders.length).toEqual(0)
		})
	})

	it('should set cart open', () => {
		const actionOpenCart = {
			type: 'SET_CART_OPEN',
		}
		const state = reducer(INITIAL_STATE, actionOpenCart)
		expect(state.isCartOpen).toBe(true)
	})

	it('should close Alert', () => {
		const actionCloseAlert = {
			type: 'CLOSE_ALERT',
		}
		const state = reducer(INITIAL_STATE, actionCloseAlert)
		expect(state.alertName).toBe('')
	})
})
