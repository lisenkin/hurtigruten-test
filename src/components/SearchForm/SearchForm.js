import React from 'react';
import Glass from '../../assets/magnifying-glass.svg';
import Cross from '../../assets/cross.svg';
import './SearchForm.css';


function SearchForm({
  value
  }) {
  
  return (
    <div className="searchForm" >
      <form className="search-form" >
        <input 
        type='text'
        placeholder='Search'
        className='search-form__input'
        value={value}
       />
        <button className='search-form__glass_button'  type='reset'
        disabled={value!==0} >
            <img className='search__button-icon' src={value ? Cross : Glass} alt='Search' />
        </button>
    <button className='search-form__button'>
        <img className='search__button-icon' src={Glass} alt='Search' />
    </button>
    </form>
    </div>
  );
};

export default SearchForm;