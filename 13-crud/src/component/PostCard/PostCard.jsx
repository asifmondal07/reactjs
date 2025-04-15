import React from 'react'
import ApiService from '../../Api/config'
import { useNavigate } from 'react-router-dom'


function PostCard({ title, coverImage, content,author,blogId }) {
  const navigate = useNavigate()
  const imageUrl = coverImage?.[0]
    ? `http://localhost:8000${coverImage[0]}`
    : coverImage?.[0] // fallback image

    const handleCardClick= async()=>{
      const res = await ApiService.getPostById(blogId)
      console.log("POST CARD RESPONSE:",res)
      if(res){
        navigate(`/post/${blogId}`)
    }
  }
  return (
    <div className='w-60 bg-amber-50 rounded-xl p-4 cursor-pointer hover:shadow-lg transition'
         onClick={handleCardClick}> 
      <h2 className='text-xl font-bold'>{title}</h2>
            <div className='w-45 justify-center mb-4 mt-4'>
            <img
                src={imageUrl}
                alt={title}
                className='rounded-xl w-full h-48  object-cover'
            />
            </div>
            
            <p className='text-black-700 mt-3'>{content}</p>
            <p className='text-gray-500 mt-3 text-sm'>by {author?.name || 'Unknown Author'}</p>

    </div>

    
  )
}

export default PostCard