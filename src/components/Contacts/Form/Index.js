import '../../Vendors'
import {useState, useEffect} from 'react';
const initialFormValues = {fullName: '', phoneNumber: ''};


function Form({addContact, contacts}) {
    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) => {
        if (form.fullName === '' || form.phoneNumber === '') {
            return false;
        }
        addContact([...contacts, form])

        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input name={'fullName'} type="text" className="form-control" id="nameInput" placeholder={'| Name'}
                       value={form.fullName} onChange={onChangeInput}/>
            </div>
            <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input name={'phoneNumber'} type="number" className="form-control" id="phoneNumber"
                       value={form.phoneNumber} placeholder={'| Phone Number'} onChange={onChangeInput}/>
            </div>
            <button className="btn btn-outline-danger">Add</button>
        </form>
    )
}

export default Form;