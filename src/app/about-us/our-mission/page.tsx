import { Button } from "@/components/Button";

export default function OurMission() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#110F1D]">
      <main className="w-full">
        <section className="h-[90vh] 2xl:h-[70vh] relative overflow-hidden py-10 lg:py-20">
          {/* Content container */}
          <div className="px-8 lg:px-36 h-full flex flex-col lg:flex-row items-center justify-end md:items-end relative">
            {/* Left side */}
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-8">
              <h1 className="font-serif font-bold text-4xl lg:text-7xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Our Vision
              </h1>
              <Button
                styleType="ghost"
                className="hidden lg:block hover:bg-[#2a2a4a]"
              >
                Work With Us
              </Button>
            </div>
            {/* Right side */}
            <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end justify-center gap-6 mt-8 lg:mt-0">
              <p className="text-3xl lg:text-lg text-gray-300 text-left lg:text-right">
                To become the
              </p>
              <h2 className="font-serif font-bold text-5xl italic text-gray-200 leading-tight text-left lg:text-right">
                Financial O.S.
              </h2>
              <p className="text-3xl lg:text-lg text-gray-300 max-w-lg text-left lg:text-right">
                for Industrial America
              </p>
            </div>
          </div>
        </section>
        <section className="py-30 w-full px-8 lg:px-36">
          <div className="w-full flex flex-col lg:flex-row">
            <h2 className="w-full lg:w-1/2 font-serif font-medium text-4xl text-white leading-relaxed pr-16">
              We're Built for Manufacturers Who Build America{" "}
            </h2>
            <div className="w-full lg:w-1/2 flex flex-col gap-8 text-gray-200 text-2xl font-serif">
              <div className="w-full h-px bg-white mt-8 lg:mt-0"></div>
              <div className="leading-relaxed">
                Small and mid-sized manufacturers are the backbone of the
                American economy. But right now? They're getting squeezed from
                every direction. Raw material costs keep climbing, supply chains
                are still unpredictable, and banks have tightened lending
                requirements to the point where getting a business loan feels
                impossible.
              </div>
              <div className="leading-relaxed">
                Here's the frustrating part: you land a big purchase order from
                a Fortune 500 company or government agency that could transform
                your business. You should be celebrating. Instead, you're
                scrambling to pay for raw materials upfront when you won't see
                payment for 60, 90, sometimes 120 days.
              </div>
              <div className="leading-relaxed">
                We built aqeel because our founders lived through this exact
                problem. They saw great manufacturers turning down life-changing
                orders simply because of cash flow timing.
              </div>
              <div className="leading-relaxed">
                With aqeel, you delay payment on raw materials until after
                you've shipped products and collected from your customers. Need
                cash faster? We'll advance payment on your outstanding invoices.
              </div>
              <div className="leading-relaxed">
                Here's what makes us different: You only use aqeel when you need
                it. No long-term commitments. No debt piling up. Big purchase
                order coming in? We'll finance that specific order. Slower
                month? No payments, no obligations.
              </div>
              <div className="leading-relaxed">
                Last year, an electronics manufacturer in California doubled
                their revenue using aqeel for just the orders they needed
                financed. No crushing debt. No giving up equity. Just flexible
                financing that showed up when they needed it.
              </div>
              <div className="leading-relaxed">
                Five-minute application. Decision in 24 hours. Terms from 30 to
                120 days.
              </div>
              <div className="leading-relaxed">
                At the end of the day, you should be focused on manufacturing
                great products for great customers - not juggling payment
                schedules and stressing about cash flow. That's our job.
              </div>
            </div>
          </div>
        </section>
        <section className="pb-30 w-full px-8 lg:px-36">
          <div className="w-full flex flex-col lg:flex-row">
            <h2 className="w-full lg:w-1/2 font-serif font-medium text-4xl text-white leading-relaxed pr-16">
              Our Team
            </h2>
            <div className="w-full lg:w-1/2 text-gray-200 text-2xl leading-relaxed flex flex-col gap-8">
              <div className="w-full h-px bg-white mt-8 lg:mt-0"></div>
              <p>
                We exist to push every boundary and make frontier technologies
                work in the real world. We build production-grade AI that
                executes end-to-end workflows—not just copilots—across speech,
                text, and data, powering entire business functions. We deploy
                multimodal systems at scale and in real time, navigating complex
                enterprise constraints and handling the toughest edge cases.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full px-8 md:max-w-7xl mx-auto pb-30">
          <div className=" bg-[#F1F5FF] rounded-sm py-16 px-12 text-center">
            <p className="text-[#4C476C] text-sm tracking-wider mb-4">
              For businesses & investors
            </p>
            <h2 className="text-5xl font-medium font-serif text-[#110F1D] mb-8">
              It's time to get started with{" "}
              <span className="text-brand-blue">aqeel</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <div>
                <Button styleType="primary" className="w-[200px]">
                  Sign Up
                </Button>
              </div>
              <div>
                <Button styleType="lightGhost" className="">
                  Work With Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
