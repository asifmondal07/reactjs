import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addTodo } from '../fetures/todo/todoSlice';

function AddTodo() {
    const [input,setInput]=useState("")

    const dispatch=useDispatch()
    
    const addtodoHandelar=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

    return (
        <form onSubmit={addtodoHandelar} className="flex">
            <input
                type="text"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default AddTodo