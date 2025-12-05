"use client";

import { Button } from "@/components/Button";
import { AQAccord, AQAccordionGroup } from "@/components/ui/accordion";
import Lottie from "lottie-react";
import sellersStep1 from "@/../public/videos/forSellers/sellers_step1.json";
import sellersStep2 from "@/../public/videos/forSellers/sellers_step2.json";
import sellersStep3 from "@/../public/videos/forSellers/sellers_step3.json";
import sellersStep4 from "@/../public/videos/forSellers/sellers_step4.json";

export default function ForSellers() {
  return (
    <div className="flex items-center justify-center min-h-screen font-sans">
      <main className="bg-[#150418] w-full">
        <section className="h-[90vh] 2xl:h-[75vh] py-20 relative overflow-hidden">
          {/* Content container */}
          <div className="px-8 md:px-20 lg:px-36 h-full flex flex-col md:flex-row justify-center md:justify-end items-center md:items-end relative">
            {/* Left side */}
            <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start justify-center gap-8">
              <h1 className="baskervville text-center md:text-left font-bold text-5xl md:text-7xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                For Sellers
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
              <p className="text-xl text-[#F4E9FF] text-center md:text-right ibmPlexSans mt-8 md:mt-0">
                Stop Waiting For Your Customers To Pay You
              </p>
              <h2 className="baskervville font-bold text-5xl italic text-gray-200 leading-tight text-center md:text-right">
                Get Paid Early
              </h2>
              <p className="text-xl text-gray-300 max-w-lg text-center md:text-right ibmPlexSans">
                Select your receivables and get paid immediately from aqeel
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
        <section className="py-24 bg-[#F4E9FF] flex flex-col lg:flex-row items-start px-8 lg:px-36 py-16 lg:gap-16 gap-8 w-full">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <p className="text-xl text-[#110F1D] ibmPlexSans">To Sellers,</p>
            <h2 className="text-3xl md:text-5xl font-medium text-[#110F1D] leading-normal max-w-2xl baskervville">
              Are your customers asking for{" "}
              <span className="underline">longer payment terms?</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="w-full h-px bg-[#110F1D]"></div>
            <h3 className="text-2xl md:text-4xl baskervville font-medium text-[#110F1D]">
              Get paid faster with Early Pay
            </h3>
            <p className="text-lg md:text-xl text-[#110F1D] leading-loose pt-2">
              Boost your sales by offering them longer terms.
              <br />
              Get paid instantly with aqeel Early Pay!
            </p>
          </div>
        </section>
        <section className="bg-[#150418] py-30 w-full">
          <div className="max-w-7xl mx-auto px-8 space-y-16 lg:space-y-32">
            {/* Section 1: Choose invoices */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 items-center">
              <div className="w-full lg:w-1/2">
                <div className="w-full lg:h-[300px] rounded-md overflow-hidden">
                  <Lottie animationData={sellersStep1} loop={true} />
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-white baskervville text-center md:text-left">
                  Upload Your Sale
                </h2>
              </div>
            </div>

            {/* Section 2: Select payment term */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-36 items-center">
              <div className="w-full lg:w-1/2">
                <div className="w-full lg:h-[300px] rounded-md overflow-hidden">
                  <Lottie animationData={sellersStep2} loop={true} />
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-white baskervville text-center md:text-left">
                  Request to <span className="text-[#3862F8]">be Paid</span>
                </h2>
              </div>
            </div>

            {/* Section 3: aqeel pays supplier */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-36 items-center">
              <div className="w-full lg:w-1/2">
                <div className="w-full lg:h-[300px] rounded-md overflow-hidden">
                  <Lottie animationData={sellersStep3} loop={true} />
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-white baskervville text-center md:text-left">
                  <span className="text-brand-blue">aqeel pays</span> you
                </h2>
              </div>
            </div>

            {/* Section 4: Collect revenues, pay aqeel */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-36 items-center">
              <div className="w-full lg:w-1/2">
                <div className="w-full lg:h-[300px] rounded-md overflow-hidden">
                  <Lottie animationData={sellersStep4} loop={true} />
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-white baskervville text-center md:text-left">
                  Your Customer, pays
                  <span className="text-brand-blue"> aqeel</span>
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
        <section className="bg-[#F4E9FF]">
          <div className="max-w-5xl mx-auto px-4 lg:px-12 py-30">
            <div className="relative pl-6 md:pl-8 mb-8 md:mb-30">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#110F1D]"></div>

              {/* Company name */}
              <p className="text-sm font-sans uppercase text-[#110F1D] mb-8 tracking-wider">
                Early Pay in action
              </p>

              {/* Main quote */}
              <blockquote className="md:text-3xl text-xl font-serif text-[#110F1D] leading-relaxed mb-6 md:mb-12">
                We had $130k tied up in a 90-day invoice – money we desperately
                needed for the next order. aqeel paid us in 24 hours, took over
                the invoice, and let us keep moving. Cash flow freed, stress
                gone.
              </blockquote>
            </div>
            {/* Attribution */}
            <div className="flex flex-col items-end text-right mb-30">
              <p className="text-lg font-sans text-[#110F1D] font-medium">
                Supply Chain Manager
              </p>
              <p className="text-base font-sans text-[#110F1D] italic">
                $25M Manufacturing Company
              </p>
            </div>
            {/* FAQ Section */}
            <h2 className="text-4xl text-[#080326] mb-12 baskervville font-medium">
              FAQ – Answers to your questions
            </h2>
            <div className="flex flex-col space-y-4">
              <AQAccordionGroup>
                <AQAccord
                  id="faq-1"
                  title={
                    <span className="text-lg font-sans text-[#080326] font-medium ibmPlexSans">
                      What are the requirements to qualify for aqeel’s Early Pay
                      program?
                    </span>
                  }
                  className="bg-transparent border-none shadow-none py-2 px-0"
                  chevronColor="#080326"
                >
                  <p className="text-base font-sans text-[#080326] leading-relaxed ibmPlexSans">
                    To qualify for aqeel’s Early Pay product, your business must
                    be incorporated either in the United States or Canada and
                    have been operating for at least three years. In addition,
                    your business must be selling to other businesses located in
                    the United States or Canada.
                  </p>
                </AQAccord>

                <AQAccord
                  id="faq-2"
                  title={
                    <span className="text-lg font-sans text-[#080326] font-medium ibmPlexSans">
                      How does the sign-up process work?
                    </span>
                  }
                  className="bg-transparent border-none shadow-none py-2 px-0"
                  chevronColor="#080326"
                >
                  <p className="text-base font-sans text-[#080326] leading-relaxed ibmPlexSans">
                    The sign-up process is quick and easy, usually taking only a
                    few minutes to complete. During sign-up, you'll be asked to
                    provide information about your business and connect your
                    business bank account to our portal. Once all information is
                    submitted, we will review your application and typically
                    notify you of your eligibility within 1 to 3 business days.
                    If your application is successful, you will receive a daily
                    discount rate and an advance rate that all your future
                    requests will be based on.
                  </p>
                </AQAccord>

                <AQAccord
                  id="faq-3"
                  title={
                    <span className="text-lg font-sans text-[#080326] font-medium ibmPlexSans">
                      How does aqeel’s Early Pay product work?
                    </span>
                  }
                  className="bg-transparent border-none shadow-none py-2 px-0"
                  chevronColor="#080326"
                >
                  <p className="text-base font-sans text-[#080326] leading-relaxed ibmPlexSans">
                    We purchase your outstanding receivables that you have from
                    other businesses so that you don’t have to wait for payment
                    from your customer. We pay you today and collect from your
                    customer at the due date.
                  </p>
                </AQAccord>

                <AQAccord
                  id="faq-4"
                  title={
                    <span className="text-lg font-sans text-[#080326] font-medium ibmPlexSans">
                      How much will it cost me?
                    </span>
                  }
                  className="bg-transparent border-none shadow-none py-2 px-0"
                  chevronColor="#080326"
                >
                  <p className="text-base font-sans text-[#080326] leading-relaxed ibmPlexSans">
                    The cost depends on four factors: your invoice amount, your
                    daily discount rate, your advance rate, and how many days
                    until the invoice is due. <br />
                    Here's a simple example: Let's say you have a $50,000
                    invoice from Apex Mills Inc. that's due in 65 days. Your
                    daily discount rate is 0.07% and your advance rate is 80%.{" "}
                    <br />
                    You receive today: $40,000 (80% of $50,000)
                    <br />
                    We collect from your customer: $50,000 at the due date
                    <br />
                    You receive after collection: $8,180
                    <br />
                    The $8,180 is calculated as: $50,000 (invoice) - $40,000
                    (initial advance) - $1,820 (discount fee: $40,000 × 65 days
                    × 0.07%)
                    <br />
                    Your total cost for this advance would be $1,820, or 3.64%
                    of the invoice amount.
                  </p>
                </AQAccord>

                <AQAccord
                  id="faq-5"
                  title={
                    <span className="text-lg font-sans text-[#080326] font-medium ibmPlexSans">
                      For what type of sales can I request Early Pay?
                    </span>
                  }
                  className="bg-transparent border-none shadow-none py-2 px-0"
                  chevronColor="#080326"
                >
                  <p className="text-base font-sans text-[#080326] leading-relaxed ibmPlexSans">
                    Our solutions work for businesses selling tangible goods to
                    other businesses. Whether you're selling raw materials,
                    components, or finished products, aqeel lets you get paid
                    early once you've fulfilled your order and shipped the
                    goods.
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
