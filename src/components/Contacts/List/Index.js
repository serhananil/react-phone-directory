import '../../Vendors';
import {useState, useEffect} from 'react';


function List({contacts}) {
    const [filterText, setFilterText] = useState('');

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]//item.fullName
                .toString()
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase())
        );
    });

    return (
        <div className="mb-3">
            <div className="mb-3">
                <label htmlFor={"searchInput"} className={"form-label"}>Filter</label>
                <input type={"search"} className={"form-control"} id={'searchInput'} placeholder={'| Filter Contact'}
                       value={filterText} onChange={(e) => setFilterText(e.target.value)}/>
            </div>
            <ul id={'directorySection'} className="list-group">
                {filtered.map((contact, i) => <li key={i} className="list-group-item">
                    <div><span className="fw-bold">Name:</span> {contact.fullName}</div>
                    <div><span className="fw-bold">Phone Number:</span> {contact.phoneNumber}</div>
                </li>)}
            </ul>
        </div>
    )
}

export default List;