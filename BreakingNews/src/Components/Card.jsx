import React from 'react'

const Card = ({item}) => {
    return (
        <div>
            <div className='flex flex-col  justify-center gap-[10px] border-[0.5px] border-gray-400 shadow-md p-4 rounded-md '>
                <div className=' rounded-md'><img className='object-cover w-full rounded-md h-[200px]' src={item?.urlToImage ?item?.urlToImage: "/assets/newsimg.jpeg" } alt='news' />
                </div >
                <div className='bg-gray-300 rounded-md p-3 shadow-lg'>
                <h2 className='text-[25px] font-extrabold py-2  '>{item?.title}</h2>
                <p  className='text-[20px] font-bold my-2'>{item?.publishedAt.split("T")[0]}</p>
                <p className='text-[20px] font-bold my-2 ' >{item?.author}</p>

                <p className='my-4 text-[22px] font-semibold bg-gray-400 p-4 rounded-md shadow-lg'>{item?.description}</p>
                </div>

                <a className='mt-2 px-4 py-3 rounded-sm text-[16px] text-center bg-blue-500 hover:bg-blue-600 shadow-md text-white font-[700]' href={item?.url} target='_blank'> Read More </a>

            </div>
        </div>
    )
}

export default Card
