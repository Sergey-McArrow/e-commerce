import { Box, List, ListItem, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react'

const social = [<InstagramIcon />, <FacebookIcon />, <YouTubeIcon />]

const Footer = () => {
    return (
        <Box color="common.white" position="static" sx={{ p: 2, bgcolor: '#1976d2', color: '#efebe9' }}>
            <Typography> Made by S.McArrow just for fun </Typography>
            <Typography> © {new Date().getFullYear()} All rights reserved </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <List sx={{ display: 'flex' }}>
                    {social.map((el, i) => <ListItem key={i}>
                        {el}
                    </ListItem>
                    )}
                </List>
            </Box>
        </Box >
    )
}

export { Footer }