import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { useState } from 'react'
import { auth, db } from '../firebase'


function Auth() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()


    return (

      <div>
        <form className="signup" onSubmit={handleSubmit}>
          <label htmlFor="email">email:</label>
          <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">password:</label>
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button >Signup</button>
        </form>
      </div>
    )
  }

  export default Auth 