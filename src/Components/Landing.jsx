import React from 'react'
import starRating from "../assets/star.png"
import person from "../assets/person.jpg"
import { BsUnlockFill } from 'react-icons/bs'
import { BiSolidBellRing } from 'react-icons/bi'


function Landing() {
  return (
    <div className='mt-5 flex flex-col gap-10  sm:items-center '>

{/* first */}
<div className='flex items-start flex-col
justify-start
gap-6
px-1
'>
<h2 className='text-6xl font-medium' >Find Your Dream  Remote Jop</h2>

<h2 className='text-2xl font-medium'> Search 60,000+ work from home jobs and get more jop interviews</h2>

</div>

{/* second */}
<div className='px-1 flex flex-col gap-3  w-fit sm:flex-row ' >

{/* persons */}
<div className='flex '>
<img src={person} alt="" className=' object-cover rounded-full   border2 w-12 '  />  
<img src={person} alt="" className='  object-cover rounded-full  border-2 w-12
' />
<img src={person} alt="" className='  object-cover rounded-full  border-2 w-12' />
<img src={person} alt="" className=' object-cover rounded-full  border-2 w-12' />

</div>


{/* rating */}
<div className='flex  flex-col gap-1 '>
    <img src={starRating} alt=""  className='w-32'/>
    <h3 className='font-medium text-l ml-1'>Loved by 10,000+ remote workers</h3>
</div>

{/* btns */}

</div>

<div className='text-white font-medium  flex flex-col  sm:flex-row gap-4'>
<button className='bg-gray-600 p-2 flex items-center gap-2 rounded-lg w-fit' ><BsUnlockFill  /> Unlock All Jobs</button>
<button  className='bg-gray-600 p-2 flex items-center gap-2 rounded-lg w-fit' > <BiSolidBellRing /> Receive Emails For Remote Jobs</button>
</div>
    </div>
  )
}

export default Landing