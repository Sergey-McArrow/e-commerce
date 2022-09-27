import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import React, { useState } from 'react'

const Header = () => {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
                        Online Shop
                    </Typography>
                    <Button color="inherit">Cart</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}







export { Header }