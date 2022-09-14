import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <label>Weight</label>                                          
            <input type="number" value={weight} onChange={(event) => setWeight(parseFloat(event.target.value))} />
            <label>Date</label>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)}/>
            <button type="submit">Add</button>
        </form>
     );
}
 
export default AddEntryForm;