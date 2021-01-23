import React from 'react';
import styles from './skills.module.css';

function Skills () {
    return (
        <section className={styles.skills}>
            <div className = 'container'>
                <h2 className={styles.title}>Мои навыки</h2>
                <div className={styles['skills__container']}>
                    <div className={`${styles.block} ${styles.html}`}></div>
                    <div className={`${styles.block} ${styles.css}`}></div>
                    <div className={`${styles.block} ${styles.javascript}`}></div>
                    <div className={`${styles.block} ${styles.react}`}></div>
                </div>
            </div>
        </section>
    )
}

export default Skills
