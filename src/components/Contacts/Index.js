import '../Vendors';
import List from './List/Index'
import Form from './Form/Index'
import {useState, useEffect} from 'react';


function Contacts(){
    const [contacts, setContacts] = useState([{fullName: 'Sero', phoneNumber: '5378684557'}, {fullName: 'Ozzy', phoneNumber: '5549919091'}]);

    useEffect( () => {
        console.log(contacts);
    }, [contacts] )

    return(
        <div className={"mt-5 container App"}>
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