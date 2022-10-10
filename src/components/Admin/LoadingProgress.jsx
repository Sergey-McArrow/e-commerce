import { Box, LinearProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'




const LoadingProgres = () => {
    const [progress, setProgress] = useState(0)

    const loadingprogres = () => {
    }

    const LinearprogresWithLabel = (props) => {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" {...props} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">{`${Math.round(
                        props.value,
                    )}%`}</Typography>
                </Box>
            </Box>
        )
    }




    useEffect(() => {
        // getProgress(progress, setProgress)
        console.log(progress)
        // setprogres((prevprogres) => (prevprogres >= 100 ? 0 : prevprogres + 10))
    }, [progress])

    return (
        <Box sx={{ width: '100%' }}>
            <LinearprogresWithLabel value={progress} />
        </Box>)
}

export { LoadingProgres }