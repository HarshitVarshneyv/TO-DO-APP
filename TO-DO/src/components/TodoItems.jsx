import React from 'react'
import tick from '../assets/tick.png'
import untick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'
const TodoItems = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-2 gap-2'>

      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
           <img className='w-7' src={isComplete ? tick : untick} alt="" />
           <p className='text-slate-700 ml-4 text-17px'>{text}</p>
      </div>
      
      <div>
        <img onClick={()=>{deleteTodo(id)}} className='flex w-4 cursor-pointer' src={delete_icon} alt="" />

      </div>
    </div>
  )
}

export default TodoItems
