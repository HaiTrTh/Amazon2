
// import { Link, useHistory } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import React, { useState } from 'react';
import {
  // getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  // signOut
} from 'firebase/auth'
import { auth } from '../../firebase'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSignUp = (e) => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log('user created:', cred.user)
        setEmail('')
        setPassword('')
      })
      .catch((e) => alert(e.message))
  }

  const handleSignIn = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log('user login:', cred.user)
        if (auth) {
          navigate('/')
        }
      })
      .catch((e) => alert(e.message))
  }

  return (
    <div >
      <Link to="/">
        <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"></img>
      </Link >
      <div className="login">
        <form className="login__form" onSubmit={handleSignIn}>
          <h2 className="login__title">Sign-In</h2>
          <div className="login__wrap">
            <p>Email or mobiaasdle phone number</p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login__wrap">
            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
          </div>
          <button className="login__btn">Continue</button>
        </form>
        <div className="login__subtitle">
          <span>By continuing, you agree to Amazon's </span>
          <Link to="/"> Conditions of Use</Link> and
          <Link to="/"> Privacy Notice.</Link>
        </div>
      </div>
      <div className="login__create">
        <button onClick={handleSignUp} className="login__create-btn">Create your amazon account</button>
      </div>

    </div>
  )
}

export default Login