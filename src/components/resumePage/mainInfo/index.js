import React from 'react';
import styles from './styles.module.css'


function MainInfo () {
    return (
    <div className={styles.wrapper}>
        {/* <div className={styles.avatar}></div> */}
        <div>
            <div className={styles.name}>Мырзабеков Амангельди Медетебекович</div>
            <div className={styles.job}><span>Frontend</span>-разработчик</div>
            <div className={styles.mail}>1998-amangeldi@mail.ru</div>
        </div>
    </div>
    )
}

export default MainInfo