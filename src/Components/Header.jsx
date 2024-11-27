import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='md:w-4/5 flex flex-row  justify-between  pt-10  m-4 w-full '>

{/* left side */}
<div className="">
<h1>Web site logo</h1>
</div>


{/* rightside */}
<div className="flex flex-row  justify-center gap-8 align-middle ">

<div className='hidden flex-row gap-6 text-lg font-semibold justify-center items-center md:flex  text-white'>
<Link to={"/post_jobs"} >    <h3 className='border-b-2 cursor-pointer hover:scale-105 transition-all duration-200' >Post a jop</h3> 
</Link>

</div>

{/* buttons */}


<div className='flex sm:gap-8   gap-2'>


<Link to={"/login"} >  <button className='bg-red-100 outline-none sm:px-4 sm:py-2 px-2 py-1 font-medium text-l rounded-md ' >Log in</button>
</Link>

<button  className=' bg-green-100 outline-none sm:px-4 sm:py-2 px-2 py-1 font-medium text-l rounded-md break-words '>Sign up</button>

</div>

</div>

    </div>
  )
}

export default Header