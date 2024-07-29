import { useState, useEffect } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import Nav from './Nav';
import imgHero from './assets/hero.png';
// import imgHero1 from './assets/herop.png';
import Footer from './Footer';
function About() {
  const [api, setapi] = useState([]);
  // const [fliter, setfilter] = useState([]);
  const [search, setsearch] = useState('');
const navigate=  useNavigate()



  return (

    <section className=' font-serif text-lg' >
      <section className='relative bg-60 h-96'>
<Nav  />
<div className='flex-col items-center flex justify-center'>
    {/* <h1 className='text-3xl'>About US</h1> */}
<p className='w-[40%] mt-5 '>
Welcome ! We provide a platform for book enthusiasts to easily explore and browse book titles and their details. You can search for your favorite books and save them for quick access later. Our goal is to facilitate access to cultural information and content in an organized and flexible manner.

</p>

</div>



 </section>




<section className='flex m-auto w-[90%]'>
<div className='flex-col w-[40%] items-center flex justify-center'>
    <h1 className='text-3xl'>Features of Our Website</h1>
    <ul className='list-disc ms-14'> <li>Easy browsing and exploration of books.</li>
    
    
    <li>Save favorite books for quick access.</li>
    <li>Filter search by titles, genres, or age groups.</li>
    </ul>
</div>
<div className='w-[40%] flex justify-end'>

<img className='' src="https://miro.medium.com/v2/resize:fit:920/1*IV4-b0MPf5o2tKygKoDzWw@2x.jpeg" alt="" />


</div>
</section>



    <div className="
     bg-60 
   ">






{/* <h1 className='w-20
 m-auto text-3xl mt-9 mb-3 text-40 text-center font-extrabold'></h1>
 */}






    </div>
  
    
    
    
    
  <Footer/>
    
    </section>



  );
}
export default About;
