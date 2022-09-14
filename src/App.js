import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';

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
  return (
    <div>
      <DisplayEntries parentEntries = {entries} />
      <AddEntryForm addNewEntryProperty = {addNewEntry} />
      <EntriesChartTracker parentEntries = {entries}/>
    </div>
  );
}

export default App;
