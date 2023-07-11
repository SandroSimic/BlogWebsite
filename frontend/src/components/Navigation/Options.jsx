import styles from './Options.module.css'
import {BiSolidUser, BiLogOut} from 'react-icons/bi'
import Button from './../../ui/Button'
import { useAuthContext } from '../../context/authContext'
function Options() {
    const { logoutUser } = useAuthContext()


  return (
    <div className={styles.options}>
    <div className={styles.btnWrapper}>
        <Button className={styles.optionButton}>
            <BiSolidUser /> <span>Profile</span>
        </Button>
        <Button type='button' className={styles.optionButton} onClick={() => logoutUser()}>
            <BiLogOut /> <span>Logout</span>
        </Button>
    </div>
    </div>
  )
}
export default Options