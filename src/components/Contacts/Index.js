import '../Vendors';
import List from './List/Index'
import Form from './Form/Index'
import {useState, useEffect} from 'react';


function Contacts(){
    const [contacts, setContacts] = useState([]);

    useEffect( () => {
        console.log(contacts);
    }, [contacts] )

    return(
        <div className={"container App"}>
            <div className={"card"}>
                <div className={"card-header text-danger"}>
                    Contact List App
                </div>
                <div className={"card-body"}>
                    <List contacts={contacts}/>
                    <Form addContact={setContacts} contacts={contacts}/>
                </div>
            </div>
        </div>
    )
}

export default Contacts;