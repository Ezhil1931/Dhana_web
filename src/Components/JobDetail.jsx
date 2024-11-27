import React from 'react'
import { jobListings } from '../Data/data'
import profile from "../assets/profile.jpg"

import { IoIosPeople } from 'react-icons/io'

function JobDetail() {
  return (
    <div className='flex flex-col gap-10  w-4/5 text-white lg:flex-row  ' >
{/* first */}
<  div  className='border-4 border-gray-500  rounded-lg  h-fit p-3  flex items-center flex-col gap-3  lg:w-2/4 '  >
    <img src={profile}  className='w-16 rounded-full ' />
    <h3 className='font-semibold ' > Phoenix info </h3>
   
   
    <div className='flex gap-2 flex-wrap'>
        <a href="" className='bg-gray-500 p-1 rounded-md' >Website</a>
        <a href="" className='bg-gray-500 p-1 rounded-md'   >LinkedIn</a>
        <a href=""  className='bg-gray-500 p-1 rounded-md' >All Job Opening</a>
    </div>

    <span className='flex items-center gap-1 bg-gray-600 p-1 rounded-full text-md'> 
      <IoIosPeople className=' sm:text-xl  text-lg'/>300
      
      </span>

</div>
{/* second */}
  
  <div className='flex flex-col gap-2' >
<h2 className='text-2xl font-semibold '>Jop name</h2>
<p className='text-gray-400' >1 day ago</p>

{/* sub link  */}
<div  className='flex gap-3'  >
<a href=""  className='bg-gray-500 p-1 rounded-md px-3 ' >Country</a>
<a href=""  className='bg-gray-500 p-1 rounded-md px-3' > Salary</a>
<a href=""  className='bg-gray-500 p-1 rounded-md px-3 ' >Part time</a>
<a href=""   className='bg-gray-500 p-1 rounded-md px-3'>Lead</a>
</div>

{/* btns */}
<div className='flex gap-2'>
    <button className='bg-violet-900 py-2 px-6 rounded-lg  ' >Apply Now</button>
    <button className='bg-gray-600 py-2 px-6 rounded-lg  '   >Receive Emails with Similar jobs</button>
</div>

{/* description */}


<ul className='  list-inside  list-item p-2 '>
<h3 className='font-semibold'>Description</h3>

<li  className='list-disc ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit optio quis blanditiis amet a mollitia ad perspiciatis ullam voluptatibus excepturi? </li>
<li className='list-disc '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, minima? </li>
<li className='list-disc ' >Lorem ipsum dolor sit amet.</li>
<li className='list-disc ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias fugit itaque iste! Nesciunt, laudantium.</li>

</ul>


{/* requirements */}

<ul className='  list-inside  list-item p-2 '>

<h3 className='font-semibold' >Requirements</h3>

<li  className='list-disc ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit optio quis blanditiis amet a mollitia ad perspiciatis ullam voluptatibus excepturi? </li>
<li className='list-disc '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, minima? </li>
<li className='list-disc ' >Lorem ipsum dolor sit amet.</li>
<li className='list-disc ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias fugit itaque iste! Nesciunt, laudantium.</li>

</ul>


  </div>

  
  {/* end */}
    </div>
  )
}

export default JobDetail