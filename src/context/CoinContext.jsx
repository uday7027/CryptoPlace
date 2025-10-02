import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {
    const [coins, setCoins] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    });

    const fetchAllCoins = async () => {
        try {
            const response = await fetch(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
            );
            const data = await response.json();
            setCoins(data);
        } catch (error) {
            console.error("Failed to fetch coins:", error);
        }
    };

    useEffect(()=>{
        fetchAllCoins();
    },[currency]);

    const contextValue = {
        coins,
        setCoins,
        currency,
        setCurrency,
        fetchAllCoins
    };

    return (
        <CoinContext.Provider value={contextValue}>
            {children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;