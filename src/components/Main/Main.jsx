import React, { useEffect, useContext } from 'react'
import { Context } from '../../context'

import { Goods } from '../Goods/Goods'
import { Cart } from '../Cart'
import { AddedAlert } from '../AddedAlert/'
import { getItems } from '../../api'

import { Container, LinearProgress } from '@mui/material'
import { amber, blueGrey, deepPurple, teal } from '@mui/material/colors'
import { styled } from '@mui/material/styles'


const Root = styled('main')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        backgroundColor: amber[200],
    },
    [theme.breakpoints.up('sm')]: {
        backgroundColor: teal[200],
    },
    [theme.breakpoints.up('md')]: {
        backgroundColor: deepPurple[200],
    },
    [theme.breakpoints.up('lg')]: {
        backgroundColor: blueGrey[200],

    },
}))

const Main = () => {
    const { setGoods, isCartOpen, alertName, loading } = useContext(Context)
    console.log(Context)

    useEffect(() => {
        getItems().then(res => { setGoods(res) }).catch(err => console.error(err))
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {alertName && <AddedAlert />}
            <Root >
                {loading ? (<LinearProgress />) : (
                    <Container sx={{ width: 7 / 8, m: '0 auto', p: '0 0 0 0 !important' }}>
                        <Goods />
                        {isCartOpen && <Cart />}
                    </Container>
                )}
            </Root>
        </>
    )
}
export { Main }

