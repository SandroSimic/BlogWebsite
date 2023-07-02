import styles from './Input.module.css'

/* eslint-disable react/prop-types */
function Input({type, placeholder, name}) {
  return <input className={styles.input} type={type} placeholder={placeholder} name={name}/>;
}

export default Input;
