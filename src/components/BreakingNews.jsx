import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    const breakingNews = [
  { id: 1, headline: "City Opens New Public Transit Line" },
  { id: 2, headline: "Heavy Rain Expected Across the Region" },
  { id: 3, headline: "Heavy Rain Expected Across the Region" },
  { id: 4, headline: "Regional Leaders Meet for Trade Talks" },
  { id: 5, headline: "New Community Health Center Opens" }
];
    return (
        <div className='flex items-center mx-auto max-w-4/5'>
            <button className='btn bg-red-500 text-white py-2 px-3'>Latest</button>
            <Marquee className='bg-gray-300 p-2' speed={100} pauseOnHover={true}>
{
    breakingNews.map(news=>(
        <p className='mx-4' key={news.id}>{news.headline}</p>
    ))
}
            </Marquee>
        </div>
    );
};

export default BreakingNews;