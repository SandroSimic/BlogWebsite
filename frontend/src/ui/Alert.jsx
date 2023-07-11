import { useAuthContext } from "../context/authContext"

function Alert() {
  const { alertText, alertType } = useAuthContext()
  return <div className={`alert alert-${alertType}`}> {alertText}</div>
}
export default Alert
