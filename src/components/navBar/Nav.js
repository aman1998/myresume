import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';
import Icon from './icon.js'

const navItems = [
    {title: 'About', link: '/'},
    {title: 'Resume', link: '/resume'},
    {title: 'Portfolio', link: '/portfolio'},
    // {title: 'Contacts', link: '/contacts'},
]

function NavBar () {
    const [showNav, setNav] = React.useState(false);
    
    return (
        // Шапка сайта
        <header className={styles.header}>
            <div className = {styles['header__container']}>
                <h1 className={styles.title}>Amangeldi</h1>
                <nav>
                    <ul className = {styles.list}>
                        {navItems.map((item, id) => (
                            <li key = {id} className = {styles.item}><NavLink exact to = {item.link} activeClassName={styles.active}>{item.title}</NavLink></li>
                        ))}
                    </ul>
                </nav>
                {showNav ? <div className = {`${styles.mobile} ${styles['mobile--active']}`}>
                    <ul>
                        {navItems.map((item, id) => (
                            <li key = {id} className = {styles.item}><NavLink to = {item.link} activeClassName={styles.active}>{item.title}</NavLink></li>
                        ))}
                    </ul>
                </div> : null}
                <div onClick = {() => setNav(!showNav)} className = {styles['icon__block']}>
                    <Icon />
                </div>
            </div>
        </header>
    )
}

export default NavBar