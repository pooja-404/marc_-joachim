import Image from "next/image"
export default function Fault() {
    return (
        <div className="relative xl:-mb-60">
            <div className="max-w-[1140px] 2xl:max-w-[1320px]  container px-3 mx-auto xl:pt-36 py-10 pb-10">
                <div className="xl:hidden block my-5">
                    <div className="flex justify-center my-3  items-end">
                        <hr className="w-[2px]  h-[42px] bg-[#F77B0B] border-0  " />
                        <hr className="[45px] max-[375px]:w-[90px] w-[250px] h-[2px] bg-[#F77B0B] border-0  " />
                        <div className="flex items-end pt-2  translate-y-[7px]">
                            <p className="text-[#000000] lg:text-[40px] text-[35px] font-normal  leading-[52px] font-helve transform  rotate-[271deg]  ">01</p>
                            <p className="text-[#000000] lg:text-[24px] text-xl font-normal  leading-[31px] font-helve uppercase ">fault</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-[900px] mx-auto lg:pl-24 pt-9 lg:pt-0">
                    <div className="md:flex items-center gap-12">
                        <div data-aos="flip-up" >
                            <h2 className="text-[#000000] text-[60px] font-normal md:!leading-[77px] max-lg:text-center font-helve lg:text-[60px] sm:!text-[50px] !text-4xl">IT'S NOT </h2>
                            <h2 className="max-lg:text-center"><span className="text-[#F77B0B] md:pl-16 text-[60px] font-normal  md:leading-[77px]  font-helve lg:text-[60px] sm:!text-[50px] !text-4xl ">YOUR <span className="text-[#000000]">FAULT!</span></span></h2>
                        </div>
                        <div className="flex items-center gap-2" data-aos="flip-down">
                            <div className="w-[2px] h-[65px] bg-[#9800B0] lg:block hidden"></div>
                            <p className="font-poppins sm:text-base text-[15px] max-lg:text-center leading-[25px] font-normal text-[#000000] pt-2 lg:max-w-[288px]">It's not your fault for not knowing how to let go of the partner who no longer made you feel special.</p>
                        </div>
                    </div>
                </div>
                <p className="text-[#000000] md:pl-16 sm:text-xl text-lg font-normal leading-[28px] pt-4 lg:pt-10 font-helve text-center" data-aos="zoom-in-down">How would you know when you are busy with completely different things at the moment:</p>
                <div className="lg:-translate-y-[380px] -translate-y-[301px] xl:block hidden">
                    <div className="w-[2px] w bg-[#F77B0B] lg:h-[235px] h-[35px]  ">
                        <p className="text-[#000000] sm:text-lg text-base font-light leading-[34px] font-poppins tracking-[4%] transform -translate-y-14 rotate-[90deg] xl:block hidden">MJH</p>
                        <div className="flex items-end lg:translate-y-[164px] -translate-y-[7px] lg:translate-x-[43px] translate-x-[121px]  ">
                            <p className="text-[#000000] text-[40px] font-normal  leading-[52px] font-helve transform  rotate-[271deg] ">01</p>
                            <p className="text-[#000000] text-[24px] font-normal  leading-[31px] font-helve ">FAULT</p>
                        </div>
                    </div>
                    <hr className="lg:w-[45px] w-[120px] h-[2px] bg-[#F77B0B] border-0" />
                </div>

            </div>
            <Image
                src="/assets/images/faultellipse.png"
                height={150}
                width={170} className="absolute bottom-52 right-0 lg:block hidden"
            />

        </div>
    )
}