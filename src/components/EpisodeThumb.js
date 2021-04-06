import React from 'react';
import styled from 'styled-components';

const Episodes = styled.ul`
    display: flex;

    li {
        padding: 1rem;
    }

    li:first-child {
        padding-left: 0;
    }
`
export const EpisodeThumb = ({episodes, loading}) => {
    if(loading) {
        return <p> Loading ... </p>
    }
    return(
        <>
            <Episodes>
                {episodes.map(episode => {
                    return(
                        <li key={episode.id}>
                            <figure>
                                <img width ="250" src={episode.artwork_url} alt={`Episode ${episode.title}`}/>

                                <figcaption>
                                    <h2>{episode.title}</h2>
                                </figcaption>
                            </figure>
                        </li>
                    )
                })}
            </Episodes>
        </>
    )
}
