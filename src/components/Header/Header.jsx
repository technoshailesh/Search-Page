import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
                <Navbar />
          
                <SearchForm />      
                  </header>
            </div>

 
  )
}

export default Header