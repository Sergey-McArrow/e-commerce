import React, { useContext } from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, useMediaQuery } from '@mui/material'

import { Context } from '../../context'


import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'



const GoodItem = (goodsItem) => {
    const { addToOrder } = useContext(Context)
    const { name, image, description, price } = goodsItem

    const matchesM = useMediaQuery('(min-width:700px)')
    const matchesS = useMediaQuery('(min-width:500px)')

    let theme = createTheme()
    theme = responsiveFontSizes(theme)

    return (
        <Card sx={{ width: `${matchesM ? '30%' : matchesS ? '50%' : '90%'}`, maxWidth: `${matchesS ? '45%' : '90%'}`, flexGrow: 1, }}>
            <CardActionArea sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {(image === 'N/A') ? (
                    <CardMedia sx={{ width: 'auto', margin: '0 auto' }}
                        component="img"
                        height="140"
                        src={`https://via.placeholder.com/300x400?text=${name}`}
                        alt={name}
                    />
                ) : (

                    < CardMedia sx={{ margin: '0 auto', height: 1 / 1 }}
                        component="img"
                        height='100%'
                        image={image}
                        alt={name}
                        title={name}
                        loading="lazy"

                    />
                )}
                <ThemeProvider theme={theme}>
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ height: '2rem' }}>
                            {name}
                        </Typography>
                        <Typography sx={{ height: '2rem', py: 3 }} >
                            {description}
                        </Typography>
                    </CardContent>
                </ThemeProvider>
            </CardActionArea>
            <CardActions sx={{ justifyContent: 'space-around', width: 1 / 1, py: 2 }}>
                <Typography>
                    {price} $
                </Typography>
                <Button size="small" color="primary" onClick={() => addToOrder(goodsItem)} >
                    Add to Cart
                </Button>
            </CardActions>
        </Card >
    )
}

export { GoodItem }