import React, { useEffect, useState } from 'react'
import Card from './Card'

const BreakingNewsCards = ({newsData}) => {
    return (
        <div>
            <h1 className='text-[36px] font-[700] text-center py-4 '>Breaking News in India</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] p-7'>
                {newsData.map((item,index)=>{
                    return(
                        <Card key={index} item={item} />
                    )
                })}
               
            </div>
        </div>
    )
}

export default BreakingNewsCards
