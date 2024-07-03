import { createContext, useEffect, useState } from "react";


export  const Coincontext = createContext();

const CoincontextProvider = (props)=>{
    const [allcoin,setAllcoin] = useState([]);
    const [currency,setCurrency] = useState({
        name:'usd',
        symbol:'$'
    })
    const GetCoins = async()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-5awuFsA8wz3PFPUxJKqq2o5J'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllcoin(response))
            .catch(err => console.error(err));
    }
    
    useEffect(()=>{
        GetCoins();
    },[currency])

    const contextValue = {allcoin,currency,setCurrency}

    return (
        <Coincontext.Provider value={contextValue}>
            {props.children}
        </Coincontext.Provider>
    )
}

export default CoincontextProvider;