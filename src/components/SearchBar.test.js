import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';

it('renders correctly', () => {
    const{ queryByPlaceholderText } =  render(<SearchBar/>)

    expect(queryByPlaceholderText('Search Episode')).toBeTruthy()
})

describe('Input value', () => {
    it('updates on change', () => {
        const { queryByPlaceholderText } =  render (<SearchBar/>)
        const searchInput = queryByPlaceholderText('Search Episode')

        fireEvent.change(searchInput, { target: { value: 'test' } })

        expect(searchInput.value).toBe('test')
    })
})

