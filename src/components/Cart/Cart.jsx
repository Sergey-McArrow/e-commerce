import { SwipeableDrawer, ListItem, List, ListItemText } from '@mui/material';

import React, { useContext } from 'react'
import { Context } from '../../context'
import { CartItem } from './CartItem';

const Cart = () => {
    const { orders, isCartOpen, setCartOpen, } = useContext(Context)

    const totalPrice = orders.reduce((acc, order) => {
        return acc + order.price * order.quantity;
    }, 0);

    return (
        <>
            <SwipeableDrawer
                anchor='right'
                open={isCartOpen}
                onClose={setCartOpen}
                onOpen={setCartOpen}
            >
                <List >
                    {orders.length ?
                        (
                            <ListItem >
                                <ListItemText primaryTypographyProps={{ fontSize: '1.5rem' }} >
                                    Title
                                </ListItemText>
                                <ListItemText primaryTypographyProps={{ fontSize: '1.5rem', textAlign: 'center' }} >
                                    Quantity
                                </ListItemText>
                                <ListItemText primaryTypographyProps={{ fontSize: '1.5rem', textAlign: 'center' }} >
                                    Price
                                </ListItemText>
                            </ListItem>
                        ) : null}
                    <List sx={{
                        justifyContent: 'space-between', display: 'flex',
                        alignItems: 'center', pt: 5, flexDirection: 'column'
                    }}>
                        {orders.length ? (
                            orders.map((order, index) =>
                                <CartItem key={order.id} {...order} index={index} />)

                        ) : <ListItemText variant='h6' sx={{ justifyContent: 'space-between' }} primaryTypographyProps={{ fontSize: '1.5rem ' }} >Cart is empty</ListItemText>}
                        <ListItem sx={{ justifyContent: 'space-between', bgcolor: '#e8f5e9' }}>
                            <ListItemText primaryTypographyProps={{ fontSize: '1.5rem ', textAlign: 'right' }}>
                                Total:
                            </ListItemText>
                            <ListItemText primaryTypographyProps={{ fontSize: '1.5rem ', textAlign: 'right' }} >
                                {totalPrice} $
                            </ListItemText>
                        </ListItem>
                    </List>
                </List>
            </SwipeableDrawer>
        </>

    )
}

export { Cart }