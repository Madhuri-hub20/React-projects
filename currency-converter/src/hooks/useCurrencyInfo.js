import {useState, useEffect} from 'react'


function useCurrencyInfo(currency){

    const [data,setData]=useState({});
    useEffect((()=>{
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(url)
        .then(response=>{
            console.log(response)
            return response.json();
        }).then(response=>{
            console.log(response)
            setData(response[currency])
        })

    }),[currency])
    return data;

}

export default useCurrencyInfo