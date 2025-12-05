"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  href,
  isActive,
  isLightBackground = false,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  href?: string;
  isActive?: boolean;
  isLightBackground?: boolean;
}) => {
  const content = href ? (
    <Link
      href={href}
      className={cn(
        "cursor-pointer px-3 py-1 rounded-sm transition-colors text-sm",
        isActive
          ? "text-[#4D73FD]"
          : isLightBackground
            ? "text-[#110F1D] hover:bg-[#110F1D]/10"
            : "text-white hover:bg-black"
      )}
    >
      {item}
    </Link>
  ) : (
    <motion.p
      transition={{ duration: 0.3 }}
      className={cn(
        "cursor-pointer px-3 py-1 rounded-sm transition-colors text-sm",
        isActive
          ? "text-[#4D73FD]"
          : isLightBackground
            ? "text-[#110F1D] hover:bg-[#110F1D]/10"
            : "text-white hover:bg-black"
      )}
    >
      {item}
    </motion.p>
  );

  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      {content}
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className={cn(
                  "backdrop-blur-sm rounded-sm overflow-hidden border shadow-xl",
                  isLightBackground
                    ? "bg-white border-neutral-300"
                    : "bg-black border-neutral-200"
                )}
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-sm border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-sm shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({
  children,
  isActive,
  isLightBackground = false,
  ...rest
}: any) => {
  return (
    <Link
      {...rest}
      className={cn(
        "transition-colors",
        isActive
          ? "text-[#4D73FD]"
          : isLightBackground
            ? "text-[#110F1D] hover:text-neutral-600"
            : "text-white hover:text-neutral-300"
      )}
    >
      {children}
    </Link>
  );
};
