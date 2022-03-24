import React from 'react';

const Footer = () => {
	return (
		<div className='flex bg-gray-800 text-white pt-10'>
			<div className='basis-1/3'>
				<div className='text-3xl font-bold '>About us</div>
				<p className='px-10 py-5 text-left'>
					MITAOE is aimed to create and maintain a safe, healthy, and
					conducive environment and culture that synthesizes the
					intellectual, technical, physical, social, emotional, and
					ethical development of students in a holistic way.
				</p>
			</div>
			<div className='basis-1/3'>
				<div className='text-3xl font-bold '>Our Mission</div>
				<p className='px-10 py-5 text-left'>
					"Young and innovative talent will share and demonstrate
					their expertise"
				</p>
			</div>
			<div className='basis-1/3'>
				<div className='text-3xl font-bold'>Explore</div>
				<ul className='flex flex-col  mb-6 text-lg text-gray-500 sm:mb-0 dark:text-gray-400 justify-center px-10 py-5 text-left'>
					<li>
						<a href='#' className=' hover:underline md:mr-6 '>
							<svg
								class='w-6 h-6 text-sky-600 inline '
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'></path>
							</svg>
							About
						</a>
					</li>
					<li>
						<a href='#' className=' hover:underline md:mr-6 '>
							<svg
								class='w-6 h-6 text-sky-600 inline '
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'></path>
							</svg>
							Events
						</a>
					</li>
					<li>
						<a href='#' className=' hover:underline md:mr-6 '>
							<svg
								class='w-6 h-6 text-sky-600 inline '
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'></path>
							</svg>
							News
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
