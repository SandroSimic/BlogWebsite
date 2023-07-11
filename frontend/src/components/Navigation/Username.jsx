import { useEffect, useState } from "react"
import { useAuthContext } from "../../context/authContext"
import Options from "./Options"
import styles from "./Username.module.css"
import { AiFillCaretDown } from "react-icons/ai"
import Button from "../../ui/Button"

function Username() {
  const { user } = useAuthContext()
  const [showOptions, setShowOptions] = useState(false)


  const openOptions = () => {
    setShowOptions(!showOptions)

  }
  useEffect(() => {
    if(!user) {
      setShowOptions(false)
    }
  },[user])


  return (
    <>
    <h1 className={styles.username} onClick={openOptions}>
      { user && user?.username}
      {
      user?.username &&
      <span>
        <AiFillCaretDown />
      </span>
      }

      {!user && <Button to='/register' >Login</Button>}
    </h1>
    {showOptions && <Options />}
    </>
  )
}

export default Username
