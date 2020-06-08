import React from 'react';
import styles from './skills.module.css';
import Modal from '../modal/Modal.js'

function Skills () {
    const [showModal, setModal] = React.useState(false);

    const handleShowModal = () => {
        setModal(true)
    }

    const handleCloseModal = () => {
        setModal(false)
    }
    
    return (
        <section className={styles.skills}>
            <div className = 'container'>
                <h2 className={styles.title}>Мои навыки</h2>
                <div className={styles['skills__container']}>
                    <div className={`${styles.block} ${styles.html}`}></div>
                    <div className={`${styles.block} ${styles.css}`}>
                        <div onClick = {handleShowModal} className = {styles.btn}><div>Подробнее</div></div>
                    </div>
                    <div className={`${styles.block} ${styles.javascript}`}></div>
                    <div className={`${styles.block} ${styles.react}`}></div>
                </div>
                {showModal ? 
                    <Modal closeModal = {handleCloseModal}/>
                    : ''    
                }
            </div>
        </section>
    )
}

export default Skills
