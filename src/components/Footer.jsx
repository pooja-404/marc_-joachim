import { Fascinate } from "next/font/google";
import { FooterEmail, FooterFacebook, FooterInsta, FooterLogo, FooterTwiter } from "./common/Icons";

export default function Footer() {
    const Dates = new Date()
    const year = Dates.getFullYear()
    return (
        <>
            <div className="max-w-[1140px] mx-auto px-3">
                <div className="flex flex-row flex-wrap lg:py-24 md:py-12 p-8 -mx-3  items-center ">
                    <div className="md:w-10/12 w-full px-3 md:pl-48">
                        <a href="#" className="flex justify-center ">
                            <FooterLogo />
                        </a>
                        <p className="text-center text-white pt-3 sm:text-base text-[15px] ">(c){year} MARC JOACHIM HUBRICH
                            <span className="lg:block">All Rights Reserved</span></p>
                    </div>
                    <div className="md:w-2/12 w-full px-3">
                        <div className=" flex items-end justify-center gap-3 md:gap-0 md:flex-col">
                            <a href="https://www.facebook.com" target="_blank" className="hover:translate-y-[-1px] pt-3 hover:scale-90 transition-all ease-linear duration-500 rounded-[50px]"><FooterFacebook />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" className="hover:translate-y-[-1px] pt-3 hover:scale-90 transition-all ease-linear duration-500 rounded-[50px]"><FooterInsta />
                            </a>
                            <a href="https://www.emailjs.com/" target="_blank" className="hover:translate-y-[-1px] pt-3 hover:scale-90 transition-all ease-linear duration-500 rounded-[50px]"><FooterTwiter />
                            </a>
                            <a href=" https://www.instagram.com/" target="_blank" className="hover:translate-y-[-1px] pt-3 hover:scale-90 transition-all ease-linear duration-500 rounded-[50px]"><FooterEmail />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}