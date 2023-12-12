import React from 'react'

const VideoTitle = ({title,overview}) => {
  console.log(overview)
  return (
    <div className='absolute z-10 pt-[25%] px-24 text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-6xl font-bold' > {title} </h1>
      <p className='py-6 text-lg w-2/4'> {overview} </p>
      <div >
        <button className='bg-gray-500 text-white p-4 px-12 text-xl  rounded-lg'>Play</button>
        <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>! More info</button>
      </div>
    </div>

  )
}

export default VideoTitle