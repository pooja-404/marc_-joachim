import { Teliphone } from "./common/Icons";
import Image from "next/image";

export default function Headersec() {
    return (
        <div className="flex-grow flex justify-center relative  items-center">
            <div className="max-w-[1140px] 2xl:max-w-[1320px]  container px-3 mx-auto " data-aos="fade-right" data-aos-duration="2000">
                <p className="text-[#F77B0B] sm:text-lg text-base font-normal leading-[24px] font-helve capitalize ">Marc joachim hubrich</p>
                <h2 className="text-[#000000] lg:text-[60px] sm:text-[50px] text-4xl font-normal md:leading-[70px] font-helve">NOW I LET YOU
                    <span className="lg:block">GO!</span></h2>
                <p className="sm:text-base text-[15px] hover:shadow-[0px_2px_48px_0px_##003E92] font-poppins font-normal leading-[25px] lg:text-[#4d4d4d] ">For women who do not want to be completely dragged down <span className="lg:block">by a SEPARATION.</span>
                    How to let go of your EX so you can leave him behind
                    without <span className="lg:block">having to run to a therapist right away.</span></p>
                <div className="flex items-center gap-2 mt-5">
                    <div className=" bg-bg-gradient p-[1.7px] cursor-pointer hover:shadow-[0px_2px_8px_0px_#003E92] duration-300  max-w-[452px] h-[59px] w-full rounded-[63px]">
                        <div className=" bg-white h-full w-full py-4 px-2 flex items-center rounded-[63px]">
                            <Image
                                src="/assets/images/svg/masseagesvg.svg"
                                height={47}
                                width={50}
                            />
                            <span className="text-transparent bg-text-gradient bg-clip-text pl-1  font-medium sm:text-base text-[15px] capitalize">
                                Book a non-binding initial consultation now
                            </span>
                        </div>
                    </div>
                   
                    <a href="tel:6295550129" ><Teliphone /></a> 
                </div>
            </div>
            <div className="flex mx-auto  absolute lg:!bottom-5 xl:bottom-0  bottom-0 my-3 max-lg:left-0 lg:!right-[24rem]  xl:right-0   pt-2  px-5 gap-9" data-aos="fade-left" data-aos-duration="2000">
                <div className="flex items-center gap-2">
                    <div className="w-[2px] h-[65px] bg-[#9800B0]"></div>
                    <ul>
                        <li className="sm:text-base text-[15px] max-[775px]:text-[12px] font-normal leading-[24px] font-helve text-[#f3efef] uppercase">Die wichtigsten</li>
                        <li className="sm:text-base text-[15px] max-[775px]:text-[12px] font-normal leading-[24px] font-helve text-[#f3efef] uppercase">Aspekte einer</li>
                        <li className="sm:text-base text-[15px] max-[775px]:text-[12px] font-normal leading-[24px] font-helve text-[#f3efef] uppercase">Trennung:</li>
                    </ul>
                </div>
                <ul>
                    <li className="list-disc sm:text-base text-[15px] max-[775px]:text-[12px] text-white font-medium leading-[24px] font-helve capitalize ">physische Trennung</li>
                    <li className="list-disc sm:text-base text-[15px] max-[775px]:text-[12px] text-white font-medium leading-[24px] font-helve capitalize">mentale Trennung</li>
                </ul>
            </div>
        </div>
    )
}
