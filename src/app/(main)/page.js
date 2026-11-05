import AllNews from "@/components/AllNews";
import Category from "@/components/Category";
import RightSideBar from "@/components/RightSideBar";
import { Suspense } from "react";
import Loading from "../loading";

 const MainPage = async () => {
     const categoriesApi =await fetch("https://openapi.programming-hero.com/api/news/categories") 
    const categoryObject=await categoriesApi.json()
   const categories=categoryObject.data.news_category
  return (
    <div className='grid grid-cols-12 gap-4 mx-auto max-w-4/5'>
    <div className='col-span-3 '>
      <h1 className='font-bold text-lg pb-1'>All categories</h1>
      
      {
       categories.map((category, index)=><Category category={category} key={index}></Category>)
      }
      </div>
    <div className='col-span-6'>
     <AllNews></AllNews>
    </div>
    <div className='col-span-3'>
      <RightSideBar />
    </div>
    </div>
  );
}
const Home=()=>{
  return(
    <Suspense fallback={<Loading></Loading>}><MainPage></MainPage></Suspense>
  )
}

export default Home;