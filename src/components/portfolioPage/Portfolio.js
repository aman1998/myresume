import React from 'react';
import NavBar from '../navBar/Nav.js';
import styles from './portfolio.module.css';
import Btn from '../btn/Btn.js'
import portfolioImg1 from '../../assets/img1.png'
import portfolioImg2 from '../../assets/arena.png'
import portfolioImg3 from '../../assets/img3.png'
import portfolioImg4 from '../../assets/img4.png'
import Phone from '../phone/Phone.js'
function Portfolio () {
    const portfolio = [
        {type: 'React', title: 'Prodam.kg', descr: 'Курсовая работа', link: 'https://github.com/aman1998/prodazha', deploy: 'https://aman1998.github.io/prodazha/', img: portfolioImg1},
        {type: 'Node JS', title: 'Prodam.kg', descr: 'Backend для курсовой работы (Node JS + Express)', link: 'https://github.com/aman1998/my-project-api', deploy: 'https://github.com/aman1998/my-project-api', img: portfolioImg1},
        {type: 'React', title: 'Arena-games', descr: 'Разработка на продакшн. Написан на React/Redux/Thunk (в дуэте)', link: 'https://github.com/aman1998/Pubg-Arena', deploy: 'https://arenagames.io/', img: portfolioImg2},
        {type: 'CSS-GRID', title: 'Fanci', descr: 'Верстка', link: 'https://github.com/aman1998/IROKEZ', deploy: 'https://aman1998.github.io/IROKEZ/', img: portfolioImg3},
        {type: 'React', title: 'Clinic', descr: 'Сайт визитка для клиники', link: 'https://github.com/aman1998/Dr.Mateev-Clinic', deploy: 'https://github.com/aman1998/Dr.Mateev-Clinic', img: portfolioImg4},
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
                                        <h2 className = {styles['project__title']}>{`${item.title} / ${item.type}`}</h2>
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