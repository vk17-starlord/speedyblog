
import  { useState } from 'react'
import Button from './Button';
import Input from './Input';

function InstantInput({addElement}) {
  const [localInput, setlocalInput] = useState("");
  
  const handleInputChange = (event) => {
    setlocalInput(event.target.value)
  };

  const onSubmit = ()=>{
    if(localInput!="" & localInput.length>0){
        addElement(localInput)
        setlocalInput("")
    }
  }

  return (
    <div>
         <h1  className="mb-2 text-md font-medium  text-gray-900  ">Add Relevant Keywords</h1>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <i className='bx bxs-key'></i>
        </div>
        <input value={localInput} onChange={handleInputChange} type="search" id="keyword" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Toy , Bed , Cricket ... etc" required />
        <Button onClick={onSubmit} className='absolute right-1 top-1'>Add Keyword</Button>
    </div>



    </div>
  )
}

export default InstantInput