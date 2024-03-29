import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@radix-ui/themes'
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import apiClient from '../service/api-client'

const Form = z.object({
	email: z
		.string()
		.email({ message: 'Elektron pochta kiritishingiz shart.' })
		.min(10),
	password: z
		.string()
		.min(8, { message: "Parolingiz 8 ta harfdan kam bo'lmasligi shart." }),
})

type Form = z.infer<typeof Form>

const Login = () => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm<Form>({ resolver: zodResolver(Form) })

	const onSubmit = (data: FieldValues) => {
		apiClient
			.post('/users/login/', data, {
				headers: {
					Authorization: localStorage.getItem('app-maxway-token'),
				},
			})
			.then(res => {
				if (res.data.access) {
					localStorage.setItem('app-maxway-token', 'Bearer ' + res.data.access)
				}
			})
			.catch(err => console.error(err.message))
	}
	return (
		<form
			onSubmit={handleSubmit(data => {
				onSubmit(data)
				reset()
			})}>
			<div className='w-1/4 mb-3 flex flex-col'>
				<label htmlFor='email'>Email:</label>
				<input
					className='border rounded-md'
					type='email'
					{...register('email')}
					name='email'
					id='email'
				/>
				{errors.email && (
					<p className='text-red-500'>{errors.email?.message}</p>
				)}
			</div>
			<div className='w-1/4 mb-3 flex flex-col'>
				<label htmlFor='password'>Password:</label>
				<input
					className='border rounded-md'
					type='password'
					{...register('password')}
					name='password'
					id='password'
				/>
				{errors.password && (
					<p className='text-red-500'>{errors.password?.message}</p>
				)}
			</div>

			<Button className='w-1/4'>Login</Button>
		</form>
	)
}

export default Login
