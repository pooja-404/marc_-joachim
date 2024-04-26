import { bluedata } from "./common/Helper";

export default function Meetingdata() {
    const data = bluedata.map((bluedata, p) => (
        <div className="lg:w-3/12 md:w-2/4 sm:w-2/4  w-full pt-3 lg:pt-0 ">
            <div className=" md:max-w-[250px]  lg:h-[200px] h-[100px]  bg-[#FFFFFF26] mx-auto hover:bg-[#003E92] flex px-5  -backdrop-blur-[100px] duration-500 items-center" key={p} >
                <p className='font-poppins font-normal z-10 sm:text-base text-[15px] lg:leading-[25px] text-white py-5 lg:pb-[78px] lg:pt-[60px]  px-4 '>{bluedata.text}</p>
            </div>
        </div>
    ));
    return (
        <>
            <div className="max-w-[1140px] 2xl:max-w-[1320px]  container md:px-3 mx-auto lg:justify-start  bottom-0 flex-col flex">
                <div className="lg:justify-center flex  lg:pt-10 justify-center ">
                    <div className=" flex flex-wrap flex-row justify-center  " data-aos="fade-left">
                        {data}
                    </div>
                </div>
            </div>
        </>
    )
}