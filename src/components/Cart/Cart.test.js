import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Cart } from './Cart'
import { Context } from '../../context'
import {
	EMPTY_CART_MOCK_DATA,
	NOT_EMPTY_CART_MOCK_DATA,
	SEVERAL_GOODS_ORDERS_CART_MOCK_DATA,
} from '../../mock'

describe('Test CartItem', () => {
	function renderWithProvider(value) {
		return render(
			<Context.Provider value={value}>
				<Cart />
			</Context.Provider>,
		)
	}

	describe('cart is empty', () => {
		beforeEach(() => {
			renderWithProvider(EMPTY_CART_MOCK_DATA)
		})

		it('should render correctly', () => {
			expect(screen.getByTestId('cart')).toBeInTheDocument()
			expect(screen.getByText(/Cart is empty/)).toBeInTheDocument()
			expect(screen.getByText(/Total/)).toBeInTheDocument()
			expect(screen.getByText(/0/)).toBeInTheDocument()
		})
	})

	describe('cart contain items', () => {
		beforeEach(() => {
			renderWithProvider(NOT_EMPTY_CART_MOCK_DATA)
		})
		it('should display item correctly', () => {
			expect(screen.getByText(/Side Shuffle/)).toBeInTheDocument()
			expect(screen.getByTestId('price', { name: '500' })).toBeInTheDocument()
		})
	})

	describe('cart conatin several items', () => {
		beforeEach(() => {
			renderWithProvider(SEVERAL_GOODS_ORDERS_CART_MOCK_DATA)
		})
		it('cart render multiple items', () => {
			expect(screen.getAllByText(/Test./)).toHaveLength(4)
			expect(screen.getAllByTestId('price')).toHaveLength(4)
		})
	})
})
