import { useState,useEffect } from 'react'

import './App.css'
import BreakingNewsCards from './Components/BreakingNewsCards'


function App() {

  const[newsData,setNewsData]=useState([]);

  // client side rendering

  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=147adffd1d034b5cb4eacfbf6faf39e1");
      const data = await res.json();
      setNewsData(data.articles);
    }
    fetchData();
  },[])


  return (
    <>
     <BreakingNewsCards  newsData={newsData}/>
    </>
  )
}

export default App
