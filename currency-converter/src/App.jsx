import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBox } from './component'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyData = useCurrencyInfo(from);

  const currencyOptions = Object.keys(currencyData);


  const swap = () => {
    setConvertedAmount(amount);
    setAmount(convertedAmount)
    setTo(from);
    console.log(to)
    setFrom(to);
    console.log(from)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyData[to])
  }




  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('data:image/jpeg;base64,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')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                defaultCurrency={from}
                amount={amount}
                onAmountChange={(amt) => setAmount(amt)}
                onCurrencyChange={(cur) => setFrom(cur)}
                currencyOtptions={currencyOptions}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                onCurrencyChange={(cur) => setTo(cur)}
                defaultCurrency={to}
                currencyOtptions={currencyOptions}
                isAmountDisabled
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
