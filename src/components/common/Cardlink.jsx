
import Image from "next/image";
export default function Cardlink() {
    return (
        <>
            <div className=" bg-bg-gradient cursor-pointer hover:shadow-[0px_2px_8px_0px_#003E92] duration-300 p-[1.7px] md:max-w-[292px] h-[85px] w-full rounded-[8px]">
                <div className=" bg-white h-full w-full py-4 px-2 flex items-center rounded-[8px]">
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
        </>
    )
}