import React from 'react';

export default function Navbar({ fixed }) {
	return (
		<>
			<nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-sky-500  sticky top-0'>
				<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
					<div className='w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start'>
						<div className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white text-[16px] hover:cursor-pointer'>
							EQUILIBRIUM(logo)
						</div>
						<button
							className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
							type='button'>
							<span className='block relative w-6 h-px rounded-sm bg-white'></span>
							<span className='block relative w-6 h-px rounded-sm bg-white mt-1'></span>
							<span className='block relative w-6 h-px rounded-sm bg-white mt-1'></span>
						</button>
					</div>
					<div className='lg:flex flex-grow items-center'>
						<ul className='flex flex-col lg:flex-row list-none ml-auto'>
							<li className='nav-item '>
								<div className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:cursor-pointer'>
									<span className='ml-2 text-[16px]'>
										Home
									</span>
								</div>
							</li>
							<li className='nav-item'>
								<div className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:cursor-pointer'>
									<span className='ml-2 text-[16px]'>
										About
									</span>
								</div>
							</li>
							<li className='nav-item'>
								<div className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:cursor-pointer'>
									<span className='ml-2 text-[16px]'>
										Clubs
									</span>
								</div>
							</li>
							<li className='nav-item'>
								<div className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:cursor-pointer'>
									<span className='ml-2 text-[16px]'>
										Membership
									</span>
								</div>
							</li>
							<li className='nav-item'>
								<div className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:cursor-pointer'>
									<span className='ml-2 text-[16px]'>
										Contact
									</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
