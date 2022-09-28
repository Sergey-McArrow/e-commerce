import React, { useContext } from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

import { Context } from '../../context'

const GoodItem = (goodsItem) => {
    const { addToOrder } = useContext(Context)

    return (
        <Card sx={{ width: '30%', flexGrow: 1 }}>
            <CardActionArea>
                <CardMedia sx={{ width: 'auto', margin: '0 auto' }}
                    component="img"
                    height="140"
                    image={goodsItem.image}
                    alt={goodsItem.name}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {goodsItem.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {goodsItem.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: 'space-around' }}>
                <Typography>
                    {goodsItem.price} $
                </Typography>
                <Button size="small" color="primary" onClick={() => addToOrder(goodsItem)} >
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    )
}

export { GoodItem }