import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(r => {
                    console.log(r)
                    if(!r.ok) {
                        throw Error('could not fetch data for specific resource');
                    }
                    return r.json();
                })
                .then((data) => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(e => {
                    setIsLoading(false);
                    setError(e.message);
                })
        }, 1000)
    }, [url]);

    return {data, isLoading, error}
}

export default useFetch