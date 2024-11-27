import React from 'react'
import { ReactTyped } from "react-typed"



function Postjob() {
 
 const description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo sequi perspiciatis quis reiciendis eaque minima cupiditate quasi quidem doloribus delectus laboriosam dolore dicta dignissimos autem asperiores culpa magnam qui, iusto suscipit temporibus quas voluptas? Eum repudiandae obcaecati asperiores laborum ab recusandae quibusdam minima"
 
 
 
    return (
    <div  className='flex flex-col gap-3 md:w-3/5 '>

<h3 className='text-4xl font-bold text-center'>Reach over 300,000 Remote Workers</h3>



{/* second */}
<div className='border-2 p-4 rounded-lg flex flex-col  gap-4 font-semibold '>

<div className='  flex flex-col gap-3 '>

<h4 className='text-2xl font-semibold '>Post a New Jop</h4>

Reach over 300,000 remote workers every month.See full breakdown of our visitor by country below.

<div className='flex flex-col gap-1 w-full sm:w-3/5 '>
    <h4 className=' pl-2 ' >Jop Title </h4>
    <input   type='text' className='outline-none p-2 rounded-lg border-gray-700 border-2'  placeholder='Jop title' />
</div>




<div  className='flex flex-col w-full sm:w-3/5 gap-1 '>
    <h4 className=' pl-2 ' >Company home page.Please include https://</h4>
    <input  type='text' className='outline-none  p-2 rounded-lg border-gray-700 border-2' placeholder='Link to company homepage'/>
</div>


    
<div  className='flex flex-col w-full sm:w-3/5 gap-1 '>
    <h4 className=' pl-2 ' >Company LinkedIn page.Please include https://</h4>
    <input type='text' className='outline-none p-2 rounded-lg  border-gray-700 border-2 ' placeholder='https://linkedin.com/company/..' />
</div>



<div  className='flex flex-col  w-full sm:w-3/5 gap-1  relative '>
    <h4 className=' pl-2 ' > Enter promt to get description Using Ai </h4>
    <input  type='text' className='outline-none p-2 rounded-lg border-gray-700 border-2 ' placeholder='..' />

<button className='bg-gray-700 rounded-md cursor-pointer hover:bg-gray-500' >Get</button>
</div>

</div>
{/* promt response */}
<div  className='bg-gray-500 w-full p-3 rounded-lg text-white border-black border-2   '  >
    <h4 className='underline ' >Your decription:</h4>

    <ReactTyped 
    strings={[description]}
    className=' w-full list-disc list-item list-inside font-normal  ' />
</div>



{/* btn */}
<div className='w-full 

flex justify-end '>
    <button className=' bg-violet-950 text-white p-3 rounded-lg' >Post a Jop</button>
</div>


</div>
{/* second end */}



    </div>
  )
}

export default Postjob