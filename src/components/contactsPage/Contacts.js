import React from 'react';
import NavBar from '../navBar/Nav.js';
import styles from './contacts.module.css';
import ContactItem from './contactItem/ContactItem.js'

function Contacts () {
    // const initialState = {
    //     contacts: [],
    //     name: '',
    //     phone: '',
    //     count: 0
    // };

    // function reducer(state, action) {
    //     switch (action.type) {
    //     case 'ADD':
    //         return {};
    //     default:
    //         throw new Error();
    //     }
    // }

    // const {state, dispatch} = React.useReducer(reducer, initialState)

    const [contacts, setContacts] = React.useState([])
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const handleAdd = (e) => {
        e.preventDefault()
        if(!name|| !phone ) {
            alert('Заполните')
            return
        
        }

        const newContact = {
            name,
            phone
        }
        setName('');
        setPhone('');
        setContacts([...contacts, newContact]);   
    }

    return (
            <div>
                <NavBar />
                <section className = {styles.contacts}>
                    <div className = 'container'>
                        <form>
                            <h1>Your name</h1>
                            <input 
                                type = 'text'
                                placeholder = 'name'
                                value = {name}
                                onChange = {(e) => setName(e.target.value)}
                            />
                            <input 
                                type = 'text'
                                placeholder = 'phone'
                                value = {phone}
                                onChange = {(e) => setPhone(e.target.value)}
                            />
                            <button onClick = {handleAdd}>Send</button>
                        </form>
                        {contacts.map((c, id) => <ContactItem key = {id} id = {id} contact = {c}/>)}
                    </div>
                </section>
            </div>
    )
}

export default Contacts