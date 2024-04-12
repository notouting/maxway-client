import { Container } from '@radix-ui/themes'
import { Link } from 'react-router-dom'
import UserAvatar from './Avatar'
import { LogoIcon } from './Icons'

const Header = () => {
	return (
		<header className='bg-gradient-to-r from-white from-60% to-purple to-40% py-[23px]'>
			<Container>
				<div className='flex items-center'>
					<div className='w-[60%] flex justify-between items-center'>
						<Link to='/'>
							<LogoIcon />
							<span className='sr-only'>MaxWay icon</span>
						</Link>

						<nav>
							<ul className='flex gap-10'>
								<li>
									<Link className='text-primary' to='/menyu'>
										Menyu
									</Link>
								</li>
								<li>
									<Link className='text-primary' to='/for-children'>
										Bolalar uchun
									</Link>
								</li>
								<li>
									<Link className='text-primary' to='/branchs'>
										Filiallar
									</Link>
								</li>
							</ul>
						</nav>
					</div>

					<div className='w-[40%] flex justify-between items-center pl-14'>
						<a
							className='flex items-center gap-4 text-white before:content-[url("./phone-icon.svg")]'
							href='tel:+998712005400'
						>
							<span>
								<span className='block text-sm'>(+99871)</span>
								<span className='block text-2xl font-bold'>200-54-00</span>
							</span>
						</a>

						<span className='w-[1px] h-11 bg-white'></span>

						<Link
							className='flex items-center gap-4 text-white before:content-[url("./cart-icon.svg")]'
							to='/cart'
						>
							<span>
								<span className='block text-2xl font-bold'>Korzina</span>
								<span className='block text-sm'>0.00 UZS</span>
							</span>
						</Link>

						<Link className='text-white' to='/login'>
							<UserAvatar />
						</Link>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
