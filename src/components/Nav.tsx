import { Link } from 'react-router-dom';

export const Nav = () => {
	return (
		<header>
			<Link to='/'>Home</Link>
			<Link to='about'>About</Link>
		</header>
	);
};
