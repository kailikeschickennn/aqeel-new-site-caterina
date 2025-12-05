"use client";

import { Button } from "@/components/Button";
import Tabs from "@/components/Tabs";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Lottie from "lottie-react";
import submitApplication from "@/../public/videos/home/submitYourApp.json";
import receiveFacilityAmount from "@/../public/videos/home/receiveFacilityAmount.json";
import uploadInvoices from "@/../public/videos/home/uploadInvoice.json";
import watchCashFlowsGrow from "@/../public/videos/home/cashflowGrow.json";

export default function Home() {
  const tabData = [
    {
      id: "trade-builder",
      label: "Trade builder",
      color: "#3B82F6", // blue-500
      content:
        "Private credit is the most difficult asset class to access for individual investors. With aqeel you can now access this asset class and diversify your portfolio.",
    },

    {
      id: "analytics",
      label: "Analytics",
      color: "#10B981", // emerald-500
      content:
        "With aqeel’s investor program you can earn 10%+ on your invested amount, with an asset class that is highly diversified and uncorrelated with the financial markets.",
    },
  ];

  const movingCardsData = [
    {
      logo: "/gray_logos/burger_king.svg",
      alt: "Burger King",
    },
    {
      logo: "/gray_logos/costco.svg",
      alt: "Costco",
    },
    {
      logo: "/gray_logos/georgia_tech.svg",
      alt: "Georgia Tech",
    },
    {
      logo: "/gray_logos/john_hopkins.svg",
      alt: "Johns Hopkins",
    },
    {
      logo: "/gray_logos/lockheed_martin.svg",
      alt: "Lockheed Martin",
    },
    {
      logo: "/gray_logos/oregon.svg",
      alt: "Oregon",
    },
    {
      logo: "/gray_logos/stanford.svg",
      alt: "Stanford",
    },
    {
      logo: "/gray_logos/target.svg",
      alt: "Target",
    },
    {
      logo: "/gray_logos/ufc.svg",
      alt: "UFC",
    },
    {
      logo: "/gray_logos/us_airforce.svg",
      alt: "US Air Force",
    },
    {
      logo: "/gray_logos/us_army.svg",
      alt: "US Army",
    },
    {
      logo: "/gray_logos/us_navy.svg",
      alt: "US Navy",
    },
    {
      logo: "/gray_logos/walmart.svg",
      alt: "Walmart",
    },
  ];

  return (
    <div className="flex items-center justify-center bg-black font-sans w-full">
      <main className="bg-[#110F1D] w-full">
        <section className="h-[100vh] w-full flex items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="w-full max-w-7xl mx-auto flex items-center">
            <div className="hidden xl:block xl:w-1/2"></div>
            <div className="w-full xl:w-1/2 xl:max-w-5xl flex flex-col justify-center items-center xl:items-start gap-8 xl:text-left text-center text-white">
              <h3 className="text-lg md:text-xl text-brand-light ibmPlexSans">
                Fueling Industrial America
              </h3>
              <h1 className="text-4xl md:text-6xl font-bold leading-normal baskervville">
                Choose your own payment terms when buying and selling.
              </h1>
              <div>
                <Button styleType="ghost">Get Started</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 w-full bg-[#F1F5FF] flex flex-col items-center justify-center py-12 gap-12 overflow-x-hidden">
          <div className="w-full">
            <h3 className="text-center font-semibold text-xl uppercase ibmPlexSans">
              Our Customers Sell To
            </h3>
            <InfiniteMovingCards items={movingCardsData} />
          </div>
          <h2 className="text-center text-3xl md:text-5xl font-medium px-8 md:px-0 md:max-w-2xl leading-normal baskervville">
            US small business manufacturers are facing over a{" "}
            <span className="underline">$300 billion funding gap.</span>
          </h2>
          <h3 className="text-center text-2xl md:text-3xl ibmPlexSans">
            aqeel changes that.
          </h3>
        </section>
        <section className="bg-[#110F1D] py-30 w-full">
          <div className="max-w-7xl mx-auto px-8 space-y-12 md:space-y-32">
            {/* Item 1 - Image left, text right */}
            <div className="flex flex-col md:flex-row gap-12 xl:gap-20 items-center">
              <div className="w-full md:w-1/2">
                <div className="w-full lg:h-[394px] rounded-sm overflow-hidden">
                  <Lottie animationData={submitApplication} loop={true} />
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full md:w-1/2 text-white">
                <h3 className="text-3xl font-bold baskervville">
                  Submit your application in{" "}
                  <span className="text-[#4D73FD]">15 minutes</span>
                </h3>
                <p className="text-gray-400 ibmPlexSans">
                  We all know how frustrating it can be to work with banks. Fill
                  out your application with aqeel. 100% digital.
                </p>
              </div>
            </div>

            {/* Item 2 - Text left, image right */}
            <div className="flex flex-col-reverse md:flex-row gap-12 xl:gap-20 items-center">
              <div className="flex flex-col gap-4 w-full md:w-1/2 text-white">
                <h3 className="text-3xl font-bold baskervville">
                  Receive your{" "}
                  <span className="text-[#4D73FD]">facility amount</span>
                </h3>
                <p className="text-gray-400 ibmPlexSans">
                  Once you have submitted your application, you will receive a
                  decision within 24 hours.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full lg:h-[394px] rounded-sm overflow-hidden">
                  <Lottie animationData={receiveFacilityAmount} loop={true} />
                </div>
              </div>
            </div>

            {/* Item 3 - Image left, text right */}
            <div className="flex flex-col md:flex-row gap-12 xl:gap-20 items-center">
              <div className="w-full md:w-1/2">
                <div className="w-full lg:h-[394px] rounded-sm overflow-hidden">
                  <Lottie animationData={uploadInvoices} loop={true} />
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full md:w-1/2 text-white">
                <h3 className="text-3xl font-bold baskervville">
                  Upload your <span className="text-[#4D73FD]">invoices</span>
                </h3>
                <p className="text-gray-400 ibmPlexSans">
                  Upload your invoices to start grow your business. You can
                  finally accept larger purchase orders from your customers.
                </p>
              </div>
            </div>

            {/* Item 4 - Text left, image right */}
            <div className="flex flex-col-reverse md:flex-row gap-12 xl:gap-20 items-center">
              <div className="flex flex-col gap-4 w-full md:w-1/2 text-white">
                <h3 className="text-3xl font-bold baskervville">
                  Watch your{" "}
                  <span className="text-[#4D73FD]">cash flows grow</span>
                </h3>
                <p className="text-gray-400 ibmPlexSans">
                  aqeel's solution has helped its customers grow their revenue
                  by 100% – you can now do the same.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full h-[394px] rounded-sm overflow-hidden">
                  <Lottie animationData={watchCashFlowsGrow} loop={true} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-30 md:pt-30 md:pb-0 bg-[#F1F5FF]">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 flex flex-col items-center gap-12">
            <div className="flex flex-col gap-5 text-center">
              <p className="text-lg text-[#454C] ibmPlexSans">
                Introducing AQ+
              </p>
              <h2 className="text-4xl md:text-5xl leading-[112%] text-[#110F1D] baskervville font-semibold">
                Fuel the American <br /> Industrial Economy
              </h2>
              <p className="leading-[150%] text-[#4C476C] ibmPlexSans">
                For every <span className="font-bold">$1.00</span> spent by
                manufacturers, there is a total of{" "}
                <span className="font-bold">$2.64</span> added to the American
                economy.
              </p>
            </div>
            <Tabs data={tabData} />
          </div>
        </section>
        <section className="py-30 w-full">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20">
              {/* Left side - Text and button */}
              <div className="w-full md:w-1/2">
                <div className="w-full md:w-9/10 space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-[112%] baskervville">
                    Manufacturers continue building America with{" "}
                    <span className="text-brand-blue">aqeel</span>
                  </h2>
                  <p className="text-gray-400 text-lg ibmPlexSans leading-[150%]">
                    Focus on growing your company and stress less about cash
                    flow problems.
                  </p>
                  <div>
                    <Button
                      styleType="ghost"
                      className="bg-[#404040] text-white hover:bg-[#505050] mt-4"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right side - Stats grid */}
              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <div className="w-full h-px bg-[#F1F5FF]"></div>
                <div className="w-full flex flex-col sm:flex-row sm:gap-12 gap-6 font-light">
                  <div className="w-full sm:w-1/2 flex flex-col gap-4">
                    <h2 className="text-white text-5xl baskervville font-light">
                      $1.2 trillion
                    </h2>
                    <p className="text-[#B7C6FA] text-lg ibmPlexSans leading-[150%]">
                      funding gap US SMBs are facing
                    </p>
                  </div>
                  <div className="sm:hidden w-full h-px bg-[#F1F5FF]"></div>
                  <div className="w-full sm:w-1/2 flex flex-col gap-4">
                    <h2 className="text-white text-5xl baskervville font-light">
                      100%
                    </h2>
                    <p className="text-[#B7C6FA] text-lg ibmPlexSans leading-[150%]">
                      digital process after uploading, choosing terms, and
                      repayment
                    </p>
                  </div>
                </div>
                <div className="w-full h-px bg-[#F1F5FF]"></div>
                <div className="w-full flex flex-col sm:flex-row gap-12 font-light">
                  <div className="w-full sm:w-1/2 flex flex-col gap-4">
                    <h2 className="text-white text-5xl baskervville font-light">
                      180 days
                    </h2>
                    <p className="text-[#B7C6FA] text-lg ibmPlexSans leading-[150%]">
                      of maximum extension on your invoice to focus on selling
                      first.
                    </p>
                  </div>
                  <div className="sm:hidden w-full h-px bg-[#F1F5FF]"></div>
                  <div className="w-full sm:w-1/2 flex flex-col gap-4">
                    <h2 className="text-white text-5xl baskervville font-light">
                      X%
                    </h2>
                    <p className="text-[#B7C6FA] text-lg ibmPlexSans leading-[150%]">
                      of your invoice can be factored so you can buy more
                      materials.
                    </p>
                  </div>
                </div>
                <div className="w-full h-px bg-[#F1F5FF]"></div>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="mt-24 bg-[#F1F5FF] rounded-sm py-16 px-12 text-center">
              <p className="text-[#4C476C] text-sm tracking-wider mb-6 md:mb-4 ibmPlexSans">
                For businesses & investors
              </p>
              <h2 className="text-5xl font-bold text-[#110F1D] mb-10 md:mb-8 baskervville">
                It's time to get started with{" "}
                <span className="text-[#3862F8]">aqeel</span>
              </h2>
              <Button styleType="lightGhost" className="">
                Get Started
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
