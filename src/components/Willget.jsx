
import Image from "next/image";
export default function Willget() {
    return (
        <>
            <div className="max-w-[1140px] 2xl:max-w-[1320px]  container relative  px-3 mx-auto ">
                <p className="text-[#000000]  sm:text-xl text-lg  font-normal leading-[28px] pt-12  font-poppins text-center" data-aos="zoom-in-down">You are not alone! Numerous women before you stood exactly at this point, where you are now.</p>
                <div className="flex items-center gap-2 mt-5">
                    <div className="mx-auto">
                        <div className=" bg-bg-gradient cursor-pointer hover:shadow-[0px_2px_8px_0px_#003E92] duration-300 p-[1.7px] max-w-[452px] h-[59px] w-full rounded-[63px]" data-aos="zoom-in-down">
                            <div className=" bg-white h-full w-full py-4 pl-2 pr-8 flex items-center rounded-[63px]">
                                <Image
                                    src="/assets/images/svg/masseagesvg.svg"
                                    height={47}
                                    width={50}
                                />
                                <span className="text-transparent bg-text-gradient bg-clip-text pl-1  font-medium text-base">
                                    Book a non-binding initial consultation now
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:hidden block">
                    <div className="flex justify-center my-3  items-end">
                        <hr className="w-[2px]  h-[42px] bg-[#F77B0B] border-0  " />
                        <hr className="[45px] max-[375px]:w-[90px] w-[250px] h-[2px] bg-[#F77B0B] border-0  " />
                        <p className="text-[#000000] lg:text-[40px] text-[35px] font-normal  leading-[52px] font-helve transform  rotate-[271deg] translate-y-[7px]  ">02</p>
                    </div>
                </div>
                <div className="md:flex items-center gap-5  lg:pt-24">
                    <div className="pt-5 flex items-center  justify-center">
                        <div data-aos="fade-down">
                            <h2 className="text-[#000000] md:text-[52px] sm:text-4xl text-3xl font-normal md:leading-[67px] font-helve uppercase max-md:text-center">what you </h2>
                            <h2 className="  lg:text-[60px] sm:text-[50px] text-4xl   font-normal md:leading-[67px] font-helve uppercase max-md:text-center">will <span className="text-[#F77B0B]">get</span></h2>
                        </div>
                        <Image
                            src="/assets/images/rose.png"
                            height={224}
                            width={216} className="md:bl ock hid den" data-aos="fade-down"
                        />
                    </div>
                    <div className="flex items-center gap-2" data-aos="fade-down">
                        <div className="w-[2px] h-[65px] bg-[#9800B0] md:block hidden"></div>
                        <p className="font-poppins sm:text-base text-[15px] leading-[25px] font-normaltext-[#000000] md:max-w-[419px]  max-md:text-center">I will show you which steps are necessary for you to finally successfully let go of your EX. And I will support you to look confidently into your new future.</p>
                    </div>
                </div>
                <div className="-translate-y-[403px] absolute right-0 xl:block hidden">
                    <div className="w-[2px] bg-[#F77B0B] h-[269px]  ">
                        <p className="text-[#000000] text-lg font-light leading-[34px] font-poppins tracking-[4%] transform -translate-y-14 rotate-[90deg]">MJH</p>
                        <p className="text-[#000000] text-[40px] font-normal  leading-[52px] font-helve transform  rotate-[450deg] translate-y-[171px] -translate-x-[68px] ">02</p>
                    </div>
                    <hr className="w-[45px] h-[2px] bg-[#F77B0B] border-0 -translate-x-[43px]" />
                </div>
            </div>
        </>
    )
}