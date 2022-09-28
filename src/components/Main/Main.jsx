import React, { useEffect, useContext } from 'react'
import { Container } from '@mui/material'
import { Context } from '../../context'

import './main.scss'
import { Goods } from '../Goods/Goods';
import { Cart } from '../Cart';
import { AddedAlert } from '../AddedAlert/';
import { getItems } from '../../api';

const Main = () => {
    const { setGoods, isCartOpen, alertName } = useContext(Context)

    useEffect(() => {
        getItems().then(res => { setGoods(res) }).catch(err => console.error(err));
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {alertName && <AddedAlert />}
            <main>
                <Container>
                    <Goods />
                    {isCartOpen && <Cart />}
                </Container>
            </main>
        </>
    )
}
export { Main }

