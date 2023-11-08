import React, {useEffect, useState} from 'react';

const DataDisplayFetchApi = () => {

    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch("http://localhost:8080/budget-entries")
            .then(response => response.json())
            .then(data => {
                setData(data)
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {console.log(data)}
        </>
    );
}

export default DataDisplayFetchApi;
