import { useState } from "react";

import * as profileActions from '../../slices/profileSlice';

import { useDispatch, useSelector} from 'react-redux'

import { userUpdateInfos } from '../../utils/userUpdateInfos'

import './index.css';

function EditName() {

    const { firstName, lastName } = useSelector((state) => state.profile)


    const [showEditNameForm, setShowEditNameForm] = useState(false);

    const [fullName, setFullName] = useState({
        firstName: '',
        lastName: '',
      })

    const toggleEditNameForm = () => {
		showEditNameForm ? setShowEditNameForm(false) : setShowEditNameForm(true);
	};

    const dispatch = useDispatch()

    async function handleSubmit(e) {
        e.preventDefault()
        dispatch(profileActions.loading())
        try {
          const newName = await userUpdateInfos(fullName)
          dispatch(profileActions.firstName(newName.body.firstName))
          dispatch(profileActions.lastName(newName.body.lastName))
          toggleEditNameForm()
        } catch (error) {
          dispatch(profileActions.error(error.response.data.message))
        }
      }

      function handelChange({ currentTarget }) {
        const { value, name } = currentTarget
        setFullName({
          ...fullName,
          [name]: value,
        })
      }


    return (
		<div>
			{!showEditNameForm && (
				<button className="edit-button" onClick={toggleEditNameForm}>
					Edit Name
				</button>
			)}
			{showEditNameForm && (
				<form className="new-name-form" onSubmit={handleSubmit}>
					<div className="input-group">
						<div className="input-wrapper">
							<label className="hidden" htmlFor="firstName">
								First Name
							</label>
							<input type="text" name="firstName" placeholder={firstName} onChange={handelChange} required/>
						</div>
						<div className="input-wrapper">
							<label className="hidden" htmlFor="lastName">
								Last Name
							</label>
							<input type="text" name="lastName" placeholder={lastName} onChange={handelChange} required />
						</div>
					</div>
					<div className="input-group input-center">
						<button type="submit" className="edit-button">
							Save
						</button>
						<button className="edit-button" onClick={toggleEditNameForm}>
							Cancel
						</button>
					</div>
				</form>
			)}
		</div>
	);

}

export default EditName;