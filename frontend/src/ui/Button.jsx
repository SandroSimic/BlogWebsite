/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import styles from './Button.module.css'
/* eslint-disable react/prop-types */
function Button({onClick, type, to, children, style}) {
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

        

    if(to) {
        return <Link to={to} className={styleType}>{children}</Link>
    }

  return <button onClick={onClick} className={styleType}>{children}</button>;
}

export default Button;
