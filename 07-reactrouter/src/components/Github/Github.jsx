import React from 'react'
import { useLoaderData } from 'react-router'



function Github() {
    const data=useLoaderData()
    console.log(data)
  return (
    <div className='bg-black  text-3xl text-amber-100 p-4'>
        <h4 className='flex justify-center p-1 text-3xl text-blue-200'>Github UserName : {data.login}</h4>
        <h2 className='pb-6 text-4xl text-blue-300'>Github Follwers : {data.followers}</h2>
        <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github


export const githubLoader =async()=> {
    const response=await fetch('https://api.github.com/users/asifmondal07')
    return response.json()
}