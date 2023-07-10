/* eslint-disable react/prop-types */
import Input from '../../ui/Input'
import styles from './FormRow.module.css'
function FormRow({type, name, value, handleChange, labelText}) {
  return (
    <div className={styles.formRow}>
        <label htmlFor={name}>{labelText || name}</label>
        <Input type={type} value={value} name={name} onChange={handleChange} />
    </div>
  )
}
export default FormRow