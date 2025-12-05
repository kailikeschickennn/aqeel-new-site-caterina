"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/Button";

interface TabData {
  id: string;
  label: string;
  color: string;
  content: string;
}

interface TabsProps {
  data: TabData[];
  defaultTab?: string;
}

const Tabs = ({ data, defaultTab }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || data[0]?.id);
  const [isMdOrLarger, setIsMdOrLarger] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsMdOrLarger(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMdOrLarger(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const activeTabData = data.find((tab) => tab.id === activeTab);

  return (
    <div className="w-full">
      {/* Two-column layout matching Home.tsx */}
      <div className="flex flex-col md:flex-row mt-6 md:mt-12 w-full max-w-7xl mx-auto :px-10 gap-12 md:gap-36">
        {data.slice(0, 2).map((tab) => (
          <div
            key={tab.id}
            className={`w-full md:w-1/2 flex flex-col gap-6 group ${
              activeTab === tab.id ? "opacity-100" : "opacity-100 md:opacity-60"
            } transition-opacity duration-300 md:cursor-pointer`}
            onClick={() => {
              if (isMdOrLarger) {
                setActiveTab(tab.id);
              }
            }}
          >
            <div
              className={`w-full h-px transition-colors ${
                activeTab === tab.id
                  ? "bg-[#110F1D]"
                  : "bg-[#110F1D] md:bg-[#626CA4]"
              } md:group-hover:bg-[rgba(64,64,64,0.6)]`}
            ></div>
            <h2
              className={`text-4xl font-medium font-serif transition-colors ${
                activeTab === tab.id
                  ? "text-[#110F1D]"
                  : "text-[#110F1D] md:text-[#626CA4]"
              } md:group-hover:text-[rgba(64,64,64,0.6)]`}
            >
              {tab.label}
            </h2>
            <p
              className={`text-lg leading-relaxed transition-colors ${
                activeTab === tab.id
                  ? "text-[#110F1D]"
                  : "text-[#110F1D] md:text-[#626CA4]"
              } md:group-hover:text-[rgba(64,64,64,0.6)]`}
            >
              {tab.content}
            </p>
          </div>
        ))}
      </div>
      {/* Button centered between tabs and rectangle */}
      <div className="flex justify-center mt-12">
        <Button styleType="ghost" className="!text-[#110F1D]">
          Get Started
        </Button>
      </div>
      {/* Interactive Rectangle matching Home.tsx */}
      <div className="mt-12 hidden md:block">
        <div
          className="w-full rounded-tl-md rounded-tr-md py-60 px-36 bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 cursor-pointer group"
          style={{ backgroundColor: activeTabData?.color }}
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="text-white text-2xl font-medium mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {activeTabData?.label} Content
              </div>
              <div className="text-gray-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to explore {activeTabData?.label.toLowerCase()} features
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
