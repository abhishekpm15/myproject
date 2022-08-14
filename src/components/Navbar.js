import React from 'react'
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    let navigate = useNavigate();     
    const[colors,setColors] = useState('green')
    const[colors2,setColors2]=useState('green')
    const[colors3,setColors3]=useState('green');

  return (
    <div className='mx-1 my-1'>
        <div className='py-1'>
            <Button onClick={()=>{navigate("/Home")}} onChange={()=>{setColors((colors)=>(colors==='green' ? 'red' :'green'))}} className='px-5 mx-5' color={colors} size='sm'>Home</Button>
            <Button onClick={()=>{navigate("/About");setColors2((colors2)=>(colors2==='green' ? 'red' :'green'))}} className='px-5 mx-5' color={colors2} size='sm' >About</Button>
            <Button onClick={()=>{navigate("/Contact");setColors3((colors3)=>(colors3==='green' ? 'red' :'green'))}} className='px-5 mx-5' color={colors3} size='sm'>Contact</Button>
        </div>
    </div>
  )
}

export default Navbar