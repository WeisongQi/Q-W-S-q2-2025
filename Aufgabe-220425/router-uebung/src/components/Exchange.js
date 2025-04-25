import React, { useState, useEffect } from 'react';

function Exchange() {
    const [rates, setRates] = useState([]);
    const [currencyList, setCurrencyList] = useState(['USD', 'EUR', 'CNY', 'GBP']);
    const baseCurrency = 'USD';

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/*/latest/${baseCurrency}`)
            .then(response => response.json())
            .then(data => {
                const filteredRates = currencyList.map(currency => ({
                    currency,
                    rate: data.conversion_rates[currency]
                }));
                setRates(filteredRates);
            });
    }, [currencyList]);

    const addCurrency = () => {
        const allCurrencies = ['JPY', 'CAD', 'AUD', 'CHF', 'NZD'];
        const nextCurrency = allCurrencies.find(currency => !currencyList.includes(currency));
        if (nextCurrency) {
            setCurrencyList([...currencyList, nextCurrency]);
        }
    };

    return (
        <div>
            <h1>Exchange Rates (Base: {baseCurrency})</h1>
            <ul>
                {rates.map(({ currency, rate }) => (
                    <li key={currency}>{currency}: {rate}</li>
                ))}
            </ul>
            <button onClick={addCurrency}>Add More Currency</button>
        </div>
    );
}

export default Exchange;
