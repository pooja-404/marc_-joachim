
import Image from "next/image";
import Carddata from "./Carddata";
import { movementcard } from "./common/Helper";
export default function Cards() {
    const list = movementcard.map((movementcard, p) => (
        <div className="lg:w-4/12 sm:w-1/2 w-full mx-auto">
            <div className="lg:max-w-[250px] mx-auto lg:h-[162px] md:[120px] h-[100px] sm:text-base text-[15px] w-full bg-[#003E9233] hover:bg-[#003E92] flex px-5 duration-500 backdrop-blur-[3px] items-center" key={p} >
                <p className='font-poppins font-normal z-10 sm:text-base text-[15px] lg:leading-[25px] text-white '>{movementcard.text}</p>
            </div>
        </div>
    ));
    return (
        <>
            <div className="max-w-[1140px] 2xl:max-w-[1320px]  container mx-auto px-3 " >
                <div className="md:justify-end flex max-w-[1140px]">
                    <div className=" flex flex-wrap flex-row justify-center max-md:overflow-x-scroll " data-aos="fade-left">
                        {list}
                    </div>
                </div>
                <Carddata />
            </div>
        </>
    )
}