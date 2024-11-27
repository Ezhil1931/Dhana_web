import React from 'react'

import { reviews } from '../Data/data'

import starRating from "../assets/star.png"
import profile from "../assets/profile.jpg"


function Reviews() {
  return (
    <div className='flex flex-col text-white items-center md:w-3/5 md:px-3 ' >
        <h3 className='md:text-5xl my-3 text-3xl font-semibold' >Wall of Love</h3>


<div className='flex flex-col gap-3 font-semibold sm:grid sm:grid-cols-2  lg:grid-cols-3 '>
{
reviews.map((data,id)=>(
<div key={id} className='border-2 border-black rounded-lg p-3 break-words
h-fit
'>

{/* 1 */}
<div className='flex gap-3'>
    <img src={profile}  className='w-12 rounded-full object-cover  '/>
    <div>
<h4 >{data.name}</h4>
<span className='text-sm' >{data.role}</span>
</div>
</div>

{/* 2 */}
<img src={starRating} className='w-32'/>

<p>{data.review}</p>

<span   className='text-gray-500' >{data.postedDate}</span>
</div>        

    ))
}

</div>
    
    
    
    </div>
  )
}

export default Reviews