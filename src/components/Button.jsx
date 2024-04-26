import { useSwiper } from "swiper/react";
import { PrevArrow, NextArrow } from "./common/Icons";
export default function Button(props) {
    return (
        <div className="max-lg:flex justify-center">
            <button className={`${props.name} z-10 relative bg-bg-gradient flex h-[50px] font-inter font-medium sm:text-base text-[15px] md:leading-[24px] hover:shadow-[0px_2px_8px_0px_#000] duration-500 text-[#FDFDFF]  p-[14px_17px_14px_17px] sm:p-[15px_24px_15px_24px]`}>
                <span className='relative z-10 text-nowrap'>{props.text}</span>
            </button>
        </div>
    )
}
export const SwiperButton = () => {
    const swiper = useSwiper();
    return (
        <>
            <div className=" flex  gap-[42px] items-center">
                <button aria-label="prevarrow" onClick={() => swiper.slidePrev()}>
                    <PrevArrow />
                </button>
                <button aria-label="nextarrow" onClick={() => swiper.slideNext()}>
                    <NextArrow />
                </button>
            </div>
        </>
    );
};