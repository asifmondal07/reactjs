import React,{useState} from 'react'
import ApiService from '../../Api/config'
import { useNavigate } from 'react-router-dom'


function PostCard({ title, coverImage, content,blogId }) {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0);


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
              {coverImage.length > 0 && (
                <img
                src={`http://localhost:8000${coverImage[currentIndex]}`}
                alt={`${title} - ${currentIndex + 1}`}
                className="px-4 py-6 rounded-2xl w-full h-48 object-cover"
            />
              )}
            
            </div>
            

            
            {/* Dots indicator */}
            <div className="flex justify-center mt-2 gap-2">
              {coverImage.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 w-2 rounded-full ${
                    idx === currentIndex ? "bg-gray-800" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
            
            <p className='text-black-700 mt-3'>{content}</p>
    </div>

    
  )
}

export default PostCard