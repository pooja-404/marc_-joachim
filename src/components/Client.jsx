
"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination, Scrollbar } from 'swiper/modules';
import Image from 'next/image';

export default function Clients() {
    const meetingcards = [
        {
            heading: "Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. ",
            head: "Marrie James-CEO",
            para: "Limana Enterprises, CA"
        },
        {

            heading: "Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. ",
            head: "Marrie James-CEO",
            para: "Limana Enterprises, CA"
        },
        {
            heading: "Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. ",
            head: "Marrie James-CEO",
            para: "Limana Enterprises, CA"

        },

    ];
    return (
        <div className='lg:pt-8 relative' id='Testimonials'>
            <div className='max-w-[1140px] 2xl:max-w-[1320px]  container px-3 mx-auto'>
                <h2 className='font-helve md:text-[52px] sm:text-4xl text-3xl lg:pb-7 font-normal md:leading-[67px] text-center uppercase '>What our <span className='text-[#F77B0B]'>clients</span> say</h2>
                <Image
                    src="/assets/images/collon.png"
                    height={86}
                    width={86} className='mx-auto lg:block hidden translate-x-[29rem] translate-y-[6rem]  mt-2'
                />
                <Swiper
                    direction={'horizontal'}
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={true}

                    pagination={{
                        clickable: true,
                    }}
                    modules={[Mousewheel, Pagination, Scrollbar]}
                    className="mySwiper "
                    style={{ height: "600px" }}
                    breakpoints={{
                        768: {
                            direction: 'vertical',
                            // height: "0"
                        },
                    }}
                >
                    {meetingcards.map((meetingcard, index) => (
                        <SwiperSlide key={index}>
                            <div className='max-w-[820px]   my-9 mx-auto'>
                                <div className=" md:h-[270px] h-full py-5 mt-12 flex flex-col justify-center shadow-[0px_2px_48px_0px_#00000014] " key={index}>
                                    <Image
                                        src="/assets/images/slidimg.png"
                                        height={86}
                                        width={86} className='mx-auto -translate-y-9 mt-2'
                                    />
                                    <h2 className='font-poppins font-normal sm:text-base text-[15px] lg:leading-[25px]  text-center  duration-500 max-w-[31 6px] px-5 capitalize'>{meetingcard.heading}</h2>
                                    <h2 className='font-poppins font-medium text-lg lg:leading-[25px]  text-center mx-auto pt-5 duration-500 max-w-[316px] capitalize'>{meetingcard.head}</h2>
                                    <p className='font-poppins sm:text-base text-[15px] leading-[25px]  font-normal  text-center mx-auto pt-1 pb-9  duration-500 max-w-[364px] capitalize'>{meetingcard.para}</p>
                                </div>
                                <div className='flex flex-row flex-wrap -mx-3 mt-5 !pb-28 '>
                                    <div className='w-1/2 px-3 pb-28'>
                                        <div className='max-w-[400px] h-full  md:h-[207px] mb-20 shadow-[0px_2px_48px_0px_#00000014]'>
                                            <h2 className='font-poppins font-normal sm:text-base text-[15px] lg:leading-[25px] pt-7 text-center  duration-500 max-w-[31 6px] px-5 capitalize'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</h2>
                                            <h2 className='font-poppins font-medium text-lg lg:leading-[25px]  text-center mx-auto pt-5 duration-500 max-w-[316px] capitalize'>Ralph Edwards-CEO</h2>
                                            <p className='font-poppins sm:text-base text-[15px] leading-[25px]  font-normal  text-center mx-auto pt-1 pb-5  duration-500 max-w-[364px] capitalize'>Limana Enterprises, CA</p>
                                        </div>

                                    </div>
                                    <div className='w-1/2 px-3 pb-28'>
                                        <div className='max-w-[400px] h-full  md:h-[207px] mb-20 shadow-[0px_2px_48px_0px_#00000014]'>
                                            <h2 className='font-poppins font-normal sm:text-base text-[15px] lg:leading-[25px] pt-7 text-center  duration-500 max-w-[31 6px] px-5 capitalize'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</h2>
                                            <h2 className='font-poppins font-medium text-lg lg:leading-[25px]  text-center mx-auto pt-5 duration-500 max-w-[316px] capitalize'>Darrell Steward-Head</h2>
                                            <p className='font-poppins sm:text-base text-[15px] leading-[25px]  font-normal  text-center mx-auto pt-1 pb-5  duration-500 max-w-[364px] capitalize'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="-translate-y-[105px] xl:block hidden">
                    <div className="w-[2px] bg-[#F77B0B] h-[269px]  ">
                        <div className="flex items-end translate-y-[229px] translate-x-[43px] ">
                            <p className="text-[#000000] text-lg font-light leading-[34px] font-poppins tracking-[4%] transform -translate-y-72 -translate-x-[61px] rotate-[90deg]">MJH</p>
                            <p className="text-[#000000] text-[40px] font-normal  leading-[52px] font-helve transform  -rotate-[90deg] ">07</p>
                            <p className="text-[#000000] text-[24px] font-normal  leading-[31px] font-helve  uppercase text-nowrap">take step</p>
                        </div>
                    </div>
                    <hr className="w-[45px] h-[2px] bg-[#F77B0B] border-0" />
                </div>
            </div>
        </div>
    );
}