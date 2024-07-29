import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from './assets/logoBook.png';

function Nav({login,title}) {
  const navigat=useNavigate()
  const loginn=localStorage.getItem('id')==undefined
  const styleButton='bg-20 cursor-pointer text-gray-50 cursor-pointer px-2 p-1 rounded'
  return (
    // <></>
  <nav className='bg-transparent bg-60 p-2 text-xl
     flex items-center justify-between'>
   

   <Link to={'/'}    className='self-center mb-2  
    text-xl max-sm:text-lg p-2'>
      <img className='w-20' src={logo} alt="" />
      </Link>






   
    <ul style={{display:login==true?'none':''}}  className='flex
    max-sm:gap-2 max-sm:tex-sm
    gap-9 items-center  '>

 <li  style={{display:loginn?'none':''}} 
 >
   <Link to={'/Favorite'} className='opacity-100 cursor-pointer'>Favorite</Link> </li>
<li > 
 <Link to={'/'} className='opacity-100 cursor-pointer'> Home </Link></li>

 
   <li style={{display:loginn?'none':''}}  >
   <button className='text-3xl' onClick={()=>{
     localStorage.removeItem('id')
     navigat('/login')
   }}><ion-icon name="log-out-outline"></ion-icon></button> </li>
  <li style={{display:loginn?'':'none'}}  >
   <button className='' onClick={()=>{
     localStorage.removeItem('id')
     navigat('/login')
   }}>Login</button> </li>
 <li style={{display:loginn?'':'none'}}  >
   <button className='bg-20 p-2 rounded-md text-gray-200' onClick={()=>{
     localStorage.removeItem('id')
     navigat('/signUp')
   }}>SignUp</button> </li>
  
  
   </ul> 
     </nav>  
  )
}

export default Nav