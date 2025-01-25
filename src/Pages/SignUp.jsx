import React from 'react'
import { Link } from 'react-router-dom'
import Signin from '../assets/zea.avif'

const SignUp = () => {

    const handleInputChange = (e)=>{
        e.target.value
    }

  return (
    <div className='h-[100vh] bg-[#0b0e20]  text-white py-20 mb-20 '>
    {/* SignUp Container Starts Here */}

    <div className='flex bg-[#0b0e20] h-[100vh] w-full'>
            {/* Left Div */}
       <div className='relative'>
       <div>
            <img  className='w-[550px] h-[500px] ml-10 rounded-3xl -mt-10 '
            src={Signin} alt="SignInImage"  />
        </div>

{/* Overlay text Starts here */}
<div className=''>
<Link to='/home'><h1 className='inline absolute top-1 right-10 bg-blue-700 text-white px-2 py-1 rounded-lg cursor-pointer'>Back to Home</h1></Link>
<li className='inline absolute top-0 left-12 font-logoFont0 text-[18px]  text-blue-900  '>Gee<span className="text-white font-medium">ksStore </span></li>
<h1 className='inline absolute top-96 left-36 text-[20px] text-white font-serif'>Sign Up to Beautiful Experience With Geeks</h1>
</div>


{/* Overlay text ends here */}

       </div>
{/* Right DIv Starts Here */}
        <div >

        {/* Header Starts Her */}
        <h1 className='text-white font-bodyFont text-[40px] -ml-12 font-bold text-center'>Create Account</h1>
        {/* Header Ends Here */}



{/*     Form Starts here */}

<div className='mt-4 mx-20'>

<div className='flex gap-4 '>
<input type="text" placeholder='First Name'  className='bg-[#0b0e20] border border-white text-white py-1 px-8 rounded-lg '/>
<input type="text" placeholder='Last Name'  className='bg-[#0b0e20] border border-white text-white py-1 px-8 rounded-lg '/>
</div>

<div className='my-4'>
<input type="text" placeholder='Email'  className='bg-[#0b0e20]  border border-white text-white w-full py-1 px-8 rounded-lg my-2 '/>
<input type="text" placeholder='create password' className='bg-[#0b0e20] border border-white text-white w-full py-1 px-8 rounded-lg  my-4'/>

<div className=''>
<input type="checkbox" name="" id="agreement" />
<label htmlFor="agreement" className='text-white font-bodyFont text-[18px]'> I agree to the terms and condition</label>
</div>

<div>
<button className='bg-[#171e44] w-full text-white p-2 mt-8 rounded-lg font-serif text-[19px] cursor-pointer'>Sign Up</button> 
<Link to='/sigin' ><p className='text-center underline cursor-pointer hover:text-[#6476db]'>signin</p>  </Link>
</div>
</div>

</div>
{/* Form Ends Here */}

        </div>
        {/* Right Div Ends Here */}


    </div>

    {/* SignUp container Ends Here */}
  
</div>
  )
}

export default SignUp
