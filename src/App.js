import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hello from './components/Hello';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Navbar />
			<div>
				<Routes>
					<Route path='/' element={<Home />}></Route>
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
