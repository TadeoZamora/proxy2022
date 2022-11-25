import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Http from '../services/Http'

type Props = {}

const Post = (props : Props) => {
    const {id} = useParams()
    const [ post , setPost ] = useState<any>(null)
    
    useEffect(()=>{
        if(id !== "0"){
            obtenerPost(`posts/${id}`)
        }
    },[])

    const obtenerPost = async(path : string) =>{
        const { data } = await new Http().get(path)
        setPost(data)
    }
    return (
                <div>Post { post?.title }</div>
    )
}

export default Post