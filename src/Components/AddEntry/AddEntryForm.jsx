import React, { useState } from 'react';
import './AddEntryForm.css';

// child of the app component, need to get it back up to the app component
// child component can invoke function on the parent
const AddEntryForm = (props) => {

    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState("");

    // keeps page from reloading upon each entry
    // creates new JS objects with keys weight, date
    // "newEntry" to get passed up into the app component and placed into the entries array
    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            weight: weight,
            date: date
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }

    return ( 
        <form onSubmit={handleSubmit} className="form-grid">
            <div className='form-group'>
                <label>Weight</label>                                          
                <input type="number" className="form-control" value={weight} onChange={(event) => setWeight(parseFloat(event.target.value))} />
            </div>
            <div className='form-group'>
                <label>Date</label>
                <input type="date" className="form-control" value={date} onChange={(event) => setDate(event.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary" style={{'margin-top': '1em'}}>Add</button>
        </form>
     );
}
 
export default AddEntryForm;