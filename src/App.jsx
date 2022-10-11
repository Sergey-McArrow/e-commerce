import React, { useState } from 'react'
import {
	Routes,
	Route,
} from "react-router-dom"

import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { LoginPage } from './components/LoginPage'
import { Admin } from './components/Admin'
import { ContextProvider } from './context'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'


const theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#3f51b5',
		},
		secondary: {
			main: '#f50057',
		},
	},
})

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
})


function App() {
	const [theming, setTheme] = useState(true)
	return (

		<ThemeProvider theme={theming ? theme : darkTheme}>
			<ContextProvider>
				<CssBaseline />
				<Header setTheme={setTheme} theming={theming} />
				<Routes>
					<Route path='/e-commerce' element={<Main />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/admin' element={<Admin />} />
				</Routes>
			</ContextProvider>

			<Footer />
		</ThemeProvider>

	)
}

export default App
