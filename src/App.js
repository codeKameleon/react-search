import React, { useState } from 'react';
import { EpisodeThumb } from './components/EpisodeThumb';
import { SearchBar } from './components/SearchBar';
import { GlobalStyle } from './globalStyles';

export const  App = () => {
  const [word, setWord] =  useState('');

  const handleChange =  e => {
    setWord(e)
    console.log('word', word)
  }

  return (
  <>
    <GlobalStyle/>

    <h1>Boarderless</h1>

    <SearchBar handleChange={e => handleChange(e.target.value)}/>

    <EpisodeThumb />
  </>
  );
}

export default App;
