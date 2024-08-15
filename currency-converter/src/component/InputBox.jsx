import React,{ useId } from 'react'

function InputBox({
    label,
    className = "",
    amount,
    onAmountChange,
    onCurrencyChange,
    defaultCurrency = "usd",
    currencyOtptions = [],
    isAmountDisabled = false,
    isCurrencyDisabled = false

}) {

    const currencyIdenfiier = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={currencyIdenfiier} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={currencyIdenfiier}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={onAmountChange && ((e) => onAmountChange(Number(e.target.value)))}
                    disabled={isAmountDisabled}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={defaultCurrency}
                    onChange={onCurrencyChange && (e => onCurrencyChange(e.target.value))}
                    disabled={isCurrencyDisabled}>
                    {currencyOtptions.map(currency =>
                    (<option key={currency} value={currency}>
                        {currency}
                    </option>))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
