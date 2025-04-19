import React from 'react'
import ApiService from '../../Api/config'
import { useNavigate } from 'react-router-dom'


function PostCard({ title, coverImage, content,blogId }) {
  const navigate = useNavigate()

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
              {coverImage && coverImage.map((image, index) => (
                <img
                key={index}
                src={`http://localhost:8000${image}`}
                alt={`${title} - ${index + 1}`}
                className='  px-4 py-6 rounded-4xl w-full h-48  object-cover'
            />
              ))}
            
            </div>
            
            <p className='text-black-700 mt-3'>{content}</p>
    </div>

    
  )
}

export default PostCard