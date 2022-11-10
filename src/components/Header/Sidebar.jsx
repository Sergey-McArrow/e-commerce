import { Box, Divider, Paper, SwipeableDrawer } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <SwipeableDrawer
            anchor='left'
            open={sidebarOpen}
            onClose={() => setSidebarOpen(prev => !prev)}
            onOpen={() => setSidebarOpen(prev => !prev)}
            swipeAreaWidth={300}

        >
            <Box sx={{ margin: '0 auto', width: 8 / 9, height: 1 / 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CloseIcon onClick={() => setSidebarOpen(false)} sx={{ alignSelf: 'end', mt: 1.5 }} />
                <a className='image-link'
                    href="https://www.freepik.com/free-vector/stop-war-ukraine-text-decorative-country-flag-design-vector_24456095.htm#query=ukraine&position=6&from_view=search&track=sph">
                    Image by Creative_haton Freepik
                </a>
                <Divider />
                <Paper elevation={8}
                    sx={{ borderRadius: 3, width: 8 / 9, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, textAlign: 'center' }}>
                    <a href="https://u24.gov.ua/"
                        target="_blank"
                        rel="noreferrer"
                        className='donation-link'>
                        United 24
                    </a>
                    <a href="https://savelife.in.ua/en/donate-en/#donate-army-card-monthly"
                        target="_blank"
                        rel="noreferrer"
                        className='donation-link'>
                        Charity Foundation "Come Back Alive"
                    </a>
                    <a href="https://bank.gov.ua/en/about/support-the-armed-forces"
                        target="_blank"
                        rel="noreferrer"
                        className='donation-link'>
                        Transfer from a Card for Army
                    </a>
                    <a href="https://www.kmu.gov.ua/en/news/specialnij-rahunok-dlya-zboru-koshtiv-na-pidtrimku-zbrojnih-sil-ukrayini"
                        target="_blank"
                        rel="noreferrer"
                        className='donation-link'>
                        A special fundraising account to support the Armed Forces of Ukraine
                    </a>
                    <a href="https://prytulafoundation.org/"
                        target="_blank"
                        rel="noreferrer"
                        className='donation-link'>
                        Charity foundation of Serhiy Prytula
                    </a>
                </Paper>
            </Box>


        </SwipeableDrawer >)
}
export { Sidebar }