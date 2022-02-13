import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Filter =  styled.input`
    width: 85%;
    height: 3.5rem;
    padding: 0 1rem;
    margin: 2rem;
    border-radius: 5px;
    border: 3px solid #0c0908;
    background-color: #F5F5F5;
    transition: all 300ms ease;

    &:focus {
        outline: none;
        border: 3px solid #FBB117;
    }

    @media (min-width: 1200px) {
        width: 40%;
    }
`

export const SearchBar = ({ value, onChange }) => {
    return (
        <Filter value={value} onChange={onChange} placeholder='Search Episode' />
    )
}

SearchBar.propTypes =  {
    value: PropTypes.string,
    onChange: PropTypes.func
}