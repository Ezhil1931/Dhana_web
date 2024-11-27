import React from 'react'

import { states,salaryRanges ,employmentTypes,techStacks,experienceLevels, companySizes, degreeRequired } from '../Data/data'
import Select from "react-select"
function Filter() {
  
const change={
    control:(styles)=>({...styles,backgroundColor:"black",width:"200px",borderRadius:"10px",color:"black"}),

    option:(styles,{isDisabled,isFocused,isSelected})=>({
...styles,backgroundColor:"black",color:"white",width:"100%",':hover':{backgroundColor:"white",color:"black"}
    }),
   
} 
    
  return (

    <div className='flex flex-col gap-2  
    items-start
    sm:justify-center sm:items-center sm:w-fit w-full '>

    <div className='  flex  flex-wrap gap-2  p-1 text-l font-medium '>


<Select options={states} className='w-fit' placeholder="State" styles={change} />
<Select options={employmentTypes} className='w-fit' placeholder="Employe Type" styles={change} />
<Select options={companySizes} className='w-fit' placeholder="Company Size" styles={change} />
<Select options={techStacks} className='w-fit' placeholder="TechStacks" styles={change} />
<Select options={experienceLevels} className='w-fit' placeholder="Experience" styles={change} />
<Select options={salaryRanges} className='w-fit' placeholder="SalaryRange" styles={change} />
<Select options={degreeRequired} className='w-fit' placeholder="Degree" styles={change} />

</div>
<hr className='h-1 bg-gray-500 rounded-full border-none outline-none w-full'/>
<div className='flex   justify-between sm:w-3/5 w-full     items-center text-white font-medium ' >
  <h3  className='underline'>75,909 jops</h3>
  <Select options={degreeRequired} className='w-fit' placeholder="Degree" styles={change} />

</div>
</div>

)
}

export default Filter