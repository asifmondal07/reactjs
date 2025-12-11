import React from 'react'

function Home() {
  return (
    <div className='w-full py-8'>
    
      <div className='flex flex-wrap'>
        {Array.isArray(data) ? (
          data.map((item) => (
            <div key={item._id} className='p-2 w-1/4'>
              <PostCard {...item} blogId={item._id}/>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-red-500">
            No blog posts available
          </p>
        )}
      </div>

      
    </div>
  )
}

export default Home
