
"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Scrollbar } from 'swiper/modules';
import Image from 'next/image';

export default function Clients() {
    const clientdata = [
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
        <div className='lg:pt-8 relative cliendots' id='Testimonials'>
            <div className='max-w-[1140px]  container px-3 mx-auto'>
                <div className="xl:hidden block my-5">
                    <div className="flex justify-center my-3  items-end">
                        <hr className="w-[2px]  h-[42px] bg-[#F77B0B] border-0  " />
                        <hr className="[45px] max-[375px]:w-[90px] w-[250px] h-[2px] bg-[#F77B0B] border-0  " />
                        <div className="flex items-end pt-2  translate-y-[7px]">
                            <p className="text-[#000000] lg:text-[40px] text-[35px] font-normal  leading-[52px] font-helve transform  rotate-[271deg]  ">06</p>
                        </div>
                    </div>
                </div>
                <h2 className='font-helve md:text-[52px] sm:text-4xl text-3xl lg:pb-7 font-normal md:leading-[67px] text-center uppercase' data-aos="zoom-in">What our <span className='text-[#F77B0B]'>clients</span> say</h2>
                <Image
                    src="/assets/images/collon.webp"
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
                    modules={[Pagination, Scrollbar]}
                    className="mySwiper lg:h-[600px] h-[700px]"
                    breakpoints={{
                        992: {
                            direction: 'vertical',
                        },
                    }}
                >
                    {clientdata.map((clientdata, index) => (
                        <div className='max-w-[820px]'>
                            <SwiperSlide key={index} id='mySwiper'>
                                <div className='md:max-w-[820px]  my-9 mx-auto' >
                                    <div className=" md:h-[270px] h-full py-5 mt-12 flex flex-col justify-center shadow-[0px_2px_48px_0px_#00000014] " key={index}>
                                        <Image
                                            src="/assets/images/slidimg.webp"
                                            height={86}
                                            width={86} className='mx-auto lg:-translate-y-9 -translate-y-16 lg:mt-2 mt-4'
                                        />
                                        <h2 className='font-poppins font-normal sm:text-base text-[15px] lg:leading-[25px]  text-center  duration-500 max-w-[31 6px] px-5 capitalize'>{clientdata.heading}</h2>
                                        <h2 className='font-poppins font-medium text-lg lg:leading-[25px]  text-center mx-auto sm:pt-5 pt-3 duration-500 max-w-[316px] capitalize'>{clientdata.head}</h2>
                                        <p className='font-poppins sm:text-base text-[15px] leading-[25px]  font-normal  text-center mx-auto pt-1 lg:pb-9  duration-500 max-w-[364px] capitalize'>{clientdata.para}</p>
                                    </div>
                                    <div className='flex flex-wrap flex-row -mx-3 mt-5 lg:!pb-28 '>
                                        <div className='sm:w-1/2 w-full  px-3 lg:pb-28'>
                                            <div className='sm:max-w-[400px] h-[200px] sm:h-[213px]   md:h-[207px] lg:mb-20  shadow-[0px_2px_48px_0px_#00000014]'>
                                                <h2 className='font-poppins font-normal sm:text-base text-[15px] lg:leading-[25px] pt-7 text-center  duration-500 max-w-[31 6px] px-5 capitalize'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</h2>
                                                <h2 className='font-poppins font-medium text-lg lg:leading-[25px]  text-center mx-auto sm:pt-5 pt-3 duration-500 max-w-[316px] capitalize'>Ralph Edwards-CEO</h2>
                                                <p className='font-poppins sm:text-base text-[15px] leading-[25px]  font-normal  text-center mx-auto pt-1 pb-5  duration-500 max-w-[364px] capitalize'>Limana Enterprises, CA</p>
                                            </div>

                                        </div>
                                        <div className='sm:w-1/2 w-full mt-5 sm:mt-0 px-3 lg:pb-28'>
                                            <div className='sm:max-w-[400px] h-[200px] sm:h-[213px]   md:h-[207px] lg:mb-20 mb-10 shadow-[0px_2px_48px_0px_#00000014]'>
                                                <h2 className='font-poppins font-normal sm:text-base text-[15px] lg:leading-[25px] pt-7 text-center  duration-500 max-w-[31 6px] px-5 capitalize'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</h2>
                                                <h2 className='font-poppins font-medium text-lg lg:leading-[25px]  text-center mx-auto sm:pt-5 pt-3 duration-500 max-w-[316px] capitalize'>Darrell Steward-Head</h2>
                                                <p className='font-poppins sm:text-base text-[15px] leading-[25px]  font-normal  text-center mx-auto pt-1 pb-5  duration-500 max-w-[364px] capitalize'>Limana Enterprises, CA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
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
                <div className="xl:hidden block my-5">
                    <div className="flex justify-center my-3  items-end">
                        <hr className="w-[2px]  h-[42px] bg-[#F77B0B] border-0  " />
                        <hr className="[45px] max-[375px]:w-[90px] w-[250px] h-[2px] bg-[#F77B0B] border-0  " />
                        <div className="flex items-end pt-2  translate-y-[7px]">
                            <p className="text-[#000000] lg:text-[40px] text-[35px] font-normal  leading-[52px] font-helve transform  rotate-[271deg]  ">07</p>
                            <p className="text-[#000000] lg:text-[24px] text-xl font-normal  leading-[31px] font-helve uppercase ">take step</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}