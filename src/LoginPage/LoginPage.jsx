import React, { useEffect } from 'react'

import { LinearProgress } from '@mui/material'

import { FirebaseApp, ui, uiConfig } from '../firebase'


console.log(FirebaseApp)
console.log(ui)

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