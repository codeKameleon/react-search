import React from 'react';
import { useFetch } from '../calls/useFetch';
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
export const EpisodeThumb = () => {
    const url = process.env.REACT_APP_API_URL
    const [items, loading] = useFetch(url)

    if(loading) {
        return <p>Loading ...</p>
    }
    return(
        <>
            <Episodes>
                {items.map(item => {
                    return(
                        <li key={item.id}>
                            <figure>
                                <img width ="200" src={item.artwork_url} alt={`Episode ${item.title}`}/>

                                <figcaption>
                                    <h2>Episode {item.title}</h2>
                                </figcaption>
                            </figure>
                        </li>
                    )
                })}
            </Episodes>
        </>
    )
}
