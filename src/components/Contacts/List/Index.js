import '../../Vendors';
import {useState, useEffect} from 'react';


function List({ contacts }) {
    return (
        <div className="mb-3">
            <div className="mb-3">
                <label htmlFor={"searchInput"} className={"form-label"}>Filter</label>
                <input type={"search"} className={"form-control"} id={'searchInput'} placeholder={'| Filter'}/>
            </div>
            <ul id={'directorySection'} className="list-group">
                {contacts.map((contact, i) => <li key={i} className="list-group-item">
                    <div><span className="fw-bold">Name:</span> {contact.fullName}</div>
                    <div><span className="fw-bold">Phone Number:</span> {contact.phoneNumber}</div>
                </li>)}
            </ul>
        </div>
    )
}

export default List;