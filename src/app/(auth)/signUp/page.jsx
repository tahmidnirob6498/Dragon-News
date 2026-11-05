"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';

const SignUp = () => {
    const [isShowPass,setIsShowPass]=useState(false)
 const {reset,handleSubmit,formState:{errors},register}=useForm()
 const handleSubmitFunc=async(data)=>{
  const {name,photo,email,password}=data
 
    const {data:res,error}=await authClient.signUp.email({
      name: name, // required, The name of the user.
    email: email, // required, The email address of the user.
    password: password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
    image: photo, // An optional profile image of the user.
    callbackURL:"/",
    })
 
if(res){
  reset()
}

if(error){
  alert("Something is problem")
}
 }

 

     return (
         
 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
       <div className="card-body">
         <form onSubmit={handleSubmit(handleSubmitFunc)} className="fieldset">
           <label className="label">Name</label>
           <input name='name' type="text" className="input" placeholder="Your Name"
           {...register("name",{required:"Name is required"})}
           />
           {errors.name && <p className='text-red-700'>{errors.name.message}</p>}
 
           <label className="label">Photo Url</label>
           <input name='photo' type="text" className="input" placeholder="Input your photo"
           {...register("photo",{required:"PhotoUrl is required"})}/>
           {errors.photo && <p className='text-red-700'>{errors.photos.message}</p>}
           <label className="label">Email</label>
           <input name='email' type="email" className="input" placeholder="Email"
           {...register("email",{required:"Email is required"})}
           />
           {errors.email && <p className='text-red-700'>{errors.email.message}</p>}
 
           <div className=' relative'> <input name='password' type={isShowPass ? "text" : "password"} className="input" placeholder="Password"
                     {...register("password",{required:"Password is required"})}/>
                     <span className='absolute top-3 right-5' onClick={()=>setIsShowPass(!isShowPass)}>{isShowPass ? <IoMdEyeOff /> : <FaEye/>}</span></div>
           
           <button className="btn btn-neutral mt-4">Register</button>
         </form>
        
       </div>
     </div>
         
     );
};

export default SignUp;