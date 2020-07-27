import React from 'react';
import NavBar from '../navBar/Nav.js';
import Skills from './skills/Skills.js'
import styles from './about.module.css';
import Btn from '../btn/Btn.js';
import Code from './code.jpeg';
import MainContacts from './mainContacts/MainContacts.js';
import Phone from '../phone/Phone.js'

function About () {
    const [name] = React.useState('Frontend-разработчик');

    return (
        <div>
            <NavBar />
            <section className = {styles.about}>
                <div className = {`${styles['about__container']} container`}>
                    <div className = {styles.info}>
                        <h1 className = {styles.name}>{name}</h1>
                        <MainContacts />
                        <Btn link = 'https://github.com/aman1998' text = 'GitHub' className = 'btn--rotate'/>
                    </div>
                    <div className={styles.img}>
                        <img src={Code} alt="myPhoto"/>
                    </div>
                </div>
            </section>
            <Skills />
            <Phone />
            <header style = {{textAlign: 'center', marginBottom: '8px'}}>1998-amangeldi@mail.ru</header>
        </div>
    )
}

export default About