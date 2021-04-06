import React from 'react';
import styled from 'styled-components';

const Filter =  styled.input`
    width: 30%;
    height: 2rem;
    padding: 0 1rem;
    border-radius: 1rem;
    border: 1px solid rgba(0,0,0, .3);

    &:focus {
        outline: none;
    }
`

export const SearchBar = ({value, onChange}) => {
    return (
        <Filter value={value} onChange={onChange} />
    )
}
