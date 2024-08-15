import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str = str + "1234567890"
    }
    if (characterAllowed) {
      str = str + "~!@#$%^&*()_{}"
    }
    for (let index = 1; index <= length; index++) {
      const random = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(random);
    }
    setPassword(pass)
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPassword=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, characterAllowed])


  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-center text-4xl text-white mt-6'> Password Generator</h1>
        <div className=' flex shadow rounded-lg overflow-hidden mb-4 mt-4'>
          <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef}/>
          <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={100} value={length} className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)} />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numberAllowed}
              od="numberInput" onChange={() => {
                setNumberAllowed(prev => !prev)
              }} />
            <label>NumberAllowed</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={characterAllowed}
              od="numberInput" onChange={() => {
                setCharacterAllowed(prev => !prev)
              }} />
            <label>CharacterAllowed</label>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
