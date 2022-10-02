import { Box, List, ListItem, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react'

const social = [
    {
        icon: <InstagramIcon />,
        ref: 'https://www.instagram.com/'
    },
    {
        icon: <FacebookIcon />,
        ref: 'https://www.facebook.com/'
    },
    {
        icon: <YouTubeIcon />,
        ref: 'https://www.youtube.com/'
    }]

const Footer = () => {
    return (
        <Box position="static" sx={{ p: 2, bgcolor: '#3f51b5', color: '#efebe9' }}>
            <Typography> Made by S.McArrow just for fun </Typography>
            <Typography> © {new Date().getFullYear()} All rights reserved </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <List sx={{ display: 'flex' }}>
                    {social.map((el, i) => <ListItem key={i}>
                        <a href={el.ref} target='_blank ' className='link'>
                            {el.icon}
                        </a>
                    </ListItem>
                    )}
                </List>
            </Box>
        </Box >
    )
}

export { Footer }