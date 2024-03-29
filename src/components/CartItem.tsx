const CartItem = () => {
	return (
		<div className='p-6 border rounded-2xl border-gray-100 flex flex-col md:flex-row md:items-center gap-5 transition-all duration-500 hover:border-gray-400'>
			<div className='img-box '>
				<img
					src='https://pagedone.io/asset/uploads/1701167635.png'
					alt='Denim Jacket image'
					className='w-full md:max-w-[122px]'
				/>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 w-full gap-3 md:gap-8'>
				<div className=''>
					<h2 className='font-medium text-xl leading-8 text-black mb-3'>
						Dark Denim Jacket
					</h2>
					<p className='font-normal text-lg leading-8 text-gray-500 '>
						By: Dust Studios
					</p>
				</div>
				<div className='flex items-center justify-between gap-8'>
					<h6 className='font-medium text-xl leading-8 text-indigo-600'>
						$120.00
					</h6>
				</div>
			</div>
		</div>
	)
}

export default CartItem
