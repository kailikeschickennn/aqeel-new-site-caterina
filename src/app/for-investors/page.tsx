"use client";

import { Button } from "@/components/Button";
import { AQAccord, AQAccordionGroup } from "@/components/ui/accordion";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import Image from "next/image";
import Lottie from "lottie-react";
import investorsStep1 from "@/../public/videos/forInvestors/investors_step1.json";
import investorsStep2 from "@/../public/videos/forInvestors/investors_step2.json";
import investorsStep3 from "@/../public/videos/forInvestors/investors_step3.json";
import investorsStep4 from "@/../public/videos/forInvestors/investors_step4.json";
import investorsStep5 from "@/../public/videos/forInvestors/investors_step5.json";

export default function ForInvestors() {
  return (
    <div className="flex items-center justify-center min-h-screen font-sans">
      <main className="bg-[#F1F5FF] w-full">
        <section className="h-[90vh] 2xl:h-[75vh] relative overflow-hidden flex flex-col items-center justify-center gap-10 px-8 lg:px-36">
          <h1 className="text-6xl font-serif font-bold">AQ+</h1>
          <p className="text-2xl text-[#110F1D] max-w-4xl text-center">
            There are 600,000+ manufacturers in the United States and they need
            your help. Join us and earn interest on your investments.
          </p>
          <div className="mt-8">
            <Button styleType="lightGhost">Get Started</Button>
          </div>
        </section>
        <section className="py-24 bg-[#110F1D] flex flex-col lg:flex-row items-center px-8 lg:px-36 gap-16 w-full">
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-white max-w-4xl">
            <p className="text-xl font-medium ">To Accredited Investors,</p>
            <h2 className="text-3xl md:text-5xl font-serif font-medium leading-normal max-w-2xl">
              Tired of watching your stocks move down?
            </h2>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:max-w-xl">
            <div className="w-full h-px bg-white"></div>
            <h3 className="text-2xl md:text-4xl font-serif font-medium text-white leading-relaxed">
              Help <span className="text-[#3862F8]">aqeel</span> invest in
              American manufacturers through AQ+ and earn{" "}
              <span className="text-[#3862F8]">fixed interest</span> on your
              investment.
            </h3>
          </div>
        </section>
        <section className="bg-[#F1F5FF] py-15 md:py-30 w-full">
          <div className="max-w-7xl mx-auto px-8 space-y-16 lg:space-y-32">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#110F1D]">
              Introducing AQ+
            </h2>
            {/* Section 1: Create an account */}
            <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-32 items-center">
              <div className="w-full lg:w-1/2 flex flex-col md:gap-6 gap-2">
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#110F1D] text-center md:text-left">
                  Create an account
                </h2>
                <p className="text-xl font-light text-[#110F1D] font-sans text-center md:text-left">
                  Follow our quick 5-step process to set-up your account
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="w-full lg:h-[300px] rounded-md overflow-hidden">
                  <Lottie animationData={investorsStep1} loop={true} />
                </div>
              </div>
            </div>

            {/* Section 2: Transfer money to aqeel */}
            <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-36 items-center">
              <div className="w-full lg:w-1/2 flex flex-col md:gap-6 gap-2">
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#110F1D] text-center md:text-left">
                  Transfer money to aqeel
                </h2>
                <p className="text-xl font-light text-[#110F1D] font-sans text-center md:text-left">
                  Your account gets credited by the transfer amount and you
                  start earning from that moment
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="w-full lg:h-[300px] rounded-md overflow-hidden">
                  <Lottie animationData={investorsStep2} loop={true} />
                </div>
              </div>
            </div>

            {/* Section 3: aqeel will put your investment into action */}
            <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-36 items-center">
              <div className="w-full lg:w-1/2 flex flex-col md:gap-6 gap-2">
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#110F1D] text-center md:text-left">
                  aqeel provides short-term financing
                </h2>
                <p className="text-xl font-light text-[#110F1D] font-sans text-center md:text-left">
                  Our manufacturing and wholesaling customers benefit from{" "}
                  <span className="text-[#3862F8]">aqeel's</span> short-term
                  financing
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="w-full lg:h-[300px] rounded-md overflow-hidden">
                  <Lottie animationData={investorsStep3} loop={true} />
                </div>
              </div>
            </div>

            {/* Section 4: Monitor your interest earned in real-time */}
            <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-36 items-center">
              <div className="w-full lg:w-1/2 flex flex-col md:gap-6 gap-2">
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#110F1D] text-center md:text-left">
                  Monitor your interest earned in real-time
                </h2>
                <p className="text-xl font-light text-[#110F1D] font-sans text-center md:text-left">
                  Use AQ+ to monitor your interest earnings, payments, and more
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="w-full lg:h-[300px] rounded-md overflow-hidden">
                  <Lottie animationData={investorsStep4} loop={true} />
                </div>
              </div>
            </div>

            {/* Section 5: Receive your interest */}
            <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-36 items-center">
              <div className="w-full lg:w-1/2 flex flex-col md:gap-6 gap-2">
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#110F1D] text-center md:text-left">
                  Receive your interest
                </h2>
                <p className="text-xl font-light text-[#110F1D] font-sans text-center md:text-left">
                  Choose whether you would like to receive your interest every
                  quarter or let it compound and receive it at the end of the
                  year
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="w-full lg:h-[300px] rounded-md overflow-hidden">
                  <Lottie animationData={investorsStep5} loop={true} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#110F1D]">
          <div className="max-w-5xl mx-auto px-4 lg:px-12 py-15 md:py-30">
            <div className="relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white"></div>
              <p className="text-sm font-sans uppercase text-white mb-8 tracking-wider">
                Access into Private Credit
              </p>
              <blockquote className="md:text-3xl text-xl font-serif text-white leading-relaxed mb-6 md:mb-12">
                "91% of private wealth clients don't have an alt and that's
                growing at very fast rate where people are trying to get access
                to private assets because most companies have gone private and
                don't go public. And so the access to the whole economy, you
                probably need to own private assets."
              </blockquote>
            </div>
            <div className="flex flex-col items-end text-right">
              <p className="text-lg font-sans text-white font-medium">
                John Zito
              </p>
              <p className="text-base font-sans text-white">
                Apollo Global Management (Colossus)
              </p>
            </div>
          </div>
        </section>
        <section className="bg-[#F1F5FF] py-15 md:py-30 w-full">
          <div className="max-w-7xl mx-auto px-8 space-y-8 lg:space-y-16">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#110F1D]">
                Performance and Investments
              </h2>
              <p className="text-2xl md:text-3xl font-medium text-[#110F1D] italic leading-relaxed font-serif">
                aqeel helps manufacturers and wholesalers grow by taking on
                larger orders, producing more, and driving U.S. manufacturing
                forward.
              </p>
            </div>
            {/* Section 1: Bar Chart */}
            <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-16 lg:gap-32 items-center">
              <div className="w-full lg:w-1/2 flex flex-col">
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#110F1D]">
                  Watch your interest grow in real-time
                </h2>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="w-full md:h-[400px] rounded-md overflow-hidden">
                  <Image
                    src="/interestbars_investors.svg"
                    alt="Interest bars"
                    width={1000}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            {/* Section 2: Line Chart */}
            <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-16 lg:gap-32 items-center">
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#110F1D]">
                  Monitor your outstanding balance any time
                </h2>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="w-full md:h-[400px] rounded-md overflow-hidden">
                  <Image
                    src="/linechart_investors.svg"
                    alt="Interest bars"
                    width={1000}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            {/* Section 3: More Information */}
            <div className="flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-30 items-center">
              <div className="w-full lg:w-1/3 flex flex-col gap-6">
                <div className="w-full h-90 bg-[#DBE3F9] rounded-md flex flex-col items-center justify-center space-y-6">
                  <h2 className="text-7xl font-serif font-bold text-[#3862F8]">
                    10<span className="text-4xl">%</span>
                  </h2>
                  <p className="uppercase text-3xl font-medium max-w-[300px] text-center">
                    1-year lock in interest rate
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <div className="relative w-full h-90 border border-white rounded-md overflow-hidden">
                  {/* Image as background */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src="/blurred_circles.svg"
                      alt="Blog Image"
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* Text overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 space-y-6">
                    <h3 className="text-4xl font-medium font-serif leading-normal text-[#110F1D]">
                      Get an inside look at the companies{" "}
                      <span className="text-[#3862F8]">aqeel</span> is
                      supporting
                    </h3>
                    <div className="hidden md:flex font-light uppercase text-xs md:flex-row justify-between w-full">
                      <p>% of small businesses</p>
                      <p>% of medium businesses</p>
                      <p>% of large businesses</p>
                      <p>% of public corporations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

{
  /* <div>
              <Dialog>
                <DialogTrigger asChild>
                  <div>
                    <Button styleType="lightGhost" className="text-white">
                      Learn More
                    </Button>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl sm:max-w-4xl w-full h-[20vh]">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-serif font-bold text-[#110F1D]">
                      What is Private Credit?
                    </DialogTitle>
                  </DialogHeader>
                  <DialogDescription className="text-xl font-light text-[#110F1D]">
                    Private credit is an asset class that is inaccessible in
                    public markets and uncorrelated to the stock market.
                    Traditionally reserved for institutions and
                    ultra-high-net-worth individuals, private credit offers
                    steady returns regardless of market volatility.
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </div> */
}

{
  /* <section className="bg-[#110F1D] w-full">
          <div className="max-w-5xl mx-auto px-12 py-30">
            <h2 className="text-4xl font-serif text-white mb-12">
              FAQ – Answers to your questions
            </h2>
            <div className="flex flex-col space-y-4">
              <AQAccordionGroup>
                <AQAccord
                  id="faq-1"
                  title={
                    <span className="text-lg font-sans text-white">
                      Lorem Ipsum is simply dummy text of the
                    </span>
                  }
                  className="bg-transparent border-none shadow-none py-2 px-0"
                  chevronColor="#FFFFFF"
                >
                  <p className="text-base font-sans text-white leading-relaxed">
                    Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                    simply dummy text of the Lorem Ipsum is simply dummy text of
                    the Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                    simply dummy text of the Lorem Ipsum is simply dummy text of
                    the Lorem Ipsum is simply dummy text of the
                  </p>
                </AQAccord>

                <AQAccord
                  id="faq-2"
                  title={
                    <span className="text-lg font-sans text-white">
                      Lorem Ipsum is simply dummy text of the
                    </span>
                  }
                  className="bg-transparent border-none shadow-none py-2 px-0"
                  chevronColor="#FFFFFF"
                >
                  <p className="text-base font-sans text-white leading-relaxed">
                    Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                    simply dummy text of the Lorem Ipsum is simply dummy text of
                    the Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                    simply dummy text of the Lorem Ipsum is simply dummy text of
                    the Lorem Ipsum is simply dummy text of the
                  </p>
                </AQAccord>

                <AQAccord
                  id="faq-3"
                  title={
                    <span className="text-lg font-sans text-white">
                      Lorem Ipsum is simply dummy text of the
                    </span>
                  }
                  className="bg-transparent border-none shadow-none py-2 px-0"
                  chevronColor="#FFFFFF"
                >
                  <p className="text-base font-sans text-white leading-relaxed">
                    Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                    simply dummy text of the Lorem Ipsum is simply dummy text of
                    the Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                    simply dummy text of the Lorem Ipsum is simply dummy text of
                    the Lorem Ipsum is simply dummy text of the
                  </p>
                </AQAccord>

                <AQAccord
                  id="faq-4"
                  title={
                    <span className="text-lg font-sans text-white">
                      Lorem Ipsum is simply dummy text of the
                    </span>
                  }
                  className="bg-transparent border-none shadow-none py-2 px-0"
                  chevronColor="#FFFFFF"
                >
                  <p className="text-base font-sans text-white leading-relaxed">
                    Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                    simply dummy text of the Lorem Ipsum is simply dummy text of
                    the Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                    simply dummy text of the Lorem Ipsum is simply dummy text of
                    the Lorem Ipsum is simply dummy text of the
                  </p>
                </AQAccord>

                <AQAccord
                  id="faq-5"
                  title={
                    <span className="text-lg font-sans text-white">
                      Lorem Ipsum is simply dummy text of the
                    </span>
                  }
                  className="bg-transparent border-none shadow-none py-2 px-0"
                  chevronColor="#FFFFFF"
                >
                  <p className="text-base font-sans text-white leading-relaxed">
                    Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                    simply dummy text of the Lorem Ipsum is simply dummy text of
                    the Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                    simply dummy text of the Lorem Ipsum is simply dummy text of
                    the Lorem Ipsum is simply dummy text of the
                  </p>
                </AQAccord>
              </AQAccordionGroup>
            </div>
          </div>
        </section> */
}
