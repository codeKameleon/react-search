import React from 'react';
import styled from 'styled-components';

const Filter =  styled.input`
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    border-radius: 5px;
    border: 3px solid rgba(0,0,0, .3);
    background-color: #bcc6cc;
    transition: background 300ms ease;

    &:focus {
        outline: none;
        background-color: #fff;
    }

    @media (min-width: 768px) {
        width: 50%;
    }

    @media (min-width: 992px) {
        width: 40%;
    }
`

export const SearchBar = ({value, onChange}) => {
    return (
        <Filter value={value} onChange={onChange} placeholder='Search episode' />
    )
}
