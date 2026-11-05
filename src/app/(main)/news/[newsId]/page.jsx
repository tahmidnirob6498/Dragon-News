import { getNewsDetails } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';
import Loading from '../loading';
export const generateMetadata=async({params})=>{
    const {newsId}=await params
const news=await getNewsDetails(newsId)
return {
      title: news.title,
  description: news.details
}
}

const NewsDetailsPage = async({params}) => {
    const {newsId}=await params
  const news= await getNewsDetails(newsId)
    // console.log(news)
    const {author,title,rating,details,image_url}=news
    return (
             <div className="card bg-base-100 max-w-1/2 mx-auto shadow-xl my-5 p-3">
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
        <p className=''> 
          {details}
        </p>
        </div>
        <div className='flex justify-between items-center'>
          <p>{rating.number}</p>
          <Link href={`/category/${news.category_id}`} className='btn bg-purple-600 text-white'>All news in this category</Link>
        </div>
      </div>
    );
};

const NewsDetails=({params})=>{
  return (
    <Suspense fallback={<Loading></Loading>}>
     <NewsDetailsPage params={params}></NewsDetailsPage>
    </Suspense>
  )
}

export default NewsDetails;