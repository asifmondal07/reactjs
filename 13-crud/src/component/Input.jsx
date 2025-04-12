import React,{useId} from 'react'

const Input=React.forwardRef(function Input({
    label,
    placeholder,
    type='text',
    ...props
},ref){
    const id=useId()
    return (
        <div className='flex flex-col gap-2'>
        <label htmlFor={id} className='text-sm font-medium text-gray-700'>Label</label>
        <input type="text" id={id} ref={ref} className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Placeholder' />
        </div>
    )
}
)
export default Input
