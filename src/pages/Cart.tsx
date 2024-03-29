import CartList from '../components/CartList'

const Cart = () => {
	return (
		<section className='py-24 relative'>
			<div className='w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto'>
				<div className='flex items-start flex-col gap-6 xl:flex-row '>
					<div className='w-full max-w-sm md:max-w-3xl max-xl:mx-auto'>
						<CartList />
					</div>
					<div className='w-full max-w-sm md:max-w-3xl xl:max-w-sm flex items-start flex-col gap-8 max-xl:mx-auto'>
						<div className='p-6 border border-gray-200 rounded-3xl w-full group transition-all duration-500 hover:border-gray-400 '>
							<h2 className='font-manrope font-bold text-3xl leading-10 text-black pb-6 border-b border-gray-200 '>
								Order Summary
							</h2>
							<div className='data py-6 border-b border-gray-200'>
								<div className='flex items-center justify-between gap-4 mb-5'>
									<p className='font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700'>
										Product Cost
									</p>
									<p className='font-medium text-lg leading-8 text-gray-900'>
										$360.00
									</p>
								</div>
								<div className='flex items-center justify-between gap-4 mb-5'>
									<p className='font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700'>
										Shipping
									</p>
									<p className='font-medium text-lg leading-8 text-gray-600'>
										$40.00
									</p>
								</div>
								<div className='flex items-center justify-between gap-4 '>
									<p className='font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700 '>
										Coupon Code
									</p>
									<p className='font-medium text-lg leading-8 text-emerald-500'>
										#APPLIED
									</p>
								</div>
							</div>
							<div className='total flex items-center justify-between pt-6'>
								<p className='font-normal text-xl leading-8 text-black '>
									Subtotal
								</p>
								<h5 className='font-manrope font-bold text-2xl leading-9 text-indigo-600'>
									$400.00
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Cart
