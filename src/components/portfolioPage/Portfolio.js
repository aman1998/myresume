import React from 'react';
import NavBar from '../navBar/Nav.js';
import styles from './portfolio.module.css';
import Btn from '../btn/Btn.js'

function Portfolio () {
    const portfolio = [
        {type: 'React', title: 'Проект 1', descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ducimus corporis facilis nulla in perspiciatis amet error iusto adipisci labore?', link: ''},
        {type: 'Vanilla', title: 'Проект 2', descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ducimus corporis facilis nulla in perspiciatis amet error iusto adipisci labore?', link: ''},
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
                                        <div style = {{display: 'flex'}}>
                                            <div className = {styles.icons}>
                                                <Btn link = {item.link} text = 'GitHub'/>
                                                <br />
                                                <Btn link = {item.link} text = 'Перейти'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className = {styles['projects__item-img']}></div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio