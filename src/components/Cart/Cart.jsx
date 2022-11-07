import { SwipeableDrawer, ListItem, List, ListItemText, useMediaQuery, Button, Divider } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import React, { useContext } from 'react'
import { Context } from '../../context'
import { CartItem } from './CartItem'

const Cart = () => {
    const { orders, isCartOpen, setCartOpen, } = useContext(Context)

    const totalPrice = orders.reduce((acc, order) => {
        return acc + order.price * order.quantity
    }, 0)

    const matches = useMediaQuery('(min-width:400px)')

    return (
        <SwipeableDrawer
            anchor='right'
            open={isCartOpen}
            onClose={setCartOpen}
            onOpen={setCartOpen}
            sx={{ minWidth: 1 / 3 }}
        >
            <List >
                {orders.length ?
                    (
                        <ListItem >
                            <ListItemText variant='h3' primaryTypographyProps={{ fontSize: `${matches ? '1.8rem' : '1rem'}`, textAlign: 'center' }}  >
                                Title
                            </ListItemText>
                            <ListItemText variant='h3' primaryTypographyProps={{ fontSize: `${matches ? '1.8rem' : '1rem'}`, textAlign: 'center' }} >
                                Quantity
                            </ListItemText>
                            <ListItemText variant='h3' primaryTypographyProps={{ fontSize: `${matches ? '1.8rem' : '1rem'}`, textAlign: 'center' }} >
                                Price
                            </ListItemText>
                            <CloseIcon onClick={setCartOpen} />
                        </ListItem>
                    ) : null}
                <Divider />
                <List sx={{
                    justifyContent: 'space-between', display: 'flex', gap: '0.5rem',
                    alignItems: 'center', pt: 5, flexDirection: 'column'
                }}
                    component="form"
                >
                    {orders.length ? (
                        orders.map((order, index) =>
                            <CartItem key={order.id} {...order} index={index} />
                        )

                    ) : <ListItemText
                        variant='h3'
                        primaryTypographyProps={{ fontSize: `${matches ? '1.8rem' : '1rem'}`, textAlign: 'center' }}
                        sx={{ justifyContent: 'space-between', p: 2 }}
                    >
                        Cart is empty
                    </ListItemText>}
                    <ListItem sx={{ justifyContent: 'space-between' }}>
                        <ListItemText variant='h3' primaryTypographyProps={{ fontSize: `${matches ? '1.8rem' : '1.2rem'}`, textAlign: 'right' }} >
                            Total:
                        </ListItemText>
                        <ListItemText variant='h3' primaryTypographyProps={{ fontSize: `${matches ? '1.8rem' : '1.2rem'}`, textAlign: 'right' }} >
                            {totalPrice} $
                        </ListItemText>
                    </ListItem>
                    {orders.length ? (<Button type='submit' onClick={() => alert(`You have successfully purchase something for ${totalPrice} USD`)} variant='contained' sx={{ width: 1 / 3, alignSelf: 'center', my: 3 }}>
                        checkout
                    </Button>) : null}
                </List>
            </List>
        </SwipeableDrawer >

    )
}

export { Cart }