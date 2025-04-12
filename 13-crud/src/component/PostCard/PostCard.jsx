import React from 'react'

function PostCard() {
  return (
    <div className='w-full bg-gray-100 rounded-xl p-4 '> 
            <div className='w-full justify-center mb-4'>
                <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
  )
}

export default PostCard