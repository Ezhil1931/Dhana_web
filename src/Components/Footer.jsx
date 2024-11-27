import React from 'react'
import './Animation.css'

import { searchLink } from '../Data/link'
function Footer() {
  return (
    <div  className="flex flex-col items-center  sm:flex-row sm:justify-between sm:items-start  bg-violet-950  w-full p-3 gap-2 ">
{
searchLink.map((data,id)=>(

<div key={id} className='flex flex-col  w-full  md:w-fit h-full text-white gap-1'>

<h3 className='font-semibold sm:text-xl text-lg '>{data.title}</h3>
{
  data.link.map((links,id)=>(
<a className='cursor-pointer hover:underline  sm:text-lg  text-sm' key={id} href=''>{links}</a>
  ))
}
</div>

))

}
    </div>
  )
}

export default Footer