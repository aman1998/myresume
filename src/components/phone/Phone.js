import React from 'react';
import styles from './phone.module.css';
import phoneImg from './phone-icon-935.png';

let Phone = () => {
    return (
        <a href="tel:+(996) 555 82 28 37">
            <div className = {styles['phone__block']}>
                <div className = {styles.phone}>
                    <div className = {styles['phone__phone']}>
                        <img src = {phoneImg} alt = 'phone' />
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Phone