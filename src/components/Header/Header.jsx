import { AppBar, Badge, Button, IconButton, Toolbar, Typography } from '@mui/material';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import MenuIcon from '@mui/icons-material/Menu';

import React, { useContext } from 'react'
import { Context } from '../../context'

const Header = () => {
    const { setCartOpen, orders } = useContext(Context)

    const ordersLength = orders.reduce((sum, order) => { return sum + order.quantity }, 0)


    return (
        <AppBar position="static" sx={{ color: '#efebe9' }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
                    Online Shop
                </Typography>
                <Button color="inherit" onClick={setCartOpen}>
                    <Badge badgeContent={ordersLength} color="primary">
                        <ShoppingCartCheckoutOutlinedIcon />
                    </Badge>
                </Button>
            </Toolbar>
        </AppBar>
    );
}







export { Header }