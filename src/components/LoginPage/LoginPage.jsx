import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { GoogleAuthProvider } from "firebase/auth"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth"
import { ui, uiConfig } from '../../firebase'
import { app, auth } from '../../firebase.config'

import { Button, IconButton, InputAdornment, LinearProgress, OutlinedInput, Paper, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Container } from '@mui/system'




const LoginPage = () => {
    const { register, handleSubmit, reset } = useForm()
    const [newUser, setNewUser] = useState('')
    // const [passwordRegister, setPasswordRegister] = useState('')


    const toggleSignIn = () => {
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
                // The signed-in user info.
                const user = result.user
                console.log(user)
                setNewUser(user)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code
                const errorMessage = error.message
                // The email of the user's account used.
                const email = error.customData.email
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error)
                // ...
            })

    }



    const onSubmit = data => {
        console.log(data)
        // setNewUser(newUser)

    }


    const registration = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                newUser.email,
                newUser.password
            )
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        ui.start('#firebaseui-auth-container', uiConfig)
    }, [])

    return (
        <Container sx={{ p: 5 }}>
            <Paper elevation={6} component='form' sx={{ p: 5 }}
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    required
                    autoComplete="email"
                    label="Email"
                    margin="normal"
                    helperText=" Enter your email"
                    {...register("email", { required: true, maxLength: 20 })}
                />
                <OutlinedInput
                    id="outlined-adornment-password"
                    // value={values.password}
                    // onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                //   onClick={handleClickShowPassword}
                                //   onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {newUser.password ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    type="password"
                    autoComplete="current-password"
                    {...register("password", { required: true, maxLength: 20 })}
                />
                <Button
                    type='submit'
                    onClick={toggleSignIn}>
                    Log In
                </Button>
            </Paper>
            <div id="firebaseui-auth-container"></div>
            <div id="loader"><LinearProgress /></div>
        </Container>
    )
}

export { LoginPage }