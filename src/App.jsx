import { useEffect, useState } from 'react';
import React from 'react'
import Search from './components/Search'

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }
}

const App = () => {
  const[searchTerm, setSearchTerm] = useState('');

  useEffect(() => {

  })

  return (
    <main>
      <div className='pattern' />
      <div className='wrapper'>
        <header>
          <img src='./hero-img.png' alt='hero banner'/>
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm = {setSearchTerm}/>
        <h1>{searchTerm}</h1>
      </div>
    </main>
  )
}

export default App