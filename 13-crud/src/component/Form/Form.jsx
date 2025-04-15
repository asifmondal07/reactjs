import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Buttons,Input,Select} from '../index'
import {useForm} from 'react-hook-form'
import ApiService from '../../Api/config'
import {token1234} from '../../key/key.js'


export default function Form({post}) {
  const navigate = useNavigate()
  
  const {register,handleSubmit,getValues,control, formState:{errors}} = useForm({
    defaultValues:{
      title:post?.title || "",
      content:post?.content || "",
      image:post?.image || "",
      status:post?.status || "active",
    }
  }) 

  const token = useSelector(state => state.auth?.token) || token1234

  const onSubmit = async (data) => {
    const res= await ApiService.createPost(data,token)
    if(res && res.Blog && res.Blog._id){
      alert("Blog Created Successfully")

      navigate(`/post/${res.Blog._id}`)
    }else {
      alert("Something went wrong")
    }
  }

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-wrap bg-white shadow-md rounded-xl p-6 gap-6 max-w-6xl mx-auto"
>
    <div className="w-full md:w-2/3 space-y-4">
        <Input
            label="Title :"
            placeholder="Enter the blog title"
            className="w-full"
            {...register("title", { required: "Title is required" })}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

    </div>

    <div className="w-full md:w-2/3 space-y-4">
      <Input
              label="content :"
              placeholder="Enter the blog content"
              className="w-full"
              {...register("content", { required: "content is required" })}
        />
        {errors.content && <p className="text-red-500 text-sm">{errors.content.message}</p>}
    </div>

    <div className="w-full md:w-1/3 space-y-4">
        <div>
            <label className="block text-gray-700 font-medium mb-1">
                Featured Images :
            </label>
            <Input
                type="file"
                multiple
                accept="image/*"
                className="block w-full text-sm border rounded-lg p-2 bg-gray-50"
                {...register("image[]", { required: !post })}
            />
        </div>

        <Select
            label="Status"
            options={["active", "inactive"]}
            className="w-full"
            {...register("status")}
        />

        <Buttons type="submit" className="w-full" ButtonsText={post ? "Update Blog" : "Add Blog"}>
            
        </Buttons>
    </div>
</form>
  )
}
