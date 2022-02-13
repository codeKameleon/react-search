import React from 'react';
import { Loader } from './Loader'
import styled from 'styled-components';

const Episodes = styled.ul`
    width: 85%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    li {
        margin-bottom: 1rem;
        max-width: 100%;
        font-size: 0.8rem;

        @media (min-width: 992px) {
            width: 300px;
        }
    }

    figure {
        position: relative;
        z-index: 1;
        padding: 2rem;
        border: 4px solid #0c0908;

        @media (min-width: 992px) {
            margin: 1.5rem;
        }
    }

    .img-wrapper {
        width: 100%;
        margin-bottom: 0.5rem;
    }

    img {
        width: 100%;
        display: block;
    }
`
export const EpisodeThumb = ({ episodes, loading }) => {
    if(loading) {
        return (
            <div style={{ width: "100%" }}>
                <Loader/>
            </div>
        )
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
