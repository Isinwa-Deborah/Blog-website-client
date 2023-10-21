import { Link } from "react-router-dom";

export default function Post() {
	return (
		<>
			<header>
				<Link to="/" className="logo">
					DebbieCrest Blog
				</Link>

				<nav>
					<Link to="/login">Login</Link>
					<Link to="/register">Register</Link>
				</nav>
			</header>
		</>
	);
}
