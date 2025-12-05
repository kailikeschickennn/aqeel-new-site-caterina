import { Button } from "@/components/Button";
import { ArrowUpRight } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="flex items-center justify-center bg-black font-sans">
      <main className="bg-black w-full">
        <section className="h-[100vh] flex flex-row items-end justify-end text-white px-24 pb-36">
          <div className="w-1/2 flex flex-col space-y-6">
            <h1 className="text-7xl">
              About <span className="text-[#4D73FD] glow">aqeel</span>
            </h1>
            <p className="text-2xl">/ˈækiːl/ (noun)</p>
            <p className="text-2xl">Intelligent ; Wise ; Clever</p>
          </div>
          <div className="w-1/2 flex flex-col space-y-6 text-right">
            <h3 className="text-3xl hover:text-[#4D73FD]">
              <a
                href="/about-us/our-mission"
                className="inline-flex items-center gap-2"
              >
                <span>Read about our mission</span>{" "}
                <ArrowUpRight className="w-8 h-8 hover:animate-pulse" />
              </a>
            </h3>
            <h3 className="text-3xl hover:text-[#4D73FD]">
              <a
                href="/about-us/contact-us"
                className="inline-flex items-center gap-2"
              >
                <span>Contact us</span>{" "}
                <ArrowUpRight className="w-8 h-8 hover:animate-pulse" />
              </a>
            </h3>
            <h3 className="text-3xl hover:text-[#4D73FD]">
              <a
                href="/about-us/our-blog"
                className="inline-flex items-center gap-2"
              >
                <span>Read our blog</span>{" "}
                <ArrowUpRight className="w-8 h-8 hover:animate-pulse" />
              </a>
            </h3>
          </div>
        </section>
      </main>
    </div>
  );
}
