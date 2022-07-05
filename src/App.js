import './components/Vendors'
import {useState, useEffect} from 'react';


function App() {


  return (
    <div className={"container App"}>
        <div className={"card"}>
            <div className={"card-header text-danger"}>
                Contact List App
            </div>
            <div className={"card-body"}>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor={"searchInput"} className={"form-label"}>Filter</label>
                        <input type={"search"} className={"form-control"} id={'searchInput'} placeholder={'| Filter'}/>
                    </div>
                    <div className="mb-3">
                        <ul id={'directorySection'} className="list-group">
                            <li className="list-group-item">
                                <div><span className="fw-bold">Name:</span> Serhan Anıl Kılıç</div>
                                <div><span className="fw-bold">Phone Number:</span> 0 (537) 868 4557</div>
                            </li>
                            <li className="list-group-item">
                                <div><span className="fw-bold">Name:</span> Serhan Anıl Kılıç</div>
                                <div><span className="fw-bold">Phone Number:</span> 0 (537) 868 4557</div>
                            </li>
                            <li className="list-group-item">
                                <div><span className="fw-bold">Name:</span> Serhan Anıl Kılıç</div>
                                <div><span className="fw-bold">Phone Number:</span> 0 (537) 868 4557</div>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="nameInput" placeholder={'| Name'}/>
                    </div>
                   <div className="mb-3">
                       <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                       <input type="number" className="form-control" id="phoneNumber" placeholder={'| Phone Number'}/>
                   </div>
                    <button className="btn btn-outline-danger">Add</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App;
