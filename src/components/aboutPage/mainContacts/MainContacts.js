import React from 'react';
import styles from './mainContacts.module.css';
import Instagram from '../icons/instagram/Instagram'
import Linkedin from '../icons/linkedin/Linkedin'
import Telegram from '../icons/telegram/Telegram'
import Vkontakte from '../icons/vkontakte/Vkontakte'

function MainContacts () {
        const [infoTitle] = React.useState([
        {title: 'ФИО', className: styles.phone},
        {title: 'Дата рождения', className: styles.phone},
        {title: 'Телефон', className: styles.phone},
        {title: 'Почта', className: "myEmail__title"},
        {title: 'Адрес', className: "myAdress__title"},
    ]);
    
    const [infoText] = React.useState([
        {title: 'Мырзабеков Амангельди Медетбекович', className: styles['contacts__item']},
        {title: '17.03.1998', className: styles['contacts__item']},
        {title: '+996 555 82 28 37', className: styles['contacts__item']},
        {title: 'amangeldi-1998@mail.ru', className: styles['contacts__item']},
        {title: 'г. Бишкек, Сыдыкова 161', className: styles['contacts__item']},
    ]);

    return (
        <div>
            <div className={styles.contacts}>
                <div className={styles['contacts__title']}>
                    {infoTitle.map((item, id) => (
                        <div key = {id} className = {item.className}>{item.title}</div>
                    ))}
                    <div>Соц сети</div>
                </div>
                <div className={"contacts__info"}>
                    {infoText.map((item, id) => (
                        <div key = {id} className = {item.className}>{item.title}</div>
                    ))}
                    <div className = {styles.icons}>
                        {/* <Instagram />
                        <Linkedin/> */}
                        <Telegram/>
                        <Vkontakte/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContacts;