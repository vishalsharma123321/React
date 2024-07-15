import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [Number, setnumberallowed] = useState(false);
  const [char, setcharallowed] = useState(false);
  const [password, setpassword] = useState("");

  // useRef hook 
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (Number) str += "0123456789"
    if (char) str += "!@#$%^&*_+-=[]{}`~"
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  }
    , [length, Number, char, setpassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },
    [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, Number, char, passwordGenerator])



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md shadow-md rounded-lg py-5 px-4 my-8 text-orange-500 bg-gray-700 '>
        <h1 className=' text-center my-4 mt-3 mb-7 '>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>

          <input type="text" value={password} className='outline-none w-full py-1  px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className='p-2 px-3 bg-red-400 text-black font-semibold transition-transform duration-200 ease-in-out active:scale-95'
          >
            Copy
          </button>

        </div>
        <div className=' flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer '
              onChange={(e) => { setlength(e.target.value) }} />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x1 '>
            <input type="checkbox"
              defaultChecked={Number}
              id='numberInput'
              onChange={() => {
                setnumberallowed((prev) => !prev);
              }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x1'>
            <input type="checkbox"
              defaultChecked={char}
              id='charInput'
              onChange={() => {
                setcharallowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
