import { AppBar, Avatar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import GitHubIcon from '@mui/icons-material/GitHub'
import LogoutIcon from '@mui/icons-material/Logout'
import LoginIcon from '@mui/icons-material/Login'

import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"

import { Context } from '../../context'

import { toggleSignIn } from '../../firebase.auth'
import { auth } from '../../firebase.config'
import { signOut } from "firebase/auth"


const Header = ({ setTheme, theming, setCurrentUser, currentUser }) => {
    const { setCartOpen, orders } = useContext(Context)
    const navigate = useNavigate()

    const ordersLength = orders.reduce((sum, order) => { return sum + order.quantity }, 0)

    // const [pending, setPending] = useState(true)

    const logout = async () => {
        await signOut(auth)
        navigate('/e-commerce')
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
            navigate('/admin')
        })
    }, [])

    return (
        <AppBar position="static" sx={{ color: '#efebe9' }}>
            <Toolbar sx={{ display: 'flex', gap: 1 }}>

                <Box sx={{ display: 'flex', flexGrow: 2, gap: 2 }}>
                    <Link to="https://github.com/Sergey-McArrow/e-commerce" target='_blank' rel="noreferrer" className='link'>
                        <GitHubIcon />
                    </Link>
                    <Link to="/e-commerce" target='_blank' rel="noreferrer" className='link'>
                        <Typography variant="h6" component="h1" sx={{ textDecoration: 'none ', color: '#fff' }}>
                            Online Shop
                        </Typography>
                    </Link>
                </Box>

                <Button sx={{ color: 'whitesmoke' }} onClick={() => setTheme(prev => !prev)}> {!theming ? <Brightness7Icon /> : <Brightness4Icon />}</Button>
                <Button color="inherit" onClick={setCartOpen}>
                    <Badge badgeContent={ordersLength} color="primary">
                        <ShoppingCartCheckoutOutlinedIcon />
                    </Badge>
                </Button>
                {currentUser ?
                    <Avatar src={currentUser?.photoURL} sx={{ cursor: 'pointer', mx: 2 }} onClick={toggleSignIn}  >OP</Avatar>
                    :
                    <LoginIcon onClick={toggleSignIn} />}
                <LogoutIcon onClick={logout} />
            </Toolbar>
        </AppBar >
    )
}

export { Header }