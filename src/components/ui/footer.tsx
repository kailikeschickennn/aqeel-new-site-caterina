import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#110F1D] text-white w-full">
      <div className="w-full px-8 lg:max-w-7xl mx-auto py-24">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-32">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            {/* Logo and Tagline */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/aqeel_logo_white.svg"
                  alt="Aqeel Logo"
                  width={100}
                  height={100}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-white text-3xl font-medium leading-[129%] baskervville">
                Give your business the cash flow flexibility it deserves.
              </p>
              <div className="lg:hidden flex flex-col gap-6 w-full">
                <Link
                  href="/"
                  className="text-white hover:text-white/80 transition-colors text-xl font-medium ibmPlexSans"
                >
                  Home
                </Link>
                <Link
                  href="/for-buyers"
                  className="text-white hover:text-white/80 transition-colors text-xl font-medium ibmPlexSans"
                >
                  For Buyers
                </Link>
                <Link
                  href="/about-us/our-mission"
                  className="text-white hover:text-white/80 transition-colors text-xl font-medium ibmPlexSans"
                >
                  Our Mission
                </Link>
                <Link
                  href="/for-sellers"
                  className="text-white hover:text-white/80 transition-colors text-xl font-medium ibmPlexSans"
                >
                  For Sellers
                </Link>

                <Link
                  href="/contact-us"
                  className="text-white hover:text-white/80 transition-colors text-xl font-medium ibmPlexSans"
                >
                  Contact Us
                </Link>
                <Link
                  href="/for-investors"
                  className="text-white hover:text-white/80 transition-colors text-xl font-medium ibmPlexSans"
                >
                  For Investors
                </Link>
              </div>
            </div>

            {/* Company Details */}
            <div className="flex flex-col gap-2 text-regular text-white/80 leading-[150%]">
              <p className="font-medium">Glenoaks Capital Inc.</p>
              <p>
                655 North Central Avenue - Floor 17, Suite 1777 Glendale, CA
                91203
              </p>
            </div>

            {/* Legal Disclaimer */}
            <p className="text-xs text-white/60">
              Products offered by Glenoaks Capital Inc. dba aqeel and affiliates
              are business products only. The products may be provided by third
              parties and subject to lender approval. In California, products
              made or arranged pursuant to a California Financing Law License.
            </p>
          </div>

          {/* Divider Line */}
          <div className="hidden lg:block w-px bg-[#B7C6FA]"></div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
            <div className="hidden lg:flex flex-col gap-6 w-full">
              <div className="flex flex-row w-full">
                <Link
                  href="/"
                  className="w-1/2 text-white hover:text-white/80 transition-colors text-xl font-medium ibmPlexSans"
                >
                  Home
                </Link>
                <Link
                  href="/for-buyers"
                  className="w-1/2 text-white hover:text-white/80 transition-colors text-xl font-medium ibmPlexSans"
                >
                  For Buyers
                </Link>
              </div>
              <div className="flex flex-row w-full">
                <Link
                  href="/about-us/our-mission"
                  className="w-1/2 text-white hover:text-white/80 transition-colors text-xl font-medium ibmPlexSans"
                >
                  Our Mission
                </Link>
                <Link
                  href="/for-sellers"
                  className="w-1/2 text-white hover:text-white/80 transition-colors text-xl font-medium ibmPlexSans"
                >
                  For Sellers
                </Link>
              </div>
              <div className="flex flex-row w-full">
                <Link
                  href="/contact-us"
                  className="w-1/2 text-white hover:text-white/80 transition-colors text-xl font-medium ibmPlexSans"
                >
                  Contact Us
                </Link>
                <Link
                  href="/for-investors"
                  className="w-1/2 text-white hover:text-white/80 transition-colors text-xl font-medium ibmPlexSans"
                >
                  For Investors
                </Link>
              </div>
            </div>

            <div className="mt-10 flex gap-2">
              <Link
                href="/terms-of-service"
                className="text-white hover:text-white/80 transition-colors text-xl font-medium ibmPlexSans"
              >
                Terms of Service
              </Link>
              <span className="text-white/60">•</span>
              <Link
                href="/privacy-policy"
                className="text-white hover:text-white/80 transition-colors text-xl font-medium ibmPlexSans"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="mt-10">
              <p className="text-regular text-white/60">
                © 2025 Glenoaks Capital Inc. dba aqeel. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
