import React from 'react';
import RightSideBar from './RightSideBar';
import Category from './Category';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';


const AllNews = ({ news }) => {
   
    if(!news){
     redirect("/category/0")
    
    }
     const {_id,author,title,rating,details,image_url}=news
    return (
       <div className="card bg-base-100 shadow-xl my-5 p-3">
        <div className='flex itens-center gap-2 bg-slate-200 p-2'>
            <Image src={author.img} alt='image' width={50} height={30} className='rounded-[50%] '></Image>
            <div>
                <h1>{author.name}</h1>
                <p>{author.published_date}</p>
            </div>
        </div>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
  <figure>
<Image src={image_url} alt='pic'  width={400} height={400}></Image>
  </figure>
  <p className='line-clamp-2'> 
    {details}
  </p>
  </div>
  <div className='flex justify-between items-center'>
    <p>{rating.number}</p>
    <Link href={`/news/${_id}`} className='btn bg-purple-600 text-white'>View Details</Link>
  </div>
</div>
    )
 
};

export default AllNews;