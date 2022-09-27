import React, { useContext } from 'react'
import { GoodItem } from '../GoodItem/GoodItem';
import { Context } from '../../context'
import { Grid, LinearProgress } from '@mui/material';


const Goods = () => {
    const { goods, loading } = useContext(Context)
    return (
        <Grid md={12} sm={6} container spacing={{ xs: 2, md: 3 }} sx={{ gap: 2, justifyContent: 'center' }}>
            {loading ? <LinearProgress /> : (goods.length ? (goods.map(goodsItem => <GoodItem key={goodsItem.id} {...goodsItem} />)) : <h2>Nothing</h2>)}
        </Grid>

    )
}
export { Goods }