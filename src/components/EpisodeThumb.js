import React from 'react';
import styled from 'styled-components';

const Episodes = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 1em;
    margin : 2rem 0;

    @media (min-width: 992px) {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    li {
        margin-bottom: 1rem;

        @media (min-width: 992px) {
            width: 300px;
        }
    }

    .img-wrapper {
        width: 100%;
        border: 4px solid #fff;
        margin-bottom: 0.5rem;
    }

    img {
        width: 100%;
        display: block;
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
                                <div className="img-wrapper">
                                    <img src={episode.artwork_url} alt={`Episode ${episode.title}`}/>
                                </div>

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
