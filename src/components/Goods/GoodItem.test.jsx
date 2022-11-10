import { render, screen } from '@testing-library/react'
import { Context } from '../../context'
import { GoodItem } from './GoodItem'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

const addToOrderFn = {
    addToOrder: jest.fn()
}

describe('<GoodItem/>', () => {
    const renderWithProvider = (value) => {
        return render(
            <Context.Provider value={value}>
                <GoodItem />
            </Context.Provider>,
        )
    }

    beforeEach(() => {
        renderWithProvider(addToOrderFn)
    })

    it('should render goods cards', () => {
        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.getByTestId('name')).toBeInTheDocument()
        expect(screen.getByTestId('description')).toBeInTheDocument()
        expect(screen.getByTestId('price')).toBeInTheDocument()
        expect(screen.getByTestId('addToCart')).toBeInTheDocument()
    })

    it('should add to cart', () => {
        userEvent.click(screen.getByTestId('addToCart'))
        expect(addToOrderFn.addToOrder).toHaveBeenCalledTimes(1)
        userEvent.click(screen.getByTestId('addToCart'))
        userEvent.click(screen.getByTestId('addToCart'))
        expect(addToOrderFn.addToOrder).toHaveBeenCalledTimes(3)
    })
})