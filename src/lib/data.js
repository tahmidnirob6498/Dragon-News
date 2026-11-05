import { cache } from "react"

export const getNewsCategories=async(id)=>{
    
const categoriesApi=await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
const categoryObject=await categoriesApi.json()
return categoryObject.data
}

export const getCategory=async()=>{
 const categoriesApi =await fetch("https://openapi.programming-hero.com/api/news/categories") 
const categoryObject=await categoriesApi.json()
return categoryObject.data.news_category}

export const getNewsDetails=async(newsId)=>{
    
const newsApi=await fetch(`https://openapi.programming-hero.com/api/news/${newsId}`,{cache:'no-store'})

 const AllNews=await newsApi.json()
const news=AllNews.data
return news[0]
}