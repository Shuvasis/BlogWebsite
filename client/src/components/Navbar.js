import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT } from '../store/types/UserTypes';
const Navbar = () => {
	const { user } = useSelector((state) => state.AuthReducer);
	const dispatch = useDispatch();
	const logout = () => {
		localStorage.removeItem('myToken');
		dispatch({ type: LOGOUT });
	};
	const Links = user ? (
		<div className='navbar__right'>
			<li>
				<Link to='/create'><button className='navbar__button' style={{background: 'green'}}>Create Post</button></Link>
			</li>
			<li>
				<Link to='/dashboard/1' ><button className='navbar__button' style={{background: 'violet'}}>{user.name}</button></Link>
			</li>
			<li>
				<button onClick={logout} className='navbar__button' style={{background: 'red'}}>Logout</button>
			</li>
		</div>
	) : (
		<div className='navbar__right'>
			<li>
				<Link to='/login'>Login</Link>
			</li>
			<li>
				<Link to='/register'>Register</Link>
			</li>
		</div>
	);
	return (
		<nav className='navbar'>
			<div className='container'>
				<div className='navbar__row'>
					<div className='navbar__left'>
						<Link to='/'>
							<img src='/images/home_logo.jpg' alt='Home Logo' />
						</Link>
					</div>
					{Links}
				</div>
			</div>
		</nav>
	);
};
export default Navbar;