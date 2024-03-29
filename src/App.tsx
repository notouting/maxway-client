import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/' element={<Navigate to='/home' />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App

// <></> -> React.Fragment -> Fragment
