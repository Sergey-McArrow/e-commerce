import { render, within, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { CartItem } from './CartItem'

import { ContextProvider } from '../../context'
import { Header } from '../Header'
import { GoodItem } from '../Goods/GoodItem'
import { useContext } from 'react'


// const TestProvider = ({ children }) => {
//     const [isLoggedIn, toggleLoginStatus] = useContext(false)

//     const toggleLogin = () => {
//         toggleLoginStatus(!isLoggedIn)
//     }

//     return (
//         <ContextProvider value={{ toggleLogin, isLoggedIn }}>
//             <div>Message: {children}</div>
//         </ContextProvider>
//     )
// }

const mockItem = {
    description: "Keep it seamless.",
    name: "Side Shuffle",
    price: 500,
    image: "https://media.fortniteapi.io/images/3038b07d09f6292f41a0cad6a5f426af/featured.png",
    quantity: 0
}

describe('Test CartItem', () => {

    it('changing quantity working with Reducer', () => {
        let incQuantity = jest.fn()
        incQuantity.mockReturnValue({ ...mockItem, quantity: mockItem.quantity++ })
        let decQuantity = jest.fn()
        decQuantity.mockReturnValue({ ...mockItem, quantity: mockItem.quantity-- })

        const { getByTestId, getByText } = render(
            <ContextProvider>

                <CartItem item={mockItem} />
            </ContextProvider>
        )
        // const quantity = getByTestId('quantity')
        // userEvent.click(getByTestId('addToCart'))
        // userEvent.click(getByTestId('cart'))
        // userEvent.click(getByTestId('increment'))
        // screen.debug()
        // expect(incQuantity).toHaveBeenCalledTimes(1)
        // expect(quantity).toHaveTextContent('2')
        // userEvent.click(getByTestId('decrement'))
        // expect(decQuantity).toHaveBeenCalledTimes(1)
        // expect(quantity).toHaveTextContent('1')

        // quantity.getByText('1')
        // expect(getByTestId('quantity')).toHaveTextContent('1')
        // const span = within(quantity).getByText('1')
        // userEvent.click(getByTestId('decrement'))
        // expect(quantity.parentNode.childNodes).toHaveTextContent('2')
        // userEvent.click(getByTestId('increment'))
        // expect(quantity.parentNode.childNodes).toHaveTextContent('1')
    })
    // it('increment working with Reducer', () => {
    //     // ARRANGE
    //     render(<CartItem />)
    //     // ACT
    //     userEvent.click(screen.getByTestId('increment'))
    //     let initialValue = 0
    //     // ASSERT
    //     expect(screen.getByTestId('quantity')).toHaveTextContent(initialValue.toString())
    //     initialValue++
    // })
})