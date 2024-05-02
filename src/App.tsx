import { useContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { IncrementProvider } from './context/IncrementContext';

function App() {
	return (
		<IncrementProvider>
			<Router>
				<Routes>
					<Route path='/' element={Home()}></Route>
					<Route path='about' element={About()}></Route>
				</Routes>
			</Router>
		</IncrementProvider>
	);
}

export default App;
