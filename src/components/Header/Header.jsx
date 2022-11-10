import { AppBar, Badge, Button, IconButton, Toolbar, Typography } from '@mui/material'
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import React, { useContext, useState } from 'react'
import { Context } from '../../context'
import { Sidebar } from './Sidebar'

const Header = ({ setTheme, theming }) => {
    const { setCartOpen, orders } = useContext(Context)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const ordersLength = orders.length ? orders.reduce((sum, order) => { return sum + order.quantity }, 0) : 0

    return (
        <AppBar position="static" sx={{ color: '#efebe9' }}>
            {sidebarOpen && <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => setSidebarOpen(sidebarOpen => !sidebarOpen)}
                // onClick={alert('hello')}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="h1" sx={{ flexGrow: 1, }}>
                    <a href="https://github.com/Sergey-McArrow/e-commerce" target='_blank' rel="noreferrer" className='link'>
                        <Typography sx={{ textDecoration: 'none ', color: '#fff' }}>
                            Online Shop
                        </Typography>
                    </a>
                </Typography>
                <Button sx={{ color: 'whitesmoke' }} onClick={() => setTheme(prev => !prev)}> {!theming ? <Brightness7Icon /> : <Brightness4Icon />}</Button>
                <Button color="inherit" onClick={setCartOpen} data-testid="cart">
                    <Badge badgeContent={ordersLength} color="primary">
                        <ShoppingCartCheckoutOutlinedIcon />
                    </Badge>
                </Button>
            </Toolbar>
        </AppBar>
    )
}







export { Header }