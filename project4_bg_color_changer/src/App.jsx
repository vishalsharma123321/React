import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState('#212121')
  return (
    <>
    <div className="  flex w-full h-screen  " style={ {backgroundColor:color}}>
    <div className='px-5 py-3 rounded-xl space-x-3  bg-slate-300  mt-auto mb-10 ml-auto mr-auto'>
          <button onClick={() => (setColor('red'))}   className='bg-red-600  px-4 py-1 rounded-xl font-semibold text-white'>Red</button>
          <button onClick={() => (setColor('blue'))}   className='bg-blue-600 px-4 py-1 rounded-xl text-white' >Blue</button>
          <button onClick={() => (setColor('green'))}  className='bg-green-600 px-4 py-1 rounded-xl text-white '>Green</button>
          <button onClick={() => (setColor('black'))}  className='bg-black text-white px-4 py-1 rounded-xl text-white'>Black</button>
        </div>
      </div>

    </>
  )
}

export default App
