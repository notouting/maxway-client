import CartItem from './CartItem'

const CartList = () => {
	return (
		<div className='grid grid-cols-1 gap-6 rounded-2xl bg-gray-100 overflow-hidden border-gray-400'>
			<CartItem />
		</div>
	)
}

export default CartList
