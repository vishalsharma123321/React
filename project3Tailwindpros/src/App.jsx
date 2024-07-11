import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4 '>Tailwind test </h1>
 <Card username='vishal sahrma '  btntext="click me"/>
 <Card usernaem="tony stark" btntext="visite me " />
  <Card/>
  <button className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white'>click me</button>


    </>
  )
}

export default App
