import React, { useState } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { ContextProvider } from './context';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';


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
});

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});


function App() {
	const [theming, setTheme] = useState(true)
	return (
		<ThemeProvider theme={theming ? theme : darkTheme}>
			<ContextProvider>
				<CssBaseline />
				<Header setTheme={setTheme} theming={theming} />
				<Main />
			</ContextProvider>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
