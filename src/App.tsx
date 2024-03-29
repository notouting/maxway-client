import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { Branch, ForChildren, Home, Login, Menyu, NotFound } from './pages'

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/' element={<Navigate to='/home' />} />
				<Route path='*' element={<NotFound />} />
				<Route path='/menyu' element={<Menyu />} />
				<Route path='/for-children' element={<ForChildren />} />
				<Route path='/branchs' element={<Branch />} />
				<Route path='/login' element={<Login />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
