import React from 'react';
import styles from './btn.module.css'

function Btn (props) {
    const {link, text, className} = props;
    return(
        <a href = {link} style = {{display:'block'}} className={`${styles.btn} ${styles[className]}`} target='_blank' rel="noreferrer"><span>{text}</span></a>
    )
}

export default Btn