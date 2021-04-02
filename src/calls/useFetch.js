import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Wrapper =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const ErrorMessage = styled.div`
    display: flex;
    justify-content: center;
    background: #df1c44;
    color: #fff;
`
export const useFetch = url => {
    const [state, setState] = useState({
        items: [],
        loading: true
    })
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url)  
            const data = await response.json()     
        
        if (response.ok) {
            setState({
                items: data,
                loading: false
            })
        } else {
            setState(s=>({...s, loading: false}))

            return (
                <Wrapper>     
                    <ErrorMessage>
                        {response.statusText}
                    </ErrorMessage>
                </Wrapper>
            )
        }
    }
    fetchData();
    }, [url])

    return [
        state.items,
        state.loading
    ]
}
