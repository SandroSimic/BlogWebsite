import { useNavigate } from "react-router-dom"
import FormRow from "../components/Form/FormRow"
import Button from "../ui/Button"
import styles from "./Register.module.css"
import { useEffect, useState } from "react"
import { useAuthContext } from "../context/authContext"
import Alert from "../ui/Alert"
const initialState = {
  username: "",
  email: "",
  password: "",
  isMember: true,
}

function Register() {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState)
  const { user, isLoading, showAlert, displayAlert, setupUser } =
    useAuthContext()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { username, email, password, isMember } = values
  
    if (!email || !password || (!isMember && !username)) {
      displayAlert()
      return
    }
    const currentUser = { username, email, password }
    
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login Successful! redirecting...",
      })
    } else {
      setupUser({
        currentUser,
        endPoint: "signup",
        alertText: "User created! redirecting...",
      })
    }
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/")
      }, 3000)
    }
  }, [user, navigate])

  return (
    <div className={styles.registerWrapper}>
      <form className={styles.registerForm} onSubmit={onSubmit}>
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="username"
            value={values.username}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <Button type="primary" submit={true} disabled={isLoading}>{values.isMember ? "Login" : "Register"}</Button>

        <p className={styles.text}>
        {values.isMember ? "Not a member yet? " : "Already a member? "}
          <Button defaultButton={true} onClick={toggleMember} className={styles.registerButton}>
            {values.isMember ? "Register" : "Login"}
          </Button>
        </p>
      </form>
    </div>
  )
}
export default Register
