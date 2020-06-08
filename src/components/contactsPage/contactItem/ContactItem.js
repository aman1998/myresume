import React from 'react';
import { NavLink} from 'react-router-dom';

function ContactItem ({contact, id}) {

    return(
        <NavLink
            to = {{
                pathname: `/contacts/${id}`,
                state: { contact }
            }}
            key = {id}
        >
            {`${contact.name}: ${contact.phone}`}
        </NavLink>
    )
}

export default ContactItem