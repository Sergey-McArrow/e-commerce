import { SwipeableDrawer, ListItem, List, ListItemText, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import React, { useContext } from 'react'
import { Context } from '../../context'
import { CartItem } from './CartItem';
import { deepPurple } from '@mui/material/colors';




const Cart = () => {
    const { orders, isCartOpen, setCartOpen, } = useContext(Context)


    const totalPrice = orders.reduce((acc, order) => {
        return acc + order.price * order.quantity;
    }, 0);

    const matches = useMediaQuery('(min-width:400px)');


    return (
        <SwipeableDrawer
            anchor='right'
            open={isCartOpen}
            onClose={setCartOpen}
            onOpen={setCartOpen}
        >
            <List sx={{ background: deepPurple[100] }} >
                {orders.length ?
                    (
                        <ListItem sx={{ background: deepPurple[200] }}>
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
                <List sx={{
                    justifyContent: 'space-between', display: 'flex',
                    alignItems: 'center', pt: 5, flexDirection: 'column'
                }}>
                    {orders.length ? (
                        orders.map((order, index) =>
                            <CartItem key={order.id} {...order} index={index} />)

                    ) : <ListItemText variant='h3' primaryTypographyProps={{ fontSize: `${matches ? '1.8rem' : '1rem'}`, textAlign: 'center' }} sx={{ justifyContent: 'space-between', p: 2 }} >Cart is empty</ListItemText>}
                    <ListItem sx={{ justifyContent: 'space-between', background: deepPurple[200] }}>
                        <ListItemText variant='h3' primaryTypographyProps={{ fontSize: `${matches ? '1.8rem' : '1.2rem'}`, textAlign: 'right' }} >
                            Total:
                        </ListItemText>
                        <ListItemText variant='h3' primaryTypographyProps={{ fontSize: `${matches ? '1.8rem' : '1.2rem'}`, textAlign: 'right' }} >
                            {totalPrice} $
                        </ListItemText>
                    </ListItem>
                </List>
            </List>
        </SwipeableDrawer >

    )
}

export { Cart }