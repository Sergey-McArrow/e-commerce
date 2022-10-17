import React from 'react'
import { useNavigate } from 'react-router-dom'


import { Button, Container, Paper, Typography, } from '@mui/material'


const RequireAuth = ({ children, currentUser }) => {
    const navigate = useNavigate()
    const navigationHandler = () => {
        navigate('/e-commerce')
    }

    if (currentUser?.email === "sergey.mcarrow@gmail.com") {
        return children
    }
    else {
        return (
            <Container sx={{ minHeight: 'calc(100vh - 136px - 64px)', mt: 5, width: 1 / 2 }}>
                <Paper elevation={6} sx={{ textAlign: 'center', p: 5 }}>
                    <Typography sx={{ p: 5 }}>
                        You have no permission
                    </Typography>
                    <Button variant='contained' onClick={navigationHandler}>
                        GO HOME
                    </Button>
                </Paper>
            </Container>)
    }
}

export { RequireAuth }