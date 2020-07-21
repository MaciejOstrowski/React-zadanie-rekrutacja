import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container/Container';

const App = () => {
	return (
		<div style={{width: "100vw", height: "100vh", backgroundColor: "#AABBCC", display: "flex", justifyContent: "center", alignItems: "center"}}>
			<Container />
		</div>
	)
}

export default App;
