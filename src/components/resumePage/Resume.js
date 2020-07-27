import React from 'react';
import NavBar from '../navBar/Nav.js'
import styles from './resume.module.css'
import MainInfo from './mainInfo'
import PersonalInfo from './PersonalInfo'
import Phone from '../phone/Phone'

function Resume () {
    return (
        <div>
            <NavBar />
            <section>
                <div className = 'container' >
                    <div className={styles.resume}>
                        <div className={styles.resumeInfo}>
                            <MainInfo />
                            <PersonalInfo />
                        </div>
                    </div>
                </div>
            </section>
            <Phone />
        </div>
    )
}

export default Resume