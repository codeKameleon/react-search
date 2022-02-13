import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url, token) => {
    const [state, setState] = useState({
        items: [],
        loading: true
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response =  await axios.get(url, {
                    headers: {
                        "Authorization": `Token token=${token}`
                    }
                })

                const data = await response.data

                setState({
                    items: data,
                    loading: false
                })

            } catch (err){
                setState(previousState =>({...previousState, loading: false}))
                console.log(err)
            }
        }

        fetchData();
    },[url, token])

    return [
        state.items,
        state.loading
    ]
}
