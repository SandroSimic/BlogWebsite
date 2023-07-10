import FormRow from "../components/Form/FormRow"
import Button from "../ui/Button"
import styles from './Register.module.css'

function Register() {
  return <div className={styles.registerWrapper}>
    <form className={styles.registerForm}>
        <h3>Register</h3>
        <FormRow type='text' name='name' />
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        <Button type='primary'>Login</Button>
        <p className={styles.text}>Have an account? <Button defaultButton={true} className={styles.registerButton}>Login!</Button></p>
    </form>
  </div>
}
export default Register
