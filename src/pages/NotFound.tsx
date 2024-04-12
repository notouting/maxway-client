import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div>
			<h1>
				<b>404 error</b> not found
			</h1>
			<Link to='/home'>Back to Home</Link>
		</div>
	)
}

export default NotFound
