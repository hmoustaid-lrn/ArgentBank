import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/argentBankLogo.png";

import {useSelector, useDispatch} from "react-redux";

import * as loginActions from '../../slices/loginSlice';
import * as profileActions from '../../slices/profileSlice';

function Header() {

    const userFirstName = useSelector((state) => state.profile.firstName)
    const userAutheticated = useSelector((state) => state.login.authenticated)

    const dispatch = useDispatch();

    const signOut = () => {
		dispatch(loginActions.out());
        dispatch(profileActions.logOut());
	};

    return (
		<nav className="main-nav">
			<Link className="main-nav-logo" to="/">
				<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<div>
				{!userAutheticated && (
					<NavLink className="main-nav-item" to="/login">
						<i className="fa fa-user-circle"></i>
						Sign In
					</NavLink>
				)}

				{userAutheticated && (
					<NavLink className="main-nav-item" to="/profile">
						<i className="fa fa-user-circle"></i>
						{!userFirstName && "Profile"}
						{userFirstName && userFirstName}
					</NavLink>
				)}
				{userAutheticated && (
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