import React, { useEffect, useState } from "react";
import "./index.css";

// const url = "http://data.fixer.io/api/latest?access_key=b61aad9a658b2f43078a5d9f6cde2d58";
const url = "";

const Converter = () => {

    const [value, setValues] = useState([]);
    const [inputAmount, setInputAmount] = useState(0);
    const [selectedCurrency, setSelectedCurrency] = useState("INR");
    const [selectedSecondCurrency, setSelectedSecondCurrency] = useState("EUR");
    const [from, setFrom] = useState(selectedCurrency);
    const [to, setTo] = useState(selectedSecondCurrency);
    const [convertedValue, setConvertedValue] = useState(0);

    const ApiData = async () => {
        const response = await fetch(url)
        .then((response) => response.json());

        setValues(response);
    };

    useEffect(() => {
        ApiData();
    },[]);

    const handleCurrencyChange = (e) => {
        setSelectedCurrency(e.target.value);
    }

    const handleSecondCurrencyChange = (e) => {
        setSelectedSecondCurrency(e.target.value);
    }

    const flip = () => {
        var temp = from;
        setFrom(to);
        setSelectedCurrency(to);
        setTo(temp);
        setSelectedSecondCurrency(temp);
    }

    const convert = () => {
        if (value.rates && value.rates[from] && value.rates[to]) {
            const fromRate = value.rates[from];
            const toRate = value.rates[to];
            const converted = (inputAmount / fromRate) * toRate;
            setConvertedValue(converted);
        }
    }

    return (
        <div className="wrap">
            <div className="inputbox">
                <input type="number" placeholder="Enter Amount" onChange={(e) => setInputAmount(e.target.value)}></input>
            </div>
            <div className="upperchoice">
                <select id="currency" value={selectedCurrency} onChange={handleCurrencyChange}>
                    {
                        value.rates && Object.keys(value.rates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))
                    }
                </select>
            </div>

            <div className="flipButton">
              <button onClick={flip}>&lt;&gt;</button>
            </div>
            
            <div className="lowerchoice">
                <select id="currency" value={selectedSecondCurrency} onChange={handleSecondCurrencyChange}>
                    {
                        value.rates && Object.keys(value.rates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))
                    }
                </select>
            </div>

            <div className="convertButton">
                <button onClick={convert}>Convert</button>
            </div>

            <div className="result">
                <p>{convertedValue.toFixed(2)}{selectedSecondCurrency}</p>
            </div>
            
            <div className="lastupdated">
                <p><i>Last Updated on {value.date}</i></p>
            </div>

        </div>
    );
};

export default Converter;