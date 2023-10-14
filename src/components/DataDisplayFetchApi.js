import React, {useEffect, useState} from 'react';
import DataEntity from "./DataEntity";

function DataDisplayFetchApi () {

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
            {data.map(entity => <DataEntity key={entity.budgetEntryId} dataEntity={entity}/>)}
        </>
    );
}

export default DataDisplayFetchApi;
