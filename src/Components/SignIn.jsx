import React from 'react'
import { FaPersonRunning } from 'react-icons/fa6'
import starRating from "../assets/star.png"
import person from "../assets/person.jpg"

import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { TbWorldSearch } from 'react-icons/tb'


function SignIn() {
  
  
  
  const [show,setShow]=useState(false);
   
    return (
    <div  className='flex flex-col gap-3 items-center text-xl text-white md:w-3/5 sm:p-4  w-full  '>
<h4  className=' font-semibold text-2xl '>+77,048 More Jops Available!</h4>
<h4 className='font-normal '>Join now to unlock all job opportunities.</h4>

{/* card */}
<div className='flex flex-col items-center border-2 p-9 gap-5 rounded-lg'>
<h3 className='sm:text-3xl font-semibold text-2xl' >Get more jobs interviews</h3>

{/* 1 */}

<div className='flex gap-7 items-center  justify-between h-fit   w-full '>

<TbWorldSearch className='bg-gray-500 text-5xl h-fit  p-1 rounded-md   '/>
<div className='flex flex-col gap-0  flex-1 '>
<h4 className=' text-lg  font-semibold '>Discover hidden jobs</h4>
<p className='sm:text-lg text-sm text-gray-400   '>We scan the internet everyday ad find jops not posted on LinkedIn or other job boards.</p>
</div>

</div>

{/* 2 */}


<div className='flex  gap-7 items-center  justify-between  '>

<FaPersonRunning className='bg-gray-500 text-5xl h-fit  p-1 rounded-md  '/>
<div className='flex flex-col gap-0  flex-1'>
<h4 className=' text-lg  font-semibold'>Head start against the competition</h4>
<p className='sm:text-lg text-sm text-gray-400  '>We find jobs with in 24 hours of being posted ,so you can  apply before everyone else.</p>
</div>

</div>

{/* 3 */}

<div className='flex gap-7 items-center  justify-between w-full '>

< MdOutlineMarkEmailRead className='bg-gray-500 text-5xl h-fit  p-1 rounded-md  '/>

<div className='flex flex-col gap-0 flex-1'>
<h4 className=' text-lg font-semibold'>Be first to know</h4>
<p className='sm:text-lg text-sm text-gray-400 '>Daily emails with new jop opening straight to your inbox.</p>
</div>

</div>
 
  

  <div className='flex '>
<img src={person} alt="" className=' object-cover rounded-full   border2 w-12 '  />  
<img src={person} alt="" className='  object-cover rounded-full  border-2 w-12
' />
<img src={person} alt="" className='  object-cover rounded-full  border-2 w-12' />
<img src={person} alt="" className=' object-cover rounded-full  border-2 w-12' />

</div>

{/* sig up */}



<div className='  lg:w-2/4  md:3/5  w-full  flex flex-col  gap-4 '>
<h3 className='text-3xl font-semibold text-center  '>Sign up</h3>

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



{/* rating */}
<div className='flex  flex-col gap-1 '>
    <img src={starRating} alt=""  className='w-32'/>
    <h3 className='font-medium text-l ml-1'>Loved by 10,000+ remote workers</h3>
</div>

</div> 

   {/* card end */}
   



    </div>
  )
}

export default SignIn