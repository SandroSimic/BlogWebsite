import styles from "./Input.module.css"
import {HiPlus} from 'react-icons/hi'

/* eslint-disable react/prop-types */
function Input({ type, placeholder, name, className }) {
  if (type === "file") {
    return (
      <>
        <input type="file" id="file" className={styles.imageUpload} />
        <label htmlFor="file" className={styles.fileText}>
          <HiPlus />
        </label>
      </>
    )
  }

  return (
    <input
      className={className || styles.input}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  )
}

export default Input
