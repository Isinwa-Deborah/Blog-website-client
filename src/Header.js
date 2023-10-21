import { useContext, useEffect } from "react";
import { UserContext } from './UserContext';
import { Link } from "react-router-dom";

export default function Header() {
	// const [username, setUsername] = useState(null);
	const { setUserInfo, userInfo } = useContext(UserContext);
	useEffect(() => {
		fetch('http://localhost:4000/profile', {
			credentials: 'include',
		}).then(response => {
			response.json().then(userInfo => {
				// setUsername(userInfo.username);
				setUserInfo(userInfo);
			});
		});
	}, []);

	function logout() {
		fetch('http://localhost:4000/logout', {
			credentials: 'include',
			method: 'POST',
		});
		setUserInfo(null);
	}

	const username = userInfo?.username;
	return (
		<>
			<header>
				<Link to="/" className="logo">
					DebbieCrest Blog
				</Link>

				<nav>
					{username && (
						<>
							<Link to='/create'>Create New Post</Link>
							<a href="/" onClick={logout}>Logout</a>
						</>
					)}

					{username && (
						<>
							<Link to="/login">Login</Link>
							<Link to="/register">Register</Link>
						</>
					)}

					<Link to="/login">Login</Link>
					<Link to="/register">Register</Link>

				</nav>
			</header>
		</>
	);
}
