import React from 'react';
import Glass from '../../assets/magnifying-glass.svg';
import Cross from '../../assets/cross.svg';
import { useState } from 'react';
import './SearchForm.css';


function SearchForm ({onSearch}) {
// useState to follow up input changes 
const [searchValue, setSearchValue] = React.useState('')

const onSubmit = (e) => {
  e.preventDefault();
  fetch(`http://localhost:4000/api/ships/${searchValue}`)
    .then((res) => {   
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`)
    })
    .then(searchResult => onSearch(searchResult[0]))
    .catch(err => console.error(err))

};

  return (
    <div className="searchForm" >
      <form className="search-form" onSubmit={onSubmit}>
        <input 
        type='text'
        placeholder='Search'
        className='search-form__input'
        value={searchValue}
        onChange={e => setSearchValue(e.currentTarget.value)}
       />
        <button className='search-form__glass_button'  type='reset'
        disabled={!searchValue}
        onClick={() => setSearchValue('')} >
            <img className='search__btn-icon' src={searchValue ? Cross : Glass} alt='Search' />
        </button>
    <button className='search-form__button' type={'submit'}>
        <img className='search__btn-icon' src={Glass} alt='Search' />
    </button>
    </form>
    </div>
  );
};

export default SearchForm;