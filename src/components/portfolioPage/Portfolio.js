import React from 'react';
import NavBar from '../navBar/Nav.js';
import styles from './portfolio.module.css';
import Btn from '../btn/Btn.js'

import salesImg from '../../assets/img1.png'
import arenaImg from '../../assets/arena.png'
import clinicImg from '../../assets/img4.png'
import resumeImg from '../../assets/resumecreator.png'
import ordersImg from '../../assets/orders.png'
import Phone from '../phone/Phone.js'

function Portfolio () {
    const portfolio = [
        {type: 'React', title: 'Arena-games', descr: 'Игровая платформа для зарабатывания денег на мобильных играх', link: 'https://github.com/aman1998/Pubg-Arena', deploy: 'https://arenagames.io/', img: arenaImg},
        {type: 'React', title: 'Resume-Creator', descr: 'Генератор резюме (без адаптива)', link: 'https://github.com/aman1998/Resume-Generator', deploy: 'https://murmuring-brushlands-47558.herokuapp.com/', img: resumeImg},
        {type: 'React', title: 'Clinic', descr: 'Сайт визитка для клиники', link: 'https://github.com/aman1998/Dr.Mateev-Clinic', deploy: 'https://mighty-retreat-02729.herokuapp.com/', img: clinicImg},
        {type: 'Node и Next JS', title: 'Clinic', descr: 'Небольшая практика с сортировкой, поиском и добавлением на Node и Next JS', link: 'https://github.com/aman1998/NodeJS-NextJS', deploy: 'https://still-beyond-60682.herokuapp.com/', img: ordersImg},
        {type: 'React', title: 'Prodam.kg', descr: 'Курсовая работа', link: 'https://github.com/aman1998/prodazha', deploy: 'https://aman1998.github.io/prodazha/', img: salesImg},
    ]
    return (
        <div>
            <NavBar />
            <section className = {styles.projects}>
                <div className="container">
                    <div className = {styles['my__projects']}>
                            {portfolio.map((item, id) => (
                                <div className = {styles["projects__item"]} key = {id}>
                                    <div className = {styles['projects__item-text']}>
                                        <h2 className = {styles['project__title']}>{`${item.title}`}</h2>
                                        <div className = {styles['project__description']}>{item.descr}</div>
                                        <div style = {{display: 'flex'}} className={styles.btn}>
                                            <div className = {styles.icons}>
                                                <Btn link = {item.link} text = 'GitHub'/>
                                                <br />
                                                <Btn link = {item.deploy} text = 'Перейти'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className = {styles[`projects__item-img`]}><img src={item.img} className={styles.img} /></div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
            <Phone />
            <header style = {{textAlign: 'center', marginBottom: '8px'}}>1998-amangeldi@mail.ru</header>
        </div>
    )
}

export default Portfolio