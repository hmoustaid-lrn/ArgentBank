import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/argentBankLogo.png";

import {useSelector, useDispatch} from "react-redux";

import * as loginActions from '../../slices/loginSlice';
import * as profileActions from '../../slices/profileSlice';

function Header() {

    const userFirstName = useSelector((state) => state.profile.firstName)
    const isUserAuthenticated = useSelector((state) => state.login.token)

    const dispatch = useDispatch();

    const signOut = () => {
		dispatch(loginActions.out());
        dispatch(profileActions.logOut());
	};

    const signIn = () => {
        dispatch(loginActions.clearError())
	};


    return (
		<nav className="main-nav">
			<Link className="main-nav-logo" to="/">
				<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<div>
				{!isUserAuthenticated && (
					<NavLink onClick={signIn} className="main-nav-item" to="/login">
						<i className="fa fa-user-circle"></i>
						Sign In
					</NavLink>
				)}

				{isUserAuthenticated && (
					<NavLink className="main-nav-item" to="/profile">
						<i className="fa fa-user-circle"></i>
						{userFirstName}
					</NavLink>
				)}
				{isUserAuthenticated && (
					<NavLink onClick={signOut} className="main-nav-item" to="/">
						<i className="fa fa-sign-out"></i>
						Sign Out
					</NavLink>
				)}
			</div>
		</nav>
	);
}

export default Header;