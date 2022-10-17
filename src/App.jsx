import React, { useState } from 'react'
import {
	Routes,
	Route,
} from "react-router-dom"

import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { Admin } from './components/Admin'
import { DBPage } from './components/Admin/DBPage'

import { ContextProvider } from './context'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { RequireAuth } from './components/hoc/RequireAuth'


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
	const [currentUser, setCurrentUser] = useState(null)
	return (

		<ThemeProvider theme={theming ? theme : darkTheme}>
			<ContextProvider>
				<CssBaseline />
				<Header setTheme={setTheme} theming={theming} setCurrentUser={setCurrentUser} currentUser={currentUser} />
				<Routes>
					<Route path='/e-commerce' element={<Main />} />
					<Route path='/admin' element={
						<RequireAuth currentUser={currentUser}>
							<Admin />
						</RequireAuth>
					} />
					<Route path='/admin/items' element={
						<RequireAuth currentUser={currentUser}>
							<DBPage />
						</RequireAuth>
					} />
				</Routes>
			</ContextProvider>

			<Footer />
		</ThemeProvider>

	)
}

export default App
