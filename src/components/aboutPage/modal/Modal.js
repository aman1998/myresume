import React from 'react';
import styles from './modal.module.css';
import close from '../skills/img/close-3.png';

let Modal = (props) => {
    const {closeModal} = props;
    return (
        <div className={styles.modal}>
            <img src={close} alt="close" className = {styles.close} onClick = {closeModal}/>
            <div className={`${styles['skills__modal']} `}>
                <div className = {`${styles.animation} ${styles['animation--1']}`}></div>
                <div className = {`${styles.animation} ${styles['animation--2']}`}></div>
                <div className = {`${styles.animation} ${styles['animation--3']}`}></div>
                <div className = {`${styles.animation} ${styles['animation--4']}`}></div>
                <div className = {`${styles.animation} ${styles['animation--5']}`}></div>
            </div>
        </div>
    )
}

export default Modal