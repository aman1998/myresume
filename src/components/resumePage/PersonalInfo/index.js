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
                <div>Курсы</div>
            </div>
            <div className={styles.content}>
                <div><span>IT-academy: </span>Frontend-разработка</div>
            </div>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Education />
                <div>Навыки</div>
            </div>
            <div className={styles.content}>
                <div>Grid, Flexbox, BEM, SCSS</div>
                <div>Javascript, React, React-Redux, Redux-Thunk, Compose</div>
                <div>Node JS(express), React-native(expo), Docker</div>
            </div>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Info />
                <div>Опыт работы</div>
            </div>
            <div className={styles.content}>
                <div><span>Mirsoft - frontend developer </span>2020-2021</div>
            </div>
        </div>
      </div>
    )
}

export default PersonalInfo