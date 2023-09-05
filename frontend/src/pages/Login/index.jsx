import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { useState, useEffect} from "react";


import {useDispatch, useSelector} from "react-redux";

import * as loginActions from '../../slices/loginSlice';

import { userLogin } from '../../utils/userLogin'
import { useNavigate } from 'react-router-dom'




function Login() {

    const error = useSelector((state) => state.login.error)
    console.log(error)

    const isUserAuthenticated = useSelector((state) => state.login.token)

    const [credientials, setCredientials] = useState({
        email: '',
        password: '',
    })


    const dispatch = useDispatch();
    let navigate = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault()
        try {
          const loginResult = await userLogin(credientials)
          dispatch(loginActions.success(loginResult))
        } catch (error) {
          console.log(error)
          dispatch(loginActions.fail(error.response.data.message))
        }
      }

      function handleChange({ currentTarget }) {
        const { value, name } = currentTarget
        setCredientials({
          ...credientials,
          [name]: value,
        })
      }

      useEffect(() => {
        if (isUserAuthenticated) {
          navigate('/profile')
        }
        if (error) {
            dispatch(loginActions.clearError())
        }
      }, [isUserAuthenticated, navigate])


    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon className="fa fa-user-circle " icon={faUserCircle} />
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
						<input type="text" id="username" name="email" onChange={handleChange} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={handleChange} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button type="submit" className="sign-in-button">
                        Sign In
                    </button>
                    {error && <div className="input-error">{error}</div>}
                </form>
            </section>
        </main>
    );
}

export default Login;