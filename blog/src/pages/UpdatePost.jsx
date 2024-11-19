import {useState,useEffect} from 'react'
import {Container, PostForm} from '../components'
import databaseService from '../appwrite/database'
import { useNavigate, useParams } from 'react-router-dom'


function UpdatePost() {
  const [Post, setPost] = useState(null)
  const {slug} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if(slug){
      databaseService.getPost((slug).then((post)=>{
        if(post){
          setPost(post);
        }
        else{
          navigate('/')
        }
      }))
    }
  }, [slug,navigate])
  

  return Post? (
    <>
      <Container>
        <PostForm post={Post}/>
      </Container>
    </>
  ) : null
}

export default UpdatePost