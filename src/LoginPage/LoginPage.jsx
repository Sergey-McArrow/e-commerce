import React, { useEffect } from 'react'

import { LinearProgress } from '@mui/material'

import { ui, uiConfig } from '../firebase'


const LoginPage = () => {
    useEffect(() => {
        ui.start('#firebaseui-auth-container', uiConfig)
    }, [])

    return (
        <>
            <div id="firebaseui-auth-container"></div>
            <div id="loader"><LinearProgress /></div>
        </>
    )
}

export { LoginPage }