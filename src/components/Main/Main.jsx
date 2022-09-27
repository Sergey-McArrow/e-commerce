import React, { useEffect, useContext } from 'react'
import { Container } from '@mui/material'
import { Context } from '../../context'

import './main.scss'
import { Goods } from '../Goods/Goods';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://fortniteapi.io/v1/shop?lang=en';

const Main = () => {
    const { setGoods } = useContext(Context)

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then(res => res.json())
            .then(res => { res.featured && setGoods(res.featured) })
            .catch(err => console.error(err));
        // eslint-disable-next-line
    }, [])


    return (
        <main>
            <Container>
                <Goods />
            </Container>
        </main>
    )
}
export { Main }

