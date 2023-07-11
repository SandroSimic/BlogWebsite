/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import styles from './Button.module.css'
/* eslint-disable react/prop-types */
function Button({onClick, type, to, children, style, defaultButton, className, disabled, submit}) {
    let styleType;
    
        if(type === 'primary'){
            styleType = `${styles.primary} ${style}`
        }
    
        if(type === 'new'){
            styleType =  `${styles.new} ${style}`
        }
    
        if(type === 'danger'){
            styleType = `${styles.danger} ${style}`
        }

    if (defaultButton) {
        return <button type="button" className={styleType || className} onClick={onClick} disabled={disabled}>{children}</button>
    }

    if(submit) {
        return <button onClick={onClick} type='submit' className={styleType} disabled={disabled}>{children}</button>
    }

    if(to) {
        return <Link to={to} className={styleType}>{children}</Link>
    }

  return <button onClick={onClick} className={styleType} disabled={disabled}>{children}</button>;
}

export default Button;
