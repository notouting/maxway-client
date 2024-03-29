import { Button } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'

const LoginForm = () => {
	const { handleSubmit, register } = useForm()

	return (
		<form onSubmit={handleSubmit(data => console.log(data))}>
			<div className='relative flex-grow w-full'>
				<label htmlFor='email' className='leading-7 text-sm text-gray-600'>
					Email
				</label>
				<input
					className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
					type='email'
					{...register('email')}
					name='email'
					id='email'
				/>
			</div>
			<div className='relative flex-grow w-full mb-3'>
				<label htmlFor='password' className='leading-7 text-sm text-gray-600'>
					Password
				</label>
				<input
					className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
					type='password'
					{...register('password')}
					name='password'
					id='password'
				/>
			</div>

			<Button className='w-full text-white bg-indigo-500 border-0 py-4 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
				Login
			</Button>
		</form>
	)
}

export default LoginForm
