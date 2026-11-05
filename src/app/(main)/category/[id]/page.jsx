import AllNews from '@/components/AllNews';
import Category from '@/components/Category';
import RightSideBar from '@/components/RightSideBar';
import { getCategory, getNewsCategories } from '@/lib/data';
import { Idiqlat } from 'next/font/google';
import React, { Suspense } from 'react';
import Loading from '../../news/loading';

const NewsData = async ({params}) => {
        
const categories= await getCategory()
    const {id}=await params
  const categoryData=await getNewsCategories(id)
  

     return (
          <div className='grid grid-cols-12 gap-4 mx-auto max-w-4/5'>
    <div className='col-span-3 '>
      <h1 className='font-bold text-lg pb-1'>All categories</h1>
      
      {
       categories.map((category, index)=><Category category={category} key={index} activeId={id} ></Category>)
      }
      </div>
    <div className='col-span-6'>
     {
       categoryData?.length > 0 ?  categoryData.map((news,index)=><AllNews news={news} key={index}></AllNews>) : <p className='text-center font-bold text-lg'>No news found for this category</p>
     }
    </div>
    <div className='col-span-3'>
      <RightSideBar />
    </div>
    </div>
    );
};
const News=({params})=>{
    return <Suspense fallback={<Loading></Loading>}>
        <NewsData params={params}></NewsData>
    </Suspense>
}

export default News;