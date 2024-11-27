import React, { useState } from 'react'
import { BiShow } from 'react-icons/bi'
import { BiHide } from 'react-icons/bi';

function Login( ) {
  
  
  const [show,setShow]=useState(false);
  
    return (

<div className='  lg:w-2/4  md:3/5  w-full  flex flex-col  gap-4 '>
<h3 className='text-3xl font-semibold text-center  '>Login</h3>
  
<div  className='flex flex-col items-start gap-4  border-2  border-black rounded-lg   w-full p-5   '>

<input type="text" className= 'w-4/5  sm:w-2/4 rounded-md outline-none p-1  px-2  sm:text-lg   border-2 border-black ' placeholder='email' required />


<div className='w-4/5  sm:w-2/4  flex relative  overflow-hidden   border-black border-2 rounded-md '>

<input    type={ show? "text" : "password"}   className='w-full    outline-none  p-1 sm:text-lg  px-2 '    placeholder='passsword'  required/>
 
{ show? 
    <BiHide className='absolute right-2 cursor-pointer text-2xl z-10  h-full bg-white  '  onClick={()=>setShow(!show)}  /> : <BiShow className='absolute right-2  cursor-pointer text-2xl z-10   h-full bg-white'  onClick={()=>setShow(!show)}/>

   }

</div>
<button className='bg-orange-600 px-5 py-1 rounded-lg  cursor-pointer font-semibold '>Login</button>
    </div>
  
</div>

  )
}

export default Login