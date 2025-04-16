import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import ApiService from '../Api/config'
import {Container,Buttons} from '../component/index'
import { useNavigate } from 'react-router-dom'
import parse from 'html-react-parser'
import { token1234 } from '../key/key'


export default function Post() {
    const {id} = useParams()
    const [post,setPost] = useState(null)
    const navigate = useNavigate()
    
    const token = localStorage.getItem(token1234)
    const userData = JSON.parse(localStorage.getItem('userData'))
    
    
    const isAuthor = post && userData && post?.author?._id === userData.id
    

    useEffect(() => {
        if(!id || !token){
            navigate('/login')
        }
        ApiService.getPostById(id,token).then((res) => {
            if(res){
                setPost(res?.blog || []);
            }
        }).catch((err) => {
            console.log(err)
        })
    },[]) 


    const handleDelete=async()=>{
        const confirm=window.confirm("Are you sure you want to delete this post?")
        if(confirm){
            const res = await ApiService.deletePost(id,token)
        console.log("DELETE POST RESPONSE:",res)
        if(res){
            navigate('/')
        }
        }
        
    }
    const handleFileDelete = async (index) => {
        const confirm = window.confirm(`Are you sure you want to delete this image? ${index}`);
        if (confirm) {
            const res = await ApiService.deleteImage(id, token,index)
            console.log("DELETE POST RESPONSE:", res)
            if (res) {
               setPost(prevPost => ({
                     ...prevPost ,
                    coverImage : res.coverImage
                
               }))
            }
        }
    }
    

    if (!post) {
        return (
          <div className="text-center py-10">
            <p>Loading post...</p>
          </div>
        );
      }
      

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                <div className='p-2 w-full'>
                    <h1 className='text-3xl font-bold'>{post?.title}</h1>
                    {Array.isArray(post?.coverImage) && post.coverImage.length > 0 && (
                            <div className="grid grid-cols-2 gap-4 mb-4 mt-4">
                                {post.coverImage.map((img, index) => (
                                <div key={index}>{
                                    isAuthor &&(<button className='w-10 bg-red-700 text-2xl
                                         text-amber-100 cursor-pointer' onClick={()=>{handleFileDelete(index)}}>X</button>) 
                                    }<img
                                
                                src={`http://localhost:8000${img}`}
                                alt={`${post?.title} - ${index + 1}`}
                                className='rounded-xl w-500  h-100 mt-4 object-cover'
                            /></div>
                                
                                
                                ))}
                            </div>
                    )}
                    {post?.content && typeof post.content === 'string' && (
                        <p className='text-black-700   mt-3'>{parse(post.content)}</p>
                        
                    )}
                        
                    <p className='text-gray-500 mt-3 text-sm'>by {post?.author?.name || 'Unknown Author'}</p>
                    {isAuthor && (
                        <div className="flex gap-4 mt-4">
                            <Buttons ButtonsText="EDIT" onClick={() => navigate(`/edit/${id}`)} />
                            <Buttons ButtonsText="DELETE" onClick={handleDelete} />
                        </div>
                    )}
                </div>
            </div>
        </Container>
    </div>
  )
}
