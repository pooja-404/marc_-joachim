
"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { SwiperButton } from "./common/Button";
import { mindsetdata } from './common/Helper';


export default function Mindslider() {


    return (
        <div className='lg:pt-80 py-8 lg:pb-28 relative'>
            <div className='max-w-[1140px] 2xl:max-w-[1320px]  container px-3 mx-auto'>
                <div className="xl:hidden block my-5">
                    <div className="flex justify-center my-3  items-end">
                        <hr className="w-[2px]  h-[42px] bg-[#F77B0B] border-0  " />
                        <hr className="[45px] max-[375px]:w-[90px] w-[250px] h-[2px] bg-[#F77B0B] border-0  " />
                        <div className="flex items-end pt-2  translate-y-[7px]">
                            <p className="text-[#000000] lg:text-[40px] text-[35px] font-normal  leading-[52px] font-helve transform  rotate-[271deg]  ">04</p>
                            <p className="text-[#000000] lg:text-[24px] text-xl font-normal  leading-[31px] font-helve uppercase ">analysis</p>
                        </div>
                    </div>
                </div>
                <div className="-translate-y-[258px] absolute  right-[121px]  2xl:right-[70px]  transform xl:block hidden">
                    <div className="w-[2px] bg-[#F77B0B] h-[235px]  ">
                        <p className="text-[#000000] text-lg font-light leading-[34px] font-poppins tracking-[4%] transform -translate-y-14 rotate-[90deg]">MJH</p>
                        <p className="text-[#000000] text-[40px] font-normal  leading-[52px] font-helve transform  rotate-[450deg] translate-y-[137px] -translate-x-[68px] ">04</p>
                        <p className="text-[#000000] text-[24px] font-normal  leading-[31px] font-helve transform   translate-y-[126px] -translate-x-[179px] capitalize ">analysis</p>
                    </div>
                    <hr className="w-[45px] h-[2px] bg-[#F77B0B] border-0 -translate-x-[43px]" />
                </div>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='lg:w-6/12 w-full px-3 flex flex-col justify-center' data-aos="fade-right">
                        <p className="font-helve font-normal md:text-[29px] sm:text-2xl text-xl leading-[38px] max-lg:text-center">THE FOUR PHASES OF</p>
                        <h2 className="font-helve font-normal md:text-[52px] sm:text-4xl text-3xl md:leading-[62px] max-lg:text-center">SEPARATION
                            <span className="text-[#F77B0B] lg:block"> MINDSET</span></h2>
                        <p className="font-poppins sm:text-base text-[15px] leading-[25px] pt-3 font-normal text-[#4d4d4d] max-lg:text-center">There are 4 typical separation phases. The 4 phases are not <span className="lg:block">always clearly separated from each other and can overlap.</span></p>
                        <div className=" bg-bg-gradient cursor-pointer hover:shadow-[0px_2px_8px_0px_#003E92] duration-300 mt-6 p-[1.7px] max-w-[452px] h-[59px] w-full rounded-[63px] max-lg:mx-auto">
                            <div className=" bg-white h-full w-full py-4 px-2 flex items-center rounded-[63px]">
                                <Image
                                    src="/assets/images/svg/masseagesvg.svg"
                                    height={47}
                                    width={50}
                                />
                                <span className="text-transparent bg-text-gradient bg-clip-text pl-1  font-medium sm:text-base text-[15px]">
                                    Book a non-binding initial consultation now
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-6/12 w-full  relative z-10 justify-center items-end text-center mx-auto   pt-7 px-3 flex flex-col  lg:pt-0' id='swipe1' data-aos="fade-left">
                        <Swiper
                            spaceBetween={30}
                            effect={'fade'}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[EffectFade, Navigation, Pagination]}
                            className="mySwiper"
                        >
                            {mindsetdata.map((mindsetdata, index) => (

                                <SwiperSlide key={index}>
                                    <div className=" lg:max-w-[5 56px]  lg:ml-[4rem]  slide-card    md:h-[410px] h-[300px] relative z-10 flex flex-col justify-center  bg-[#003E92]" key={index}>
                                        {mindsetdata.heading && (
                                            <h2 className='font-poppins font-medium sm:text-base text-[15px] lg:leading-[32px] text-white text-center mx-auto duration-500 max-w-[316px]'>
                                                {mindsetdata.heading}
                                            </h2>
                                        )}
                                        {mindsetdata.head && (
                                            <h2 className='font-poppins font-medium sm:text-base text-[15px] lg:leading-[32px] text-white text-center mx-auto duration-500 max-w-[316px]'>
                                                {mindsetdata.head}
                                            </h2>
                                        )}
                                        {mindsetdata.para && (
                                            <p className='font-poppins sm:text-base text-[15px] leading-[25px] pt-3 font-normal text-white text-center mx-auto duration-500 max-w-[272px] sm:max-w-[316px]'>
                                                {mindsetdata.para}
                                            </p>
                                        )}
                                        <Image
                                            src="/assets/images/slidewave.webp"
                                            height={380}
                                            width={449} className=' right-0 absolute bottom-0 -z-10'
                                        />
                                    </div>
                                    <div className=" absolute bottom-5 left-0 lg:left-[23px] z-20">
                                        <SwiperButton />
                                    </div>
                                </SwiperSlide>

                            ))}

                        </Swiper>
                    </div>
                </div>

            </div>
            <Image
                src="/assets/images/targetellipse.webp"
                height={600}
                width={600} className=' left-0 absolute lg:block hidden -top-[26rem]'
            />
        </div>
    );
}