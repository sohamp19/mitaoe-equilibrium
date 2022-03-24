import React from 'react';
import equilogo from '../img/equilogo.png';

const Card = ({ name, description }) => {
	return (
		<div className='flex w-max mb-10 hover:shadow-sky-800 hover:shadow-2xl justify-center'>
			<div className='rounded-lg shadow-lg bg-white max-w-sm'>
				<a href='#!'>
					<img className='rounded-t-lg ' src={equilogo} alt='' />
				</a>
				<div className='p-6 bg-sky-400'>
					<h5 className='text-gray-900 text-xl font-medium mb-2'>
						Event title
					</h5>
					<p className='text-gray-700 text-base mb-4'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Impedit nostrum adipisci cumque magnam aut eum harum
						veritatis iste, fugiat cupiditate mollitia quam maiores
					</p>
					<button
						type='button'
						className=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
						Read more...
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
