import './App.css';
import Navbar from './components/Navbar';
import Hello from './components/Hello';
import bg from './img/bg.jpeg';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<Navbar className='navbar' />
			<img src={bg} alt='' />
			<p className='font-bold text-2xl lg:text-4xl md:text-3xl ml-3 mr-3 mt-5 tracking-wide '>
				A step towards the dream to learn and{' '}
				<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-pink-500'>
					grow together
				</span>
			</p>
			<p className='mt-3 mr-48 ml-48 text-center text-lg '>
				MITAOE is aimed to create and maintain a safe, healthy, and
				conducive environment and culture that synthesizes the
				intellectual, technical, physical, social, emotional, and
				ethical development of students in a holistic way.
			</p>
			<div className='flex flex-wrap justify-start m-10 mt-20 col-span-3  '>
				<div className='basis-1/3 '>
					<Card />
				</div>
				<div className='basis-1/3'>
					<Card />
				</div>
				<div className='basis-1/3'>
					<Card />
				</div>
				<div className='basis-1/3'>
					<Card />
				</div>
				<div className='basis-1/3'>
					<Card />
				</div>
				<div className='basis-1/3'>
					<Card />
				</div>
				<div className='basis-1/3'>
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
