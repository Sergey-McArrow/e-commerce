import { Button, Container, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDataFromDB } from '../../firebase'
import { ItemDB } from './ItemDB'


const DBPage = () => {
    const [itemsDB, setItemsDB] = useState([])

    // const getDataHandler = () => getDataFromDB(setItemsDB)

    const items = Array.from(Object.values(itemsDB))

    useEffect(() => { getDataFromDB(setItemsDB) }, [])

    return (
        <Container>
            {/* <Button onClick={getDataHandler}>
                get
            </Button> */}
            <Paper elevation={6} sx={{ minHeight: 'calc(100vh - 136px - 64px)', mt: 5, }}>
                <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} sx={{ gap: 2, justifyContent: 'center', alignItems: 'center' }}>
                    {/* flexDirection: `${matches ? 'row' : 'column'}`, */}

                    {items.map(item => <ItemDB key={item.title} item={item} />)}
                </Grid>
            </Paper>
        </Container>
    )
}

export { DBPage }