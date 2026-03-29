import React,{useState,useEffect} from 'react'
import {Container,PostForm} from "../components"
import {useParams,useNavigate} from 'react-router-dom'
import appwriteService from "../appwrite/config"

function Editpost() {
     
     const [post,setPost] = useState(null)
     const {slug} = useParams()
     const navigate = useNavigate()

     useEffect(()=>{
        
        if(slug){
            appwriteService.getpost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
            
        } else{
            navigate('/')
        }



     },[slug,navigate])
  

  return post ? (
    <div className='py-8'>
        <Container>
            <PostFrom post={post}/>
        </Container>
    </div>
  ) : null
}

export default Editpost