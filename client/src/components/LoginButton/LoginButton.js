import { useAuth0 } from '@auth0/auth0-react'
import './LoginButton.css'

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  return (
    !isAuthenticated && (
      <div className="login-button--container">
        <h1 className="login-button--main-heading">Task Tracker</h1>
        <button
          className="login-button--btn"
          onClick={() => loginWithRedirect()}
        >
          Sign In
        </button>
      </div>
    )
  )
}
export default LoginButton
