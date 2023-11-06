import React from 'react';
import Clock, { ClockToggle } from './components/Clock';
import Folder from './components/Folder';
import Weather from './components/Weather';
import Autocomplete from './components/Autocomplete';
import { useState } from 'react';

const names = [
  'Abba',
  'Barbara',
  'Barney',
  'Jeff',
  'Jenny',
  'Sally',
  'Sarah',
  'Xander'
];

const folders = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second folder here' },
  { title: 'three', content: 'Third folder here' }
];



const App = () =>  {
  const [clock, showClock] = useState(true)

  // const toggleClock = () => ({ showClock : !showClock });
  const toggleClock = () => {
    debugger
    clock ? showClock(false) : showClock(true)
  }
  
  return (
      <div className="widgets">
        <Folder folders={folders} />
        <Weather />
        <ClockToggle toggleClock={toggleClock} />
        {clock && <Clock/>}
        <Autocomplete names={names} />
      </div>
    );


}
  
  
export default App;