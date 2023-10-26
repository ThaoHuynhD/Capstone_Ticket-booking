import React from "react";

export default function LatestNew() {
  return (
    <div id='news'>
      <div
        style={{
          background: `url(../image/news/bg_latestnew.png) `,
        }}
      >
        <div style={{ minHeight: "250px" }} className='text-center'>
          <div className='container'>
            <h1 className='font-semibold py-20 inline-block text-3xl text-orange-500'>
              Latest News
            </h1>
          </div>
        </div>
      </div>
      <div className='relative top-[-80px]'>
        <div className=' container'>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-2 lg:gap-8'>
            <div>
              <img src='./image/news/new_1.jpg' loading='lazy' />
              <div className='flex flex-col items-center'>
                <h3 className='font-bold text-center text-xl mb-4'>
                  Six book-to-film adaptations to get excited about this autumn
                </h3>
                <button className='px-3 py-1 rounded-2xl bg-orange-400 hover:bg-orange-600 text-white text-sm duration-300'>
                  Read more
                </button>
              </div>
            </div>
            <div className='lg:row-span-2 lg:col-span-2'>
              <img
                loading='lazy'
                src='./image/news/new_2.jpg'
                width={750}
                height={500}
              />
              <div className='flex flex-col items-center'>
                <h3 className='font-bold text-center text-xl '>
                  Win a Wizarding World holiday with Fantastic
                </h3>
                <p className='text-sm my-4'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque
                </p>
                <button className='px-3 py-1 rounded-2xl bg-orange-400 hover:bg-orange-600 text-white text-sm duration-300'>
                  Read more
                </button>
              </div>
            </div>
            <div>
              <img loading='lazy' src='./image/news/new_3.jpg' />
              <div className='flex flex-col items-center'>
                <h3 className='font-bold text-center text-xl mb-4'>
                  Doctor Strange assembles with the Avengers
                </h3>
                <button className='px-3 py-1 rounded-2xl bg-orange-400 hover:bg-orange-600 text-white text-sm duration-300'>
                  Read more
                </button>
              </div>
            </div>
            <div>
              <img loading='lazy' src='./image/news/new_2.jpg' />
              <div className='flex flex-col items-center'>
                <h3 className='font-bold text-center text-xl mb-4'>
                  The Beatles: Eight Days a Week – The Touring
                </h3>
                <button className='px-3 py-1 rounded-2xl bg-orange-400 hover:bg-orange-600 text-white text-sm duration-300'>
                  Read more
                </button>
              </div>
            </div>
            <div>
              <img loading='lazy' src='./image/news/new_4.jpg' />
              <div className='flex flex-col items-center'>
                <h3 className='font-bold text-center text-xl mb-4'>
                  5 movies to watch this week (29 Sep 2016)
                </h3>
                <button className='px-3 py-1 rounded-2xl bg-orange-400 hover:bg-orange-600 text-white text-sm duration-300'>
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
