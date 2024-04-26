"use client"
import { useState, useEffect } from 'react';
import Navsec from "@/components/Navsec";
import Headersec from '@/components/Headersec'
import Fault from "@/components/Fault";
import Cards from "@/components/Cards";
import Question from "@/components/Question"
import Target from "@/components/Target";
import Yourex from "@/components/Yourex";
import Lawyer from "@/components/Lawyer";
import Request from "@/components/Request";
import Meetingcard from "@/components/Meetingcard"
import Targetgroup from "@/components/Targetgroup"
import Footer from "@/components/Footer";
import Willget from "@/components/Willget";
import Mindslider from "@/components/Mindslider";
import Client from "@/components/Client";
import Backtotop from "@/components/Backtotop";
import Preloder from '@/components/Preloder';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 4000);
  }, []);
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 2000,
      }
    );
  }, [])
  return (
    <div>
      {data ? (
        <div>{<Preloder />}</div>
      ) : (
        <div className="bg-white overflow-x-hidden" >
            <div className="bg-bg_image bg-no-repeat max-xl:bg-cover bg-BgSize xl:bg-right bg-center object-contain 2xl:min-h-screen min-h-[90vh] flex flex-col relative z-[1]  max-lg:after:absolute  max-lg:after:w-full max-lg:after:bg-[#f7bf8d] max-lg:after:opacity-[0.6] max-lg:after:z-[-1] max-lg:after:h-full ">
            <Navsec />
            <Headersec />
          </div>
          <Fault />
          <div className="bg-bg-cards bg-no-repeat bg-center bg-cover lg:h-[354px] ">
            <Cards />
          </div>
          <Willget />
          <Question />
          <Target />
          <div className="bg-bg-Targetbg bg-no-repeat bg-center bg-cover h-full md:h-[623px] relative z-10">
            <Targetgroup />
          </div>
          <Mindslider />
          <div className="bg-bg-yourex  bg-no-repeat bg-center h-full md:h-[517px] bg-cover flex justify-center items-center ">
            <Yourex />
          </div>
          <Lawyer />
          <Client />
          <Request />
          <div className="bg-bg-meetingcard bg-no-repeat bg-center bg-cover">
            <Meetingcard />
          </div>
          <div className="bg-bg-footerbg bg-no-repeat bg-center bg-cover">
            <Footer />
          </div>
          <Backtotop />
        </div>
      )
      }
    </div>
  );
}
