
export default function Carddata() {
    const basementcard = [
        {
            text: "You spend the nights alone and lonely."
        },
        {
            text: "You have stopped going out and spend the time crying in your room."
        },
        {
            text: "An emotional chaos is raging inside you."
        },
    ];
    const data = basementcard.map((basementcard, p) => (
        <div className="lg:w-4/12 sm:w-1/2 w-full mx-auto ">
            <div className=" lg:max-w-[250px] mx-auto lg:h-[162px] md:[120px] h-[100px] w-full bg-[#003E9233] hover:bg-[#003E92] flex px-5 backdrop-blur-[3px] duration-500 items-center" key={p} >
                <p className='font-poppins font-normal z-10 sm:text-base text-[15px]  text-base lg:leading-[25px] text-white '>{basementcard.text}</p>
            </div>
        </div>
    ));
    return (
        <>
            <div className="max-w-[1140px] 2xl:max-w-[1320px]  container lg:px-3 mx-auto lg:justify-start justify-center  bottom-0 flex-col flex">
                <div className="lg:justify-start flex max-w-[1140px] md:pt-7 justify-center">
                    <div className=" flex flex-wrap flex-row ">
                        {data}
                    </div>
                </div>
            </div>
        </>
    )
}