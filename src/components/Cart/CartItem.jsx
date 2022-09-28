import React, { useContext } from 'react'
import { ListItem, Stack, ListItemText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Close } from '@mui/icons-material';

import { Context } from '../../context'

export const CartItem = ({ id, name, price, quantity, index }) => {
    const { incQuantity, decQuantity, removeFromOrder } = useContext(Context)
    const lines = index % 2 === 0
    return (
        <ListItem sx={{ minHeight: 96, justifyContent: 'space-between', backgroundColor: `${lines ? '#cfd8dc' : '#eceff1'}` }}>
            <ListItemText sx={{ mr: 10, maxWidth: '30%', minWidth: '30%' }} primaryTypographyProps={{ fontSize: '1.5rem ' }} >
                {name}
            </ListItemText>
            <Stack direction="row" >
                <ListItemText sx={{ minWidth: 24 }} >
                    {quantity > 1 && <RemoveIcon onClick={() => decQuantity(id)} />}
                </ListItemText>
                <ListItemText sx={{ m: '0 10px' }} primaryTypographyProps={{ fontSize: '1.5rem ' }}  >
                    {quantity}
                </ListItemText>
                <ListItemText  >
                    <AddIcon onClick={() => incQuantity(id)} />
                </ListItemText>
            </Stack>
            <ListItemText primaryTypographyProps={{ fontSize: '1.5rem ', textAlign: 'center' }}  >
                {price} $
            </ListItemText>
            <Close onClick={() => removeFromOrder(id)} />
        </ListItem>
    )
}
