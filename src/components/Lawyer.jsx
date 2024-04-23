import Image from "next/image";
import { Aarrow } from "./common/Icons";
export default function Lawyer() {
    return (
        <div className=" lg:pt-52 lg:pb-24 md:py-13 py-7 relative">
            <div className="max-w-[1140px] px-3 mx-auto 2xl:max-w-[1320px]  container ">
                <div className="flex flex-row  flex-wrap -mx-3 justify-center">
                    <div className="md:w-1/2  w-full px-3 md:pr-10 md:text-center">
                        <Image
                            src="/assets/images/Lawyer.png"
                            height={574}
                            width={559} className="md:max-mx-auto "
                        />
                    </div>
                    <div className="md:w-1/2  w-full px-3 pt-5  lg:pt-0 max-md:text-center">
                        <h2 className="font-helve font-normal md:text-[52px] sm:text-4xl text-3xl md:leading-[67px]">LAWYER <span className="text-[#F77B0B]">& </span>DIVORCE COACH</h2>
                        <p className="font-helve font-normal text-[37px] leading-[48px]"><span className="text-[#F77B0B]">M</span>ARC <span className="text-[#F77B0B]">J</span>OACHIM <span className="text-[#F77B0B]">H</span>UBRICH</p>
                        <p className="font-helve font-normal sm:text-xl text-lg  leading-[28px] text-[#000000] pt-5 capitalize">About the mindset agency coach</p>
                        <p className="font-poppins font-normal sm:text-base text-[15px] leading-[25px] text-[#4d4d4d] pt-3 capitalize ">Marc J. Hubrich is the founder of the mindset agency <span className="lg:block">specializing in consulting services.</span></p>
                        <div className=" bg-bg-gradient cursor-pointer hover:shadow-[0px_2px_8px_0px_#003E92] duration-300 p-[1.7px] max-w-[350px] h-[59px] mt-7 w-full rounded-[63px] max-md:mx-auto ">
                            <div className=" bg-white h-full w-full py-3 px-7 flex gap-2 items-center rounded-[63px]">
                                <span className="text-transparent bg-text-gradient bg-clip-text pl-1 capitalize  font-medium sm:text-base text-[15px]">
                                    Learn more about the agency
                                </span>
                                <Aarrow />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="-translate-y-[758px] xl:block hidden">
                    <div className="w-[2px] bg-[#F77B0B] h-[145px]  ">
                        <div className="flex items-end translate-y-[104px] translate-x-[43px] ">
                            <p className="text-[#000000] text-[40px] font-normal  leading-[52px] font-helve transform  -rotate-[90deg] ">05</p>
                            <p className="text-[#000000] text-[24px] font-normal  leading-[31px] font-helve  uppercase">about</p>
                        </div>
                    </div>
                    <hr className="w-[45px] h-[2px] bg-[#F77B0B] border-0" />
                </div>
                <div className="-translate-y-[62px] absolute right-36  xl:block hidden">
                    <div className="w-[2px] bg-[#F77B0B] h-[235px]  ">
                        <p className="text-[#000000] text-lg font-light leading-[34px] font-poppins tracking-[4%] transform -translate-y-14 rotate-[90deg]">MJH</p>
                        <p className="text-[#000000] text-[40px] font-normal  leading-[52px] font-helve transform  rotate-[450deg] translate-y-[137px] -translate-x-[68px] ">06</p>
                    </div>
                    <hr className="w-[45px] h-[2px] bg-[#F77B0B] border-0 -translate-x-[43px]" />
                </div>
            </div>
            <Image
                src="/assets/images/layer.png"
                height={212}
                width={738} className="absolute right-5 bottom-56 lg:block hidden "
            />
        </div>
    )
}