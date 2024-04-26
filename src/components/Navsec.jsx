"use client";
import Image from "next/image"
import { useState } from "react";
import Button from "./Button"
import { Logo } from "./common/Icons";
export default function Navsec() {
    const [show, setshow] = useState(false);
    function view() {
        setshow(!show);
        document.body.classList.toggle("max-lg:!overflow-hidden");
    }
    function hide() {
        setshow(false);
        document.body.classList.toggle("max-lg:!overflow-hidden");
    }
    return (
        <div className="relative z-10">
            <nav className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 ">
                <div className='flex py-4 justify-between'>
                    <a href="#"><Logo /></a>
                    <ul
                        className={`gap-5 flex mobileView z-50  items-center ${show ? "right-0" : "right-[-100%]"}`}
                    >
                        <li>
                            <a
                                href="#benifits"
                                onClick={hide}
                                className=" text-[#Fff] sm:text-base text-[15px] font-normal leading-[21px] font-helve  hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#0C5FD1] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear hover:text-[#0C5FD1] duration-300 "
                            >
                                Benifits
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Testimonials"
                                onClick={hide}
                                className=" text-[#Fff] sm:text-base text-[15px] font-normal leading-[21px] font-helve  hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#0C5FD1] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear hover:text-[#0C5FD1] duration-300 "
                            >
                                Testimonials
                            </a>
                        </li>
                        <a href="#service">
                            <Button name='bg-gradient lg:ml-7' text='Book consultation now' />
                        </a>
                    </ul>
                    <label
                        className="cursor-pointer lg:hidden w-[32px] sm:h-[26px] h-[22px] relative z-50 flex justify-between flex-col"
                        onClick={view}
                    >
                        <span
                            className={`${show
                                ? "rotate-[50deg] translate-y-[16px] sm:translate-y-[20px]"
                                : " "
                                } bg-[#003E92] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                        ></span>
                        <span
                            className={`${show ? "hidden" : ""
                                } bg-[#003E92] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                        ></span>
                        <span
                            className={`${show ? "rotate-[-50deg] translate-y-[-50%]" : ""
                                } bg-[#003E92] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                        ></span>
                    </label>
                </div>
            </nav>
            <Image
                src="/assets/images/headerellipse.png"
                height={500}
                width={500} className="absolute -z-20 lg:top-[45px] xl:top-0 left-0 xl:left-[-109px] xl:block hidden"
            />
        </div>
    )
}