import { useState } from 'react'
import Login from '../../components/Login'
import SignUpForm from '../../components/SignUpForm'

const Auhenticate = () => {
	const [isLoggedIn, setLoggedIn] = useState(true)

	if (isLoggedIn) {
		return <Login />
	}

	return <SignUpForm onLoggedIn={() => setLoggedIn(!isLoggedIn)} />
}

export default Auhenticate
