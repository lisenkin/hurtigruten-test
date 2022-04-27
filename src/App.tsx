import React from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';

function App() {

  const [results, setResults] = useState(null);

 //display the result of the search
  useEffect(() => {
    console.log(results)
  }, [results])
  return (
    <div className='container'>
     <h1 className='title' >Search Flow</h1>
      <SearchForm   onSearch={setResults}/>
     <table>
      <caption>search result</caption>
      <thead>
    <tr>
      <th>header a</th>
      <th>header b</th>
      <th>header c</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  </tbody>
      </table> 
    </div>
  );
}

export default App;
