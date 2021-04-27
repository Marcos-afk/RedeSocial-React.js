import React,{useCallback, useEffect, useState} from 'react'
import axios from '../../utils/axios'
import  PostView from '../../components/PostView/index'
import { useParams} from 'react-router-dom'


export default function Post(){

    const [post, setPost] = useState([])

    const params = useParams()
    const getPost = useCallback(async () => {
        const feed =  await axios.get( `api/post/${params.slug}`)
        setPost(feed.data)

    },[setPost, params.slug])

    useEffect(()=>{
            getPost()
    },[getPost])
    
    return <PostView post ={ post}/>
    
}