'use client'
import image1 from '@/assets/swimming.png'
import image2 from '@/assets/playground.png'
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
const RightSideBar = () => {
    const loginWithGoogle=async()=>{
  const data = await authClient.signIn.social({
    provider: "google",
  });

console.log(data)
};

  
    return (
        <div>
            <div>
                <h1 className='text-lg font-bold'>Login with</h1>
                <div className='flex flex-col gap-2 my-2'>
                    <button onClick={loginWithGoogle} className='btn p-1 border border-blue-600 text-blue-400'>Login with google</button>
                    <button className='btn p-1 border border-gray-800 text-gray-800'>Login with github</button>
                </div>
            </div>
            <div>
                <h1 className='text-lg font-bold'>Find us on</h1>
                 <div className='flex flex-col gap-2 my-2'>
                 <button className='bg-gray-100 hover:bg-gray-200'>Facebook</button>
                    <button className='bg-gray-100 hover:bg-gray-200'>Twitter</button>    
                <button className='bg-gray-100 hover:bg-gray-200'>Instagram</button>
                 </div>
            </div>
            <div>
                <h1>Q-Zone</h1>
                <div>
                    <Image src={image1} alt="Swimming" />
                    <Image src={image2} alt="Playground" />
                </div>

            </div>
        </div>
    );

}
export default RightSideBar;