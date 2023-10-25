import React, { Fragment, useEffect, useRef, useState } from "react";
import { getBanner } from "../../../Services/api";

import SearchBar from "../SearchBar/SearchBar";

import { Carousel, message } from "antd";
export default function CarouselBanner() {
  const [banner, setBanner] = useState([]);
  const ref = useRef();

  let fetchData = async () => {
    try {
      let response = await getBanner();
      setBanner(response.data.content);
    } catch (err) {
      message.error("Something wrong");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='relative'>
      <Carousel autoplay ref={ref} dots={false}>
        {banner.slice(0, 2).map((item, index) => {
          return (
            <Fragment key={index}>
              <div>
                <img
                  src={item.hinhAnh}
                  className=' w-full md:aspect-video aspect-auto h-64 sm:h-80 md:h-600 '
                />
              </div>
            </Fragment>
          );
        })}
        <div>
          <img
            src='http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_24.jpg'
            className=' w-full  aspect-auto h-64 sm:h-80 md:h-600 '
          />
        </div>
        <div>
          <img
            src='http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_27.jpg'
            className=' w-full aspect-auto h-64 sm:h-80 md:h-600 '
          />
        </div>
      </Carousel>
      <div>
        <button
          onClick={() => {
            ref.current.prev();
          }}
          className='absolute left-[20px] top-[50%]'
        >
          <i className='fa-solid fa-chevron-left text-zinc-400 text-lg sm:text-xl md:text-2xl lg:text-4xl hover:text-orange-500 duration-500'></i>
        </button>
        <button
          onClick={() => {
            ref.current.next();
          }}
          className='absolute right-[20px] top-[50%]'
        >
          <i className='fa-solid fa-chevron-right text-zinc-400 text-lg sm:text-xl md:text-2xl lg:text-4xl hover:text-orange-500 duration-500'></i>
        </button>
      </div>
      <SearchBar />
    </div>
  );
}
