import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.css'

const navItems = [
    {title: 'About', link: '/'},
    {title: 'Resume', link: '/resume'},
    {title: 'Portfolio', link: '/portfolio'},
    {title: 'Contacts', link: '/contacts'},
]

function NavBar () {

    return (
        // Шапка сайта
        <header className={styles.header}>
                <div className = {styles['header__container']}>
                    <h1 className={styles.title}>Amangeldi</h1>
                    <nav>
                        <ul className = {styles.list}>
                            {navItems.map((item, id) => (
                                <li key = {id} className = {styles.item}><NavLink to = {item.link}>{item.title}</NavLink></li>
                            ))}
                        </ul>
                    </nav>
                </div>
        </header>
    )
}

export default NavBar