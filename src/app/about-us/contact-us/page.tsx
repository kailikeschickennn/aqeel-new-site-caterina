import { Button } from "@/components/Button";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

export default function ContactUs() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F1F5FF]">
      <main className="w-full">
        <section className="h-[90vh] 2xl:h-[70vh] relative overflow-hidden">
          {/* Content container */}
          <div className="px-8 lg:px-36 h-full flex flex-col items-center justify-center gap-12">
            <div className="w-full flex flex-col items-center gap-8">
              <h1 className="font-serif font-bold text-6xl text-[#110F1D] text-center">
                Get in Touch with the aqeel team
              </h1>
              <p className="text-2xl text-[#110F1D] font-light text-center max-w-3xl">
                We’re a small team working closely with manufacturers and
                suppliers. Tell us what you need and we’ll get back to you
                within 1 business day.
              </p>
            </div>
          </div>
        </section>
        <section className="pb-30 w-full px-8 lg:px-36">
          <div className="w-full xl:max-w-7xl xl:mx-auto flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:pr-8">
              <h2 className="font-serif font-medium text-4xl text-[#110F1D] leading-relaxed">
                Talk to us about:
              </h2>
              <div className="flex flex-col gap-4 pl-5 text-light text-xl lg:pr-20">
                <li>
                  Financing options for your manufacturing and wholesale
                  business
                </li>
                <li>Early payment programs for your customers</li>
                <li>Partnerships, integrations, or pilot</li>
                <li>Investor and media inquiries</li>
              </div>
              <div className="flex flex-col gap-4 font-medium text-[#110F1D]">
                <h3 className="text-2xl leading-relaxed">
                  support@getaqeel.com
                </h3>
                <p className="text-xl">
                  655 N. Central Avenue, Suite 1777, <br />
                  Glendale, CA 91203
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-12">
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-[#110F1D] text-sm font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-[#110F1D] placeholder-gray-400 focus:border-[#3862F8] focus:outline-none"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="companyName"
                    className="text-[#110F1D] text-sm font-medium"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-[#110F1D] placeholder-gray-400 focus:border-[#3862F8] focus:outline-none"
                    placeholder="Enter your company name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[#110F1D] text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-[#110F1D] placeholder-gray-400 focus:border-[#3862F8] focus:outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="country"
                    className="text-[#110F1D] text-sm font-medium"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-[#110F1D] placeholder-gray-400 focus:border-[#3862F8] focus:outline-none"
                    placeholder="Enter your country"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="country"
                    className="text-[#110F1D] text-sm font-medium"
                  >
                    What are you interestsed in?
                  </label>
                  <NativeSelect
                    name="interest"
                    placeholder="Select Option"
                    required
                  >
                    <NativeSelectOption value="financing">
                      Financing for my business
                    </NativeSelectOption>
                    <NativeSelectOption value="early-pay">
                      Early pay for suppliers
                    </NativeSelectOption>
                    <NativeSelectOption value="partnership">
                      Partnership or integration
                    </NativeSelectOption>
                    <NativeSelectOption value="investor">
                      Investor / media inquiry
                    </NativeSelectOption>
                    <NativeSelectOption value="cv">
                      Send us your CV
                    </NativeSelectOption>
                  </NativeSelect>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[#110F1D] text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-[#110F1D] placeholder-gray-400 focus:border-[#3862F8] focus:outline-none resize-none"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-start mt-2">
                  <Button styleType="primary" type="submit">
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
