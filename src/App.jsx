import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { ContextProvider } from './context';

function App() {
	return (
		<>
			<Header />
			<ContextProvider>
				<Main />
			</ContextProvider>
			<Footer />
		</>
	);
}

export default App;
