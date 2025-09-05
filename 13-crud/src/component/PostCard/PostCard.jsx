import React,{useState} from 'react'
import ApiService from '../../Api/config'
import { useNavigate } from 'react-router-dom'


function PostCard({ title, coverImage, content,blogId }) {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide=(e)=>{
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? coverImage.length - 1 : prev - 1
    );
  }

  const nextSlide=(e)=>{
     e.stopPropagation();
      setCurrentIndex((prev) =>
       prev === coverImage.length - 1 ? 0 : prev + 1   
    );
  }

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
            <div className="relative w-45 justify-center mb-4 mt-4">
              {coverImage.length > 0 && (
                <img
                  src={`http://localhost:8000${coverImage[currentIndex]}`}
                  alt={`${title} - ${currentIndex + 1}`}
                  className="px-4 py-6 rounded-2xl w-full h-48 object-cover"
                />
              )}

              {/* Prev button */}
              <button
              
                 onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full 
                cursor-cell hover:shadow-lg transition"
              >
                ‹
              </button>

              {/* Next button */}
              <button
                 onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full
                cursor-cell hover:shadow-lg transition"
              >
                ›
              </button>

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
            </div>
            
            <p className='text-black-700 mt-3'>{content}</p>
    </div>

    
  )
}

export default PostCard