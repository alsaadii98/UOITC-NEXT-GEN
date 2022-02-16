import React from 'react'
import LatestArticles from './LatestArticles'
export const LatestArticlesSwiper = () => {
  return (
    <div className='ml-24'>
        {/* Latest Articles  */}
        <div>
          <h1 className="text-5xl font-semibold text-red-800">
            Latest Articles
          </h1>
          <h5 className="text-xl text-gray-800 ">
            Our latest articles and news
          </h5>
        </div>
        <div>
            <LatestArticles/>
        </div>
    </div>
  )
}
