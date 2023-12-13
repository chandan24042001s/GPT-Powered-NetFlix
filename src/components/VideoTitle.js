import React from 'react'

const VideoTitle = ({title,overview}) => {
  console.log(overview)
  return (
    <div className='absolute z-10 pt-[15%] px-24 text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-4xl font-bold' > {title} </h1>
      <p className='py-6 text-lg w-1/4'> {overview} </p>
      <div >
        <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80'>Play</button>
        <button className='mx-2 bg-white text-black p-4 px-12 text-xl hover:bg-opacity-80 rounded-lg'>! More info</button>
      </div>
    </div>

  )
}

export default VideoTitle