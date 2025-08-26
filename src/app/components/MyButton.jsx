import React from 'react'
import { bgMain } from '../config'

function MyButton(props) {
  const { label,type,className,size } = props
  return (
    <button
    style={{fontSize:size?size:'15px',borderRadius:'100px'}}
      className={type === 'fill' ? `${className}  bg-[#0EBAB1] text-[white] px-3 py-2 rounded-[100px] font-light  cursor-pointer 
             border-1 border-transparent 
             hover:bg-transparent hover:text-[black] hover:border-[#0EBAB1] 
             transition-all duration-300 text-nowrap` :
            `${className} w-[100%] bg-[transparent] text-[#0EBAB1] px-3 py-2 rounded-[100px] font-light  cursor-pointer 
             border-1 border-[#0EBAB1] 
             hover:bg-[#0EBAB1] hover:text-[white] hover:border-transparent
             transition-all duration-300 text-nowrap`
            }
    >
      {label}
    </button>


  )
}

export default MyButton