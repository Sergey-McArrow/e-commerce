import React, { useContext, useEffect } from 'react'
import { Alert } from '@mui/material'

import { Context } from '../../context'

const AddedAlert = () => {
    const { alertName, closeAlert } = useContext(Context)

    useEffect(() => {
        const timer = setTimeout(closeAlert, 3000)

        return () => clearTimeout(timer)
        // eslint-disable-next-line
    }, [alertName])

    return (
        <Alert sx={{
            position: 'fixed',
            right: 0,
            zIndex: 10,
        }} severity="success"> {alertName} was added to Cart!</Alert>
    )
}
export { AddedAlert }