import React, { useState } from 'react'
import { faqData } from '../Data/data'
import  "./Animation.css"
import { FaArrowRight,FaArrowDown } from 'react-icons/fa' 
import { IoClose } from 'react-icons/io5'



function Faqitem({qst,ans}){

const [show,setShow]=useState(false);


return(

<div>
<div   className='flex flex-col overflow-hidden   faqcard'  >
<h4 className='sm:text-xl px-3  text-sm  border-b-2 pb-3 cursor-pointer flex items-center justify-between break-words  ' onClick={()=>setShow(!show)} >
  {qst}     { show ? <FaArrowDown/>:<FaArrowRight/>}  </h4>

 <p    className={`px-2 text-sm mt-2   transition-all duration-500  ${show? "h-20":"h-0" }`} >{ans}</p> 

</div>
</div>
)

}


function Faq() {
const Faq=faqData;

    return (
    <div className='text-white flex flex-col items-center  gap-4  md:w-3/5'>
<div className='flex flex-col items-center md:flex-row md:gap-3'>
<h3  className='md:text-4xl text-3xl '>Frequently asked </h3>
<h3  className='md:text-4xl text-3xl ' >questions</h3> 

</div>

<div className='flex flex-col gap-3 w-full ' id="qst">
{
    Faq.map((data,id)=>(
<Faqitem  ans={data.answer}  key={id} qst={data.question} />
    
    ))
}

</div>

    </div>
  )
}

export default Faq