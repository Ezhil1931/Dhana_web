import React, { useState } from 'react'
import Filter from './Filter'
import {jobListings} from "../Data/data.js"
import logo from "../assets/logo.png"

import { IoIosPeople } from 'react-icons/io'

import './Animation.css'

function Jops() {
  
 

  return (
    <div className='container  flex  w-full  md:w-3/5 flex-col items-center gap-2'>
{/* first */}
<div className='w-full flex  md:justify-center justify-start ' >
<Filter  />

</div>

{/* second */}

<div className='flex flex-col gap-3 w-full'>
{
  jobListings.map((data,id)=>(

<div key={id}  className='border-red-500  border-2 p-4 rounded-xl font-medium text-white cursor-pointer flex flex-col sm:gap-2 relative gap-4 hover:bg-gray-500 bg-gray-800 
' id='card' > 

{/* logo jop role */}
<div className='flex gap-3 items-center '>
  <img src={logo} className='w-10 obj/ect-cover  rounded-full border-white border-2 '/>
  <h4 className='font-bold text-lg ' >{data.jobRole}</h4>

{/* apply btn */}
<div className='absolute right-2   gap-2 items-center sm:flex  hidden  ' id='apply-btn' >
  <button className='bg-gray-600 outline-none px-4 py-2 font-medium text-l rounded-md '  >View Jop</button>
  <button className='bg-violet-500 outline-none px-4 py-2 font-medium text-l rounded-md ' >Apply</button>
</div>

</div>

<span className='text-gray-400  text-sm ' >{data.postedTime}</span> 

{/* name and size */}

<div className='flex gap-5 items-center'>
  <h4 className='font-normal border-b-2 mb-1 p-0 '>{data.companyName}</h4>
<span className='flex items-center gap-1 bg-gray-600 px-1 rounded-full text-md'> < IoIosPeople className=' sm:text-xl  text-lg'/>{data.companySize}</span>
</div>

{/* other info */}
<div className='flex justify-start gap-5  sm:mt-4'>
  <a href="" className='bg-gray-500 px-2 py-1 rounded-md  text-sm  ' >Website</a>
  <a href=""  className='bg-gray-500 px-2  py-1 rounded-md text-sm '  >LinkedIn</a>
  <a href=""  className='bg-gray-500 px-2  py-1 rounded-md text-sm '  >All Jop Openings</a>

</div>

  <p className='font-normal'>{data.jobDescription}</p>


<div className='flex justify-between flex-wrap gap-2 '>

<button className='px-2 py-1 bg-gray-700 rounded-full border-white border-2 w-fit text-sm ' >{data.state}</button>
<button  className='px-2 py-1 bg-gray-700 rounded-full border-white border-2  w-fit  text-sm ' >{data.salaryPackage}</button>
<button className='px-2 py-1 bg-gray-700 rounded-full border-white border-2  w-fit   text-sm'  >{data.employmentType}</button>
<button  className='px-2 py-1 bg-gray-700 rounded-full border-white border-2 w-fit  text-sm '  >{data.experienceLevel}</button>

</div>

</div>

  ))
}

</div>

    </div>
  )
}

export default Jops