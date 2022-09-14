import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';
import './App.css';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: "11-23-2021"}, {weight: 176, date: "11-24-2021"}])

  // function to pass down to the child component
  // tempEntries another variable, set to an empty array - the new entry that's being passed through the form
  // setEntries - the way to update the state variable
  // create a temporary object to store any new data, and set state variable to the temp object
  function addNewEntry(entry){

    let tempEntries = [...entries, entry];

    setEntries(tempEntries)
  }

  // passes down to child components
  // page is divided into 12 columns
  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{'margin': '1em'}}>Weight 
        <small className='text-muted'>Tracker</small></h3>
        <div className='col-md-6'>
          <div className='border-box'>
            <DisplayEntries parentEntries = {entries} />
            <AddEntryForm addNewEntryProperty = {addNewEntry} />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='border-box'>
          <EntriesChartTracker parentEntries = {entries}/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
