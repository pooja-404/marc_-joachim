
import Image from "next/image";
import Meetingdata from "./Meetingdata";
export default function Meetingcard() {

    const productcard = [
        {
            text: "How do I let go of my EX so I can finally leave him behind?"
        },
        {
            text: "How does the divorce process work?."
        },
        {
            text: "Do I need a lawyer?"
        },

    ];
    const list = productcard.map((productcard, p) => (
        <div className="lg:w-4/12  md:w-2/4 sm:w-2/4 w-full   ">
            <div className=" md:max-w-[250px] lg:h-[200px] h-[100px] mx-auto   bg-[#FFFFFF26] hover:bg-[#003E92]  px-5 duration-500 -backdrop-blur-[100px] " key={p} >
                <p className='font-poppins font-normal z-10 sm:text-base text-[15px] lg:leading-[25px] text-white py-5 lg:pb-[78px] lg:pt-[60px]  px-4'>{productcard.text}</p>
            </div>
        </div>
    ));
    return (
        <>
            <div className="max-w-[1140px] 2xl:max-w-[1320px]  container mx-auto px-3  py-8 lg:pt-20 " >
                <div className="justify-center flex">
                    <div className=" flex flex-wrap flex-row justify-center">
                        {list}
                    </div>
                </div>
                <Meetingdata />
                <div className="flex items-center gap-2 lg:mt-10 mt-5">
                    <div className="mx-auto lg:mb-28">
                        <div className=" bg-bg-gradient cursor-pointer hover:shadow-[0px_2px_8px_0px_#fff] duration-300 p-[1.7px] max-w-[452px] h-[59px] w-full rounded-[63px] ">
                            <div className=" bg-white h-full w-full py-4 px-2 flex items-center rounded-[63px]">
                                <Image
                                    src="/assets/images/svg/masseagesvg.svg"
                                    height={47}
                                    width={50}
                                />
                                <span className="text-transparent bg-text-gradient bg-clip-text px-5  font-medium sm:text-base text-[15px]">
                                    Book a non-binding initial consultation now
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}