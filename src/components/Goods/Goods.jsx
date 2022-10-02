import React, { useContext } from 'react'
import { GoodItem } from './GoodItem';
import { Context } from '../../context'
import { Grid, LinearProgress, useMediaQuery } from '@mui/material';


const Goods = () => {
    const { goods, loading } = useContext(Context)

    const matches = useMediaQuery('(min-width:400px)');

    return (
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} sx={{ gap: 2, justifyContent: 'center', flexDirection: `${matches ? 'row' : 'column'}`, alignItems: 'center' }}>
            {loading ? <LinearProgress /> : (goods.length ? (goods.map(goodsItem => <GoodItem key={goodsItem.id} {...goodsItem} />)) : <h2>Nothing here</h2>)}
        </Grid>

    )
}
export { Goods }