import {useDispatch, useSelector} from "react-redux";

import * as profileActions from '../../slices/profileSlice';

import { userInfos } from '../../utils/userInfos'

import AccountCard from "../../components/AccountCard";



function Profile() {

  const dispatch = useDispatch()

    userInfos()
    .then((data) => {
      dispatch(profileActions.firstName(data.body.firstName))
      dispatch(profileActions.lastName(data.body.lastName))
    })
    .catch((error) => dispatch(profileActions.error(error.response.data.message)))

    const userFirstName = useSelector((state) => state.profile.firstName)
    const userLastName = useSelector((state) => state.profile.lastName)

	return (
		<main className="main bg-dark">
			<div className="header">
				<h1>
					Welcome back
					<br />
					{userFirstName && userFirstName} {userLastName && userLastName}!
				</h1>
			</div>
            <h2 className="sr-only">Accounts</h2>
			<AccountCard />
		</main>
	);
}

export default Profile;