"use client";

import { Button } from "@/components/Button";
import { AQAccord, AQAccordionGroup } from "@/components/ui/accordion";
import Lottie from "lottie-react";
import buyersStep1 from "@/../public/videos/forBuyers/buyers_step1.json";
import buyersStep2 from "@/../public/videos/forBuyers/buyers_step2.json";
import buyersStep3 from "@/../public/videos/forBuyers/buyers_step3.json";
import buyersStep4 from "@/../public/videos/forBuyers/buyers_step4.json";

export default function ForBuyers() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="bg-[#080326] w-full">
        <section className="h-[90vh] 2xl:h-[75vh] py-20 relative overflow-hidden">
          {/* Content container */}
          <div className="px-8 md:px-20 lg:px-36 h-full flex flex-col md:flex-row justify-center md:justify-end items-center md:items-end relative">
            {/* Left side */}
            <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start justify-center gap-8">
              <h1 className="baskervville text-center md:text-left font-bold text-5xl md:text-7xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                For Buyers
              </h1>
              <Button
                styleType="ghost"
                className="hidden md:block hover:bg-[#2a2a4a]"
              >
                Get Started
              </Button>
            </div>
            {/* Right side */}
            <div className="w-full lg:w-1/2 flex flex-col items-center md:items-end justify-center gap-6">
              <p className="text-xl text-[#B7C6FA] text-center md:text-right ibmPlexSans mt-8 md:mt-0">
                It&apos;s Time for Your Business to
              </p>
              <h2 className="baskervville font-bold text-5xl text-white italic leading-tight text-center md:text-right">
                Sell first, Pay later
              </h2>
              <p className="text-xl text-white text-center md:text-right ibmPlexSans">
                Convert your purchases into cash first and pay up to 120 days
                later
              </p>
              <Button
                styleType="ghost"
                className="mt-8 md:hidden block hover:bg-[#2a2a4a]"
              >
                Get Started
              </Button>
            </div>
          </div>
        </section>
        <section className="py-24 bg-[#F1F5FF] flex flex-col lg:flex-row items-start px-8 lg:px-36 py-16 lg:gap-16 gap-8 w-full">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <p className="text-xl text-[#110F1D] ibmPlexSans">To Buyers,</p>
            <h2 className="text-3xl md:text-5xl font-medium text-[#110F1D] leading-normal max-w-2xl baskervville">
              Have you struggled to pay your suppliers because of bad payment
              terms?
            </h2>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="w-full h-px bg-[#110F1D]"></div>
            <h3 className="text-2xl md:text-4xl baskervville font-semibold text-[#110F1D]">
              Say hello to smoother cash flow.
            </h3>
            <p className="text-lg md:text-xl text-[#110F1D] leading-loose pt-2 ibmPlexSans">
              Extend your payment terms with suppliers. Upload your Accounts
              Payable and select what you want to pay later.
            </p>
            <p className="text-lg md:text-xl text-[#110F1D] leading-loose ibmPlexSans">
              With one transparent monthly fee, you can control when and how
              long to extend your payment terms (up to 120 days).
            </p>
          </div>
        </section>
        <section className="bg-[#080326] py-30 w-full">
          <div className="max-w-7xl mx-auto px-8 space-y-16 lg:space-y-32">
            {/* Section 1: Choose invoices */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 items-center">
              <div className="w-full lg:w-1/2">
                <div className="w-full lg:h-[300px] rounded-md overflow-hidden">
                  <Lottie animationData={buyersStep1} loop={true} />
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col">
                <h2 className="text-2xl md:text-4xl baskervville text-center md:text-left font-bold text-white">
                  Choose invoices
                </h2>
              </div>
            </div>

            {/* Section 2: Select payment term */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-36 items-center">
              <div className="w-full lg:w-1/2">
                <div className="w-full lg:h-[300px] rounded-md overflow-hidden">
                  <Lottie animationData={buyersStep2} loop={true} />
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col">
                <h2 className="text-2xl md:text-4xl baskervville text-center md:text-left font-bold text-white">
                  Select payment term
                </h2>
              </div>
            </div>

            {/* Section 3: aqeel pays supplier */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-36 items-center">
              <div className="w-full lg:w-1/2">
                <div className="w-full lg:h-[300px] rounded-md overflow-hidden">
                  <Lottie animationData={buyersStep3} loop={true} />
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col">
                <h2 className="text-2xl md:text-4xl baskervville text-center md:text-left font-bold text-white">
                  <span className="text-[#3862F8]">aqeel pays</span> supplier
                </h2>
              </div>
            </div>

            {/* Section 4: Collect revenues, pay aqeel */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-36 items-center">
              <div className="w-full lg:w-1/2">
                <div className="w-full lg:h-[300px] rounded-md overflow-hidden">
                  <Lottie animationData={buyersStep4} loop={true} />
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h2 className="text-2xl md:text-4xl baskervville text-center md:text-left font-bold text-white">
                  Collect revenues,{" "}
                  <span className="text-[#3862F8]">pay aqeel</span>
                </h2>
                <div className="pt-2 md:pt-4 flex justify-center items-center md:justify-start">
                  <Button styleType="ghost" className="">
                    Create an account &gt;
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#F1F5FF]">
          <div className="max-w-5xl mx-auto px-4 lg:px-12 py-30">
            <div className="relative pl-6 md:pl-8 mb-8 md:mb-30">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#110F1D]"></div>

              {/* Company name */}
              <p className="text-sm font-sans uppercase text-[#110F1D] mb-8 tracking-wider">
                Sell First, Pay Later in action
              </p>

              {/* Main quote */}
              <blockquote className="md:text-3xl text-xl font-serif text-[#110F1D] leading-relaxed mb-6 md:mb-12">
                aqeel transformed our cash flow overnight - selling first and
                paying suppliers on our terms let us scale production without
                the usual headaches. It's a game-changer for manufacturers like
                us.
              </blockquote>
            </div>
            {/* Attribution */}
            <div className="flex flex-col items-end text-right mb-30">
              <p className="text-lg font-sans text-[#110F1D] font-medium">
                Founder
              </p>
              <p className="text-base font-sans text-[#110F1D] italic">
                Industrial Manufacturer
              </p>
            </div>
            {/* FAQ Section */}
            <h2 className="text-4xl baskervville font-medium text-[#110F1D] mb-12">
              FAQ – Answers to your questions
            </h2>
            <div className="flex flex-col space-y-4">
              <AQAccordionGroup>
                <AQAccord
                  id="faq-1"
                  title={
                    <span className="text-lg font-medium text-[#110F1D] ibmPlexSans">
                      What are the requirements to qualify for aqeel’s Sell
                      First, Pay Later product?
                    </span>
                  }
                  className="bg-transparent border-none shadow-none py-2 px-0"
                  chevronColor="#110F1D"
                >
                  <p className="text-base font-sans text-[#110F1D] leading-relaxed ibmPlexSans">
                    To qualify for aqeel’s Sell First, Pay Later product, your
                    business must be incorporated in either the United States or
                    Canada and have been operating for at least three years. In
                    addition, your business must be selling to other businesses
                    located in the United States or Canada.
                  </p>
                </AQAccord>

                <AQAccord
                  id="faq-2"
                  title={
                    <span className="text-lg font-medium text-[#110F1D] ibmPlexSans">
                      How does the sign-up process work?
                    </span>
                  }
                  className="bg-transparent border-none shadow-none py-2 px-0"
                  chevronColor="#110F1D"
                >
                  <p className="text-base font-sans text-[#110F1D] leading-relaxed ibmPlexSans">
                    The sign-up process is quick and easy, usually taking only a
                    few minutes to complete. During sign-up, you'll be asked to
                    provide information about your business and connect your
                    business bank account to our portal. Once all information is
                    submitted, we will review your application and typically
                    notify you of your eligibility within 1 to 3 business days.
                  </p>
                </AQAccord>

                <AQAccord
                  id="faq-3"
                  title={
                    <span className="text-lg font-medium text-[#110F1D] ibmPlexSans">
                      How much will it cost me?
                    </span>
                  }
                  className="bg-transparent border-none shadow-none py-2 px-0"
                  chevronColor="#110F1D"
                >
                  <p className="text-base font-sans text-[#110F1D] leading-relaxed ibmPlexSans">
                    Our rates start at 2.00% per month. When you qualify, you'll
                    receive a monthly extension rate based on your business's
                    credit profile. The cost for each extension is calculated
                    using three factors: your request amount, your monthly
                    extension rate, and the number of months you're extending
                    payment.
                  </p>
                </AQAccord>

                <AQAccord
                  id="faq-4"
                  title={
                    <span className="text-lg font-medium text-[#110F1D] ibmPlexSans">
                      How long can I extend the payment of material or inventory
                      purchases with aqeel’s Sell First, Pay Later product?
                    </span>
                  }
                  className="bg-transparent border-none shadow-none py-2 px-0"
                  chevronColor="#110F1D"
                >
                  <p className="text-base font-sans text-[#110F1D] leading-relaxed ibmPlexSans">
                    You can extend payment on your material or inventory
                    purchases for up to 120 days. Extensions are available in
                    30-day intervals, with a minimum of 30 days and a maximum of
                    120 days.
                  </p>
                </AQAccord>

                <AQAccord
                  id="faq-5"
                  title={
                    <span className="text-lg font-medium text-[#110F1D] ibmPlexSans">
                      For what type of purchases can I request a payment term
                      extension?
                    </span>
                  }
                  className="bg-transparent border-none shadow-none py-2 px-0"
                  chevronColor="#110F1D"
                >
                  <p className="text-base font-sans text-[#110F1D] leading-relaxed ibmPlexSans">
                    Our solution is tailored for businesses that buy and sell
                    tangible products. Whether you're purchasing raw materials
                    for a large order or stocking up on inventory, aqeel allows
                    you to extend payment terms on these purchases. This means
                    you can pay for your materials after you've produced,
                    shipped, and collected revenue from your customers.
                  </p>
                </AQAccord>
              </AQAccordionGroup>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
