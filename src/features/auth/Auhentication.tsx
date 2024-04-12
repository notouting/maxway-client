import * as Tabs from '@radix-ui/react-tabs'
import LoginForm from '../../components/LoginForm'
import SignUpForm from '../../components/SignUpForm'

const Authentication = () => (
	<Tabs.Root
		className='flex flex-col mx-auto my-20 w-[300px] shadow-[0_2px_10px] shadow-blackA2'
		defaultValue='tab1'
	>
		<Tabs.List
			className='shrink-0 flex border-b border-mauve6'
			aria-label='Manage your account'
		>
			<Tabs.Trigger
				className='bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none cursor-default'
				value='tab1'
			>
				Login
			</Tabs.Trigger>
			<Tabs.Trigger
				className='bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none cursor-default'
				value='tab2'
			>
				Sign Up
			</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content
			className='grow p-5 bg-white rounded-b-md outline-none'
			value='tab1'
		>
			<LoginForm />
		</Tabs.Content>
		<Tabs.Content
			className='grow p-5 bg-white rounded-b-md outline-none'
			value='tab2'
		>
			<SignUpForm />
		</Tabs.Content>
	</Tabs.Root>
)

export default Authentication
