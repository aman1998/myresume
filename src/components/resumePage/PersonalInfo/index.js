import React from 'react';
import styles from './styles.module.css'
import User from '../../aboutPage/icons/user/user'
import Education from '../../aboutPage/icons/education/school'
import Info from '../../aboutPage/icons/info/info'


function PersonalInfo () {
    return (
      <div>
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <User />
                <div>Личная информация</div>
            </div>
            <div className={styles.content}>
                <div><span>Гражданство: </span>Кыргызстан</div>
                <div><span>Образование: </span>Высшее неполное</div>
                <div><span>Дата рождения: </span>17.03.1998</div>
                <div><span>Пол: </span>Мужской</div>
                <div><span>Семейное положение: </span>Холост</div>
            </div>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Education />
                <div>Образование</div>
            </div>
            <div className={styles.content}>
                <div><span>БФЭТ (2014-2017): </span>Экономика и Бухглалтерский учет</div>
                <div><span>КНУ (2017-2022): </span>Экономика и Бухглалтерский учет (альтернативня форма обучения)</div>
            </div>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Education />
                <div>Курсы</div>
            </div>
            <div className={styles.content}>
                <div><span>IT-academy: </span>Frontend-разработка</div>
            </div>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Info />
                <div>Доп.информация</div>
            </div>
            <div className={styles.content}>
                <div><span>Занятие в свободное время: </span>Футбол, фильмы, введение новостных блогов, компьютерные игры</div>
                <div><span>Качества: </span>Трудолюбие, отсутствие вредных привычек, коммуникабельность, структурное
мышление, самоорганизованность, быстрая обучаемость.</div>
            </div>
        </div>
      </div>
    )
}

export default PersonalInfo