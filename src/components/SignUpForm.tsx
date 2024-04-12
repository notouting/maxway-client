import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const Form = z.object({
	username: z
		.string()
		.min(3, { message: "Username 3 ta harfdan kam bo'lmasligi shart." })
		.max(255),
	email: z
		.string()
		.email({ message: 'Elektron pochta kiritishingiz shart.' })
		.min(10),
	password: z
		.string()
		.min(8, { message: "Parolingiz 8 ta harfdan kam bo'lmasligi shart." }),
	confirm_password: z
		.string()
		.min(8, { message: "Parolingiz 8 ta harfdan kam bo'lmasligi shart." }),
})

type Form = z.infer<typeof Form>

const SignUpForm = () => {
	const { register } = useForm<Form>({ resolver: zodResolver(Form) })

	return (
		<form>
			<div className='relative flex-grow w-full mb-3'>
				<label htmlFor='username' className='leading-7 text-sm text-gray-600'>
					Username
				</label>
				<input
					className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
					type='text'
					{...register('username')}
					name='username'
					id='username'
				/>
			</div>
			<div className='relative flex-grow w-full mb-3'>
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
			<div className='relative flex-grow w-full mb-3'>
				<label
					htmlFor='confirm_password'
					className='leading-7 text-sm text-gray-600'
				>
					Confirm Password
				</label>
				<input
					className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
					type='password'
					{...register('confirm_password')}
					name='confirm_password'
					id='confirm_password'
				/>
			</div>

			<Button className='w-full text-white bg-indigo-500 border-0 py-4 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
				Sign Up
			</Button>
		</form>
	)
}

export default SignUpForm
