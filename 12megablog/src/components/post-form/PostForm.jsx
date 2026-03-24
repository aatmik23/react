import React,{useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button,Input,RTE,Select} from "../index"
import appwriteService from "../../appwrite/config"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PostForm({post}) {

    const {register,handleSubmit,watch,setValue,control,getValues } = useForm({
        defaultValues:{
            title: post?.title || "",
            slug: post?.id || "",
            content: post?.content || "",
            status: post?.status || "active",
        }
    })

    const navigate = useNavigate()
    const userData = useSelector((state)=> state.auth.userData)

    const submit = async (data)=>{

        if(post){
            const file = data.image[0] ? await appwriteService.uploadfile(data.image[0]) : null 

            if(file){
                appwriteService.deletefile(post.featuredImage)
            }

            const dbPost = await appwriteService.updatepost(post.$id,{
                ...data,
                featuredImage: file ? file.$id : undefined
            })
             
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        }

        else{
            const file = await appwriteService.uploadfile(data.image[0])

            if(file){
                const fileId = file.$id
                data.featuredImage = fileId
                const dbPost = await appwriteService.createpost({...data, userId : userData.$id})

                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }



    }






  return (
    <div>PostForm</div>
  )
}

