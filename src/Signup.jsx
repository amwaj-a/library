import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import imgHero1 from './assets/herop.png';
function Signup() {
    const [api, setapi] = useState([]);
    const [errorText, seterrorText] = useState({});
  const navigate= useNavigate()
const postApi=()=>{

    if(api.name==undefined||api.password==undefined|| api.email==undefined)
       {seterrorText({...errorText,'all':'must be all file not empty'})}


else if(api.name.length<3){
seterrorText({...errorText,'name':'must be more 3 charchters','all':''})

}
else if(!api.email.match
    (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
))
{seterrorText({...errorText,'email':'Please enter vaild an email','all':'','name':''})}

else if(api.password.length<6)
    {seterrorText({...errorText,'password':'Password must be at least 6 ','all':'','name':'','email':''})}
    
    else{
        // alert('pppppp')
        axios.post('https://6689ba9f0ea28ca88b88bd30.mockapi.io/book',{
            'name':api.name ,
            'password':api.password ,
           'email':api.email ,
    
        }).then(e=>{
// alert('llll')
seterrorText({})
localStorage.setItem('id',e.data.id)
navigate('/')
        })
    }

}

  return (

  <section className='bg-60 
  relative rounded-md
   flex 
   justify-center items-center h-screen'>
<section className='w-[70%] h-[70%] max-sm:h-max 
 max-md:w-full max-md:mx-6 bg-opacity-60 bg-white '>
{/* <Nav login={true}  title='signUp'/> */}
 <section  className='h-full
  max-sm:items-center max-sm:flex-col flex mt-3'>
    <img  className='mt-10 w-[50%] h-[50vh]  max-sm:w-[70%]  max-sm:h-[70%] ' src={imgHero1} alt="" />
 <div className='w-[50%] max-sm:w-full 
justify-center
  gap-3 flex flex-col 
  items-center h-full
   font-sans text-base '>
    <h1 className='text-4xl 
    text-center font-extrabold'>Get started</h1>
  <p className='text-center opacity-70 text-lg '>We are limited only by our imagination</p>
  
  <label className="bg-gray-300 relative  w-[60%]  
  items-center   rounded-md  px-2 p-3  flex">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-6 w-6 opacity-50 mx-2">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input  onChange={(e)=>{
setapi({...api,'name':e.target.value})
  }} type="text"
   className="
     bg-transparent  placeholder:text-gray-500
   focus:outline-none placeholder:text-xl
   "
   placeholder="Full Name" />
   <span className='text-red-500 absolute -bottom-5 text-sm'>{errorText.name}</span>

</label>

<label  className="bg-gray-300 mt-3   w-[60%]
   items-center  relative rounded-md  p-3 flex">
 
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-6 w-6 opacity-50 mx-2">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="email"  onChange={(e)=>{
setapi({...api,'email':e.target.value})
  }}  className="
    bg-transparent  placeholder:text-gray-500
   focus:outline-none placeholder:text-xl
   " placeholder="E-mail" />
      <span className='text-red-500 absolute -bottom-5 text-sm'>{errorText.email}</span>

</label>  
<label  className="bg-gray-300
   w-[60%] mt-3  p-3
   items-center
   rounded-md  px-2 
  flex">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-6 w-6 opacity-50 mx-2">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input onChange={(e)=>{
setapi({...api,'password':e.target.value})
  }}type="password"    className="
      bg-transparent  placeholder:text-gray-500
   focus:outline-none placeholder:text-xl
   " placeholder="password" />

</label>
<span className='text-red-500 text-sm'>{errorText.password}</span>

<button onClick={postApi} className='bg-40
 text-gray-50 px-2 p-3 rounded-md w-[60%] '>Create Free Account</button>

<span className='text-red-500'>{errorText.all}</span>
<span>Do have an account? <Link
 className='px-2 cursor-pointer text-20 font-bold'
  to='/Login'>Login.
</Link> </span>

<br />
</div>
 </section>


</section>


{/* <div className='absolute -bottom-32 -left-20 w-60 h-60 bg-20 rounded-full'></div> */}

{/* <div className='absolute -bottom-20 -left-20 w-80 h-80 bg-20 rounded-full'></div> */}
  </section>



  );
}
export default Signup;
