'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from 'react-icons/io';

const SignIn = () => {
  const [isShowPass,setIsShowPass]=useState(false)
const {handleSubmit,formState:{errors},register}=useForm()
const handleSubmitFunc=async(data)=>{
  const {email,password}=data
const{data:res,error}=await authClient.signIn.email(
  {
      email: email,
    password: password,   
    callbackURL: '/',   
  }
)
console.log(res,error)

}

    return (
        
<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <form onSubmit={handleSubmit(handleSubmitFunc)} className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email"
          {...register("email",{required:"Email is required"})}
          />
          {errors.email && <p className='text-red-700'>{errors.email.message}</p>}

          <label className="label">Password</label>
         <div className=' relative'> <input name='password' type={isShowPass ? "text" : "password"} className="input" placeholder="Password"
          {...register("password",{required:"Password is required"})}/>
          <span className='absolute top-3 right-5' onClick={()=>setIsShowPass(!isShowPass)}>{isShowPass ? <IoMdEyeOff /> : <FaEye/>}</span></div>
          {errors.password && <p className='text-red-700'>{errors.password.message}</p>}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <div>Dont’t Have An Account ? <Link href="/signUp" className='text-blue-800'>Register</Link></div>
      </div>
    </div>
        
    );
};

export default SignIn;