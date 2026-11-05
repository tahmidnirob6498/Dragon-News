import Link from 'next/link';
import React from 'react';

const Category =async({category,activeId}) => {
   
    return (
        
           <Link href={`/category/${category.category_id}` } className={`block text-center text-sm bg-gray-200 font-bold my-2 py-1 ${category.category_id=== activeId ? "border border-black": ""}`} key={category.id}>{category.category_name}</Link>
         
    );
};

export default Category;