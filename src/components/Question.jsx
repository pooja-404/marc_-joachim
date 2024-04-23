
import Image from "next/image";
import Cardlink from "./common/Cardlink";
export default function Cards() {
    const productcard = [
        {
            text: "Why does your EX have to disappear from your life forever?"
        },
        {
            text: "What should your everyday life as a single person look like now and how can you cope with the new challenges?"
        },
        {
            text: "How can you handle the divorce quickly and without complications, without worrying about finances or the well-being of the children?"
        },
        {
            text: "Who are you without your EX?"
        },
        {
            text: "What new dreams and hopes do you want to live?"
        },
        {
            text: <Cardlink />
        },
    ];
    const list = productcard.map((productcard, p) => (
        <div className="lg:w-4/12 md:w-2/4 sm:w-1/2   w-full group">
            <div className=" lg:max-w-[380px] lg:h-[230px] md:h-[200px] h-[100px] mt-5  md:py-16 py-10 max-lg:mx-auto  group-hover:bg-[#F5FAFF]  flex px-10 items-center" key={p} >
                <span className='font-poppins font-normal sm:text-base text-[15px] lg:leading-[25px] lg:max-w-[340px] text-[#4d4d4d] group-hover:text-[#003E92] duration-500'>{productcard.text}</span>
            </div>
        </div>
    ));
    return (
        <>
            <div className="lg:py-16  mb-[30rem] lg:mb-0 relative z-10" id='Marketplace'>
                <div className="max-w-[1140px] 2xl:max-w-[1320px]  container  mx-auto px-3" >
                    <p className="text-[#000000] md:pl-16 text-xl font-normal leading-[28px] lg:pt-10 pt-5 font-helve text-center ">In a 1:1 live coaching session, we will clarify the following questions in particular:</p>
                    <div className=" flex flex-wrap flex-row xl:pl-4  pt-8 justify-end relative z-10">
                        {list}
                    </div>
                    <div className="-translate-y-[444px] xl:block hidden">
                        <div className="w-[2px] bg-[#F77B0B] h-[590px]  ">
                            <div className="flex items-end translate-y-[546px] translate-x-[47px] ">
                                <p className="text-[#000000] text-[40px] font-normal  leading-[52px] font-helve transform  rotate-[271deg] ">03</p>
                                <p className="text-[#000000] text-[24px] font-normal  leading-[31px] font-helve uppercase ">Goal</p>
                            </div>
                        </div>
                        <hr className="w-[45px] h-[2px] bg-[#F77B0B] border-0" />
                    </div>
                </div>
                <Image
                    src="/assets/images/ellipserose.png"
                    height={220}
                    width={200} className="absolute right-0 top-0"
                />
                <Image
                    src="/assets/images/ellipserose2.png"
                    height={220}
                    width={200} className="absolute left-0 bottom-[467px] "
                />
            </div>
        </>
    )
}