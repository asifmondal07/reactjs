import React,{useEffect,useState} from 'react'
import { Container,Form} from '../component'
import ApiService from '../Api/config'
import { useNavigate,useParams } from 'react-router-dom'

export default function EditBlog() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [blogData, setBlogData] = useState(null)
    useEffect(() => {
        if(id){
            ApiService.getPostById(id).then((post) => {
                if(post){
                    setBlogData(post)
                }
            })
        }else{
            navigate('/')
        }
    }, [id, navigate])

  return blogData ? ( 
    <Container className='w-full h-full flex items-center justify-center'>
        <Form post={blogData} />
    </Container>
  ) : (
    <div>Loading...</div>
  )
}
