import React from 'react';
import NavBar from '../navBar/Nav.js';
import Skills from './skills/Skills.js'
import styles from './about.module.css';
import Btn from '../btn/Btn.js';
import Code from './code.jpeg';
import MainContacts from './mainContacts/MainContacts.js';
import Phone from '../phone/Phone.js'

function About () {
    const [name] = React.useState('My name is Amangeldi');

    return (
        <div>
            <NavBar />
            {/* Основной контент */}
            <section className = {styles.about}>
                <div className = {`${styles['about__container']} container`}>
                    <div className = {styles.info}>
                        <h1 className = {styles.name}>{name}</h1>
                        <div className = {styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores impedit rerum, atque nihil ducimus provident dolorum aut! Similique dolore sunt placeat omnis cumque accusantium, vero rem. Soluta, porro ratione voluptas voluptate, modi natus, impedit quo ipsam facere excepturi aliquid.</div>
                        <MainContacts />
                        <Btn link = '' text = 'GitHub' className = 'btn--rotate'/>
                    </div>
                    <div className={styles.img}>
                        <img src={Code} alt="myPhoto"/>
                        {/* <div className = {styles.img}></div> */}
                    </div>
                </div>
            </section>
            <Skills />
            <Phone />
            <p style = {{textAlign: 'center', marginBottom: '8px'}}>1998-amangeldi@mail.ru</p>
        </div>
    )
}

export default About