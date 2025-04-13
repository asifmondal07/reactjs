import React,{useState,useEffect} from 'react'
import {Container,PostCard} from '../component/index'
import ApiService from '../Api/config'


export default function Home() {
    const [data,setData] = useState('')

    useEffect(() => {
        ApiService.getAllPost().then((res) => {
            setData(res?.blogs || []);

        }).catch((err) => {
            console.log(err)
        })
    },[])

  return (
    <div className='w-full py-8'>
    <Container>
      <div className='flex flex-wrap'>
        {Array.isArray(data) ? (
          data.map((item) => (
            <div key={item._id} className='p-2 w-1/4'>
              <PostCard {...item} />
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-red-500">
            No blog posts available
          </p>
        )}
      </div>
    </Container>
  </div>
  
  
  )
}
