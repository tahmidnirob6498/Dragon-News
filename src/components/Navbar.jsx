'use client'
import Link from 'next/link';
import React from 'react';
import profile from '@/assets/user.png';
import Image from 'next/image';
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
const {data}=authClient.useSession()
const userData=data?.user



    return (
        <div className='flex justify-between items-center mx-5 my-7'>
            <div></div>
            <ul className='flex gap-4 py-3'>
                <li><Navlink href="/">Home</Navlink></li>
                <li><Navlink href="/about">About</Navlink></li>
                <li><Navlink href="/career">Career</Navlink></li>
            </ul>
                 {
                    userData ? 
                    
                    <div className='flex items-center gap-2'>
                           <h1>{userData?.name}</h1>
                 <Image src={userData?.image} alt="Profile" width={40} height={40} />
               <button className='btn bg-blue-600 text-white' onClick={()=>authClient.signOut()}>Logout</button> </div>
                :    
                <div className='flex items-center gap-2'>
               <Image src={profile} alt="Profile" width={40} height={40} />
               <Link href="/signIn" className='btn bg-blue-500 text-white py-2 px-3 ml-2'>Login</Link>
                     
                 </div>
                
                 }
            </div>
    );
};

export default Navbar;