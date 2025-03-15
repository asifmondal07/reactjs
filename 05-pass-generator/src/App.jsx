import { useState,useCallback,useEffect,useRef } from 'react'



function App() {
  const [length,setlength] = useState(8)
  const [addnumber,setaddnumber]=useState(false);
  const [addcharector,setaddcherector]=useState(false);
  const [password,setpassword]=useState("")

  const passwordGenerator=useCallback(()=>{
   let pass="";
   let str="abcdefghijklmnopkrstuvwxyzABCDEFGHIJKLMNOPKRSTUVWXYZ";
    if(addnumber) str +="0123456789";
    if(addcharector) str+="!@#$%^&*()_+=-`~[]\{}|/<>?"

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char);
    }
    setpassword(pass)
  } , [length,addnumber,addcharector,setpassword]);

  // useEffect
  useEffect(()=>{
    passwordGenerator()
  },[length,addnumber,addcharector,passwordGenerator]);

  //useRef

  let passwordRef=useRef(null);

  let passwordCopyClibBoard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  },[password])


  return (
    <>
    <div className="flex  justify-center  min-h-screen bg-gray-800">
      <div className='w-full max-w-md max-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
          <h1 className='text-white text-center'>Password Generator</h1>
            <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input type="text"
                    value={password}
                    className='outline-none bg-amber-100 w-full py-1 px-3'
                    placeholder='Password'
                    readOnly
                    ref={passwordRef}
              />
              <button
                onClick={passwordCopyClibBoard} 
                className='outline-none bg-blue-700  text-white px-3 py-0.5 shrink-0'>
                copy
              </button>
            </div>
            <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                <input type="range"
                    min={6}
                    max={100}
                    value={length }
                    className='cursor-pointer'
                    onChange={(e)=>{setlength(e.target.value)}}
                />
                <label> length:{length}</label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input type="checkbox"
                    
                    value={addnumber }
                    className='cursor-pointer'
                    onChange={()=>{setaddnumber((prev)=>!prev)}}
                />
                <label> Numbers</label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input type="checkbox"
                    
                    value={addcharector }
                    className='cursor-pointer'
                    onChange={()=>{setaddcherector((prev)=>!prev)}}
                />
                <label>Charector</label>
              </div>
            </div>
      </div>
    </div>
      

    </>
  )
}

export default App

