import styled from 'styled-components';
import { EpisodeThumb } from './components/EpisodeThumb';
import { GlobalStyle } from './globalStyles';

export const  App = () => {
  return (
  <>
    <GlobalStyle/>

    <h1>Boarderless</h1>

    <EpisodeThumb/>
  </>
  );
}

export default App;
