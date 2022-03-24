import React from 'react';
import bg from '../img/bg.jpeg';
import Card from './Card';
import Footer from './Footer';

const Home = () => {
	return (
		<>
			<img src={bg} alt='' />
			<p className='font-bold text-2xl lg:text-4xl md:text-3xl ml-3 mr-3 mt-5 tracking-wide text-center'>
				A step towards the dream to learn and{' '}
				<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-pink-500'>
					grow together
				</span>
			</p>
			<p className='mt-3  text-center text-lg lg:mx-48 md:mx-24 sm:mx-12'>
				MITAOE is aimed to create and maintain a safe, healthy, and
				conducive environment and culture that synthesizes the
				intellectual, technical, physical, social, emotional, and
				ethical development of students in a holistic way.
			</p>
			<div className='flex flex-wrap justify-center ml-10 mr-10 mt-20 col-span-3 '>
				<div className='basis-1/3 '>
					<Card
						name='Event Title'
						description='MITAOE is aimed to create and maintain a safe, healthy, and
				conducive environment and culture that synthesizes the'
					/>
				</div>
				<div className='basis-1/3'>
					<Card
						name='Event Title'
						description='MITAOE is aimed to create and maintain a safe, healthy, and
				conducive environment and culture that synthesizes the'
					/>
				</div>
				<div className='basis-1/3'>
					<Card
						name='Event Title'
						description='MITAOE is aimed to create and maintain a safe, healthy, and
				conducive environment and culture that synthesizes the'
					/>
				</div>
				<div className='basis-1/3'>
					<Card
						name='Event Title'
						description='MITAOE is aimed to create and maintain a safe, healthy, and
				conducive environment and culture that synthesizes the'
					/>
				</div>
				<div className='basis-1/3'>
					<Card
						name='Event Title'
						description='MITAOE is aimed to create and maintain a safe, healthy, and
				conducive environment and culture that synthesizes the'
					/>
				</div>
				<div className='basis-1/3'>
					<Card
						name='Event Title'
						description='MITAOE is aimed to create and maintain a safe, healthy, and
				conducive environment and culture that synthesizes the'
					/>
				</div>
				<div className='basis-1/3'>
					<Card
						name='Event Title'
						description='MITAOE is aimed to create and maintain a safe, healthy, and
				conducive environment and culture that synthesizes the'
					/>
				</div>
			</div>
		</>
	);
};

export default Home;
