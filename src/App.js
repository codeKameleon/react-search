import React, { useState, useEffect } from 'react';
import { useFetch } from './calls/useFetch';
import { EpisodeThumb } from './components/EpisodeThumb';
import { SearchBar } from './components/SearchBar';
import { GlobalStyle } from './globalStyles';

export const  App = () => {
  const url = process.env.REACT_APP_API_URL

  const [episodes, loading] = useFetch(url)
  const [search, setSearch] =  useState('');
  const [filterEpisodes, setFilterEpisodes] =  useState([]);

  const handleChange =  e => {
    setSearch(e)
  }

  useEffect(() => {
    const results = episodes.filter(episode => episode.title.toLowerCase().includes(search.toLowerCase()))
    setFilterEpisodes(results)
  }, [search])

  return (
  <>
    <GlobalStyle/>

    <h1>Boarderless</h1>

    <SearchBar value={search} onChange={e => handleChange(e.target.value)}/>

    <EpisodeThumb loading={loading} episodes={search.length < 1  ? episodes : filterEpisodes} />
  </>
  );
}

export default App;
