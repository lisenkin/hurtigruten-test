import React from 'react';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  //useState for search  
  return (
    <div className='container'>
     <h1 className='title' >Search Flow</h1>
      <SearchForm value =''/>
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
