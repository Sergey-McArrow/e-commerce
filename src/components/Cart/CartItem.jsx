import React, { useContext } from 'react'
import { ListItem, Stack, ListItemText, useMediaQuery } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Close } from '@mui/icons-material'

import { Context } from '../../context'

export const CartItem = ({ id, name, price, quantity }) => {

    const { incQuantity, decQuantity, removeFromOrder } = useContext(Context)
    const matches = useMediaQuery('(min-width:600px)')
    console.log(quantity)

    return (
        <ListItem sx={{ minHeight: 96, justifyContent: 'space-between', }}>
            <ListItemText sx={{ mr: 10, maxWidth: '30%', minWidth: '30%' }} primaryTypographyProps={{ fontSize: `${matches ? '1.8rem' : '1rem'}` }} >
                {name}
            </ListItemText>
            <Stack direction="row" sx={{ alignItems: 'center' }} >
                <ListItemText sx={{ minWidth: 24 }} >
                    {quantity > 1 && <RemoveIcon onClick={() => decQuantity(id)} sx={{ fontSize: `${matches ? '1.8rem' : '1rem'}` }} />}
                </ListItemText>
                <ListItemText sx={{ m: '0 10px' }} primaryTypographyProps={{ fontSize: `${matches ? '1.8rem' : '1rem'}` }}  >
                    {quantity}
                </ListItemText>
                <ListItemText  >
                    <AddIcon onClick={() => incQuantity(id)} sx={{ fontSize: `${matches ? '1.8rem' : '1rem'}` }} />
                </ListItemText>
            </Stack>
            <ListItemText primaryTypographyProps={{ fontSize: `${matches ? '1.8rem' : '1rem'}`, textAlign: 'center' }}  >
                {price} $
            </ListItemText>
            <Close onClick={() => removeFromOrder(id)} />
        </ListItem >
    )
}
