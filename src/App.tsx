import React from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';

function App() {
// any for fix ts states error, sorry
  const [results, setResults] = useState<any>('');

 //display the result of the search
  useEffect(() => {
  }, [results])

  return (
    <div className='container'>
     <h1 className='title' >Search Flow</h1>
      <SearchForm   onSearch={setResults}/>
    <div className='results'>
    <div className='ships_result'>{results.shipId}</div>
    <div className='ships_result'>{results.heading}</div>
    <div className='ships_result'>{results.shipyard}</div>
    </div>
    
    </div>
  );
}

export default App;
