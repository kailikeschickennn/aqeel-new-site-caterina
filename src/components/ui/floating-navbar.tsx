"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { MenuItem, HoveredLink } from "./navbar-menu";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
    menuItems?: {
      name: string;
      link: string;
    }[];
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();

  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Determine if we should use light background
  const isLightBackground =
    pathname === "/for-investors" || pathname === "/about-us/contact-us";
  const bgColor = isLightBackground ? "bg-[#F1F5FF]" : "bg-[#110F1D]";
  const textColor = isLightBackground ? "text-[#110F1D]" : "text-white";
  const logoSrc = isLightBackground
    ? "/aqeel_logo_black.svg"
    : "/aqeel_logo_white.svg";

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // Always show at the top
        setVisible(true);
      } else {
        if (direction < 0) {
          // Scrolling up - show navbar
          setVisible(true);
        } else {
          // Scrolling down - hide navbar
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "relative flex w-full fixed top-0 left-0 right-0 z-[1000] h-16 items-center",
          bgColor,
          className
        )}
        onMouseLeave={() => setActive(null)}
      >
        {/* Container for content with max-width */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center h-full relative">
          <div className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 flex items-center">
            <Image
              src={logoSrc}
              alt="Aqeel Logo"
              width={100}
              height={120}
              className="h-5 w-auto"
            />
          </div>
          {/* Desktop Navigation - hidden below xl */}
          <div className="hidden xl:flex flex-1 justify-center">
            <div className="flex flex-row gap-8">
              {navItems.map((navItem: any, idx: number) => {
                const isActive =
                  pathname === navItem.link ||
                  (navItem.link !== "/" && pathname?.startsWith(navItem.link));

                if (navItem.menuItems && navItem.menuItems.length > 0) {
                  return (
                    <MenuItem
                      key={`menu=${idx}`}
                      setActive={setActive}
                      active={active}
                      item={navItem.name}
                      href={navItem.link}
                      isActive={isActive}
                      isLightBackground={isLightBackground}
                    >
                      <div className="flex flex-col space-y-4 text-sm">
                        {navItem.menuItems.map(
                          (menuItem: any, menuIdx: number) => {
                            const isMenuItemActive = pathname === menuItem.link;
                            return (
                              <HoveredLink
                                key={menuIdx}
                                href={menuItem.link}
                                isActive={isMenuItemActive}
                                isLightBackground={isLightBackground}
                              >
                                {menuItem.name}
                              </HoveredLink>
                            );
                          }
                        )}
                      </div>
                    </MenuItem>
                  );
                }
                return (
                  <Link
                    key={`link=${idx}`}
                    href={navItem.link}
                    className={cn(
                      "relative items-center flex space-x-1 text-sm transition-colors",
                      isActive
                        ? "text-[#4D73FD]"
                        : isLightBackground
                          ? "text-[#110F1D] hover:text-neutral-600"
                          : "text-white hover:text-neutral-500"
                    )}
                  >
                    <span className="block sm:hidden">{navItem.icon}</span>
                    <span className="hidden sm:block">{navItem.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Desktop Buttons - hidden below xl */}
          <div className="hidden xl:flex absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 flex-row gap-4 items-center">
            <button
              className={cn(
                "w-[90px] border text-sm font-medium relative border-[#4D73FD] px-4 py-2 rounded-sm bg-[rgba(56,98,248,0.16)]",
                isLightBackground ? "text-[#110F1D]" : "text-white"
              )}
            >
              <span>Sign Up</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>
            <button className="w-[90px] border text-sm font-medium relative border-[#4D73FD] bg-[#3862F8] text-white px-4 py-2 rounded-sm">
              <span>Login</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>
          </div>
          {/* Mobile Hamburger Menu - shown below xl */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 xl:hidden flex items-center",
              textColor
            )}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "fixed top-0 left-0 right-0 h-full z-[999] xl:hidden overflow-y-auto",
                bgColor
              )}
            >
              {/* Header with Logo and Close */}
              <div
                className={cn(
                  "flex items-center justify-between px-4 sm:px-6 md:px-8 h-16 border-b",
                  isLightBackground ? "border-[#110F1D]/10" : "border-white/10"
                )}
              >
                <Image
                  src={logoSrc}
                  alt="Aqeel Logo"
                  width={100}
                  height={120}
                  className="h-5 w-auto"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className={textColor}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="px-6 sm:px-8 py-2 pb-32">
                {(() => {
                  // Flatten nav items: include main items and sub-items
                  const flatItems: Array<{
                    name: string;
                    link: string;
                    isActive: boolean;
                  }> = [];

                  navItems.forEach((navItem) => {
                    if (navItem.menuItems && navItem.menuItems.length > 0) {
                      // Add sub-items instead of parent
                      navItem.menuItems.forEach((menuItem) => {
                        const isActive = pathname === menuItem.link;
                        flatItems.push({
                          name: menuItem.name,
                          link: menuItem.link,
                          isActive,
                        });
                      });
                    } else {
                      const isActive =
                        pathname === navItem.link ||
                        (navItem.link !== "/" &&
                          pathname?.startsWith(navItem.link));
                      flatItems.push({
                        name: navItem.name,
                        link: navItem.link,
                        isActive,
                      });
                    }
                  });

                  return flatItems.map((item, idx) => {
                    const itemNumber = String(idx + 1).padStart(2, "0");
                    return (
                      <div key={idx}>
                        <Link
                          href={item.link}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center justify-between py-6 hover:text-[#4D73FD] transition-colors",
                            item.isActive
                              ? "text-[#4D73FD]"
                              : isLightBackground
                                ? "text-[#110F1D]"
                                : "text-white"
                          )}
                        >
                          <span className="text-xl font-medium">
                            {item.name}
                          </span>
                          <span
                            className={cn(
                              "text-sm",
                              isLightBackground
                                ? "text-[#110F1D]/40"
                                : "text-white/40"
                            )}
                          >
                            {itemNumber} /
                          </span>
                        </Link>
                        {idx < flatItems.length - 1 && (
                          <div
                            className={cn(
                              "h-px",
                              isLightBackground
                                ? "bg-[#110F1D]/10"
                                : "bg-white/10"
                            )}
                          />
                        )}
                      </div>
                    );
                  });
                })()}
              </div>

              {/* Buttons at Bottom */}
              <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 px-6 sm:px-8 py-6 space-y-4 border-t",
                  bgColor,
                  isLightBackground ? "border-[#110F1D]/10" : "border-white/10"
                )}
              >
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "w-full py-4 rounded-lg text-sm font-medium transition-colors",
                    isLightBackground
                      ? "bg-[#110F1D]/10 hover:bg-[#110F1D]/20 text-[#110F1D]"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  )}
                >
                  Login
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "w-full py-4 rounded-lg text-sm font-medium transition-colors",
                    isLightBackground
                      ? "bg-[#110F1D] text-[#F1F5FF] hover:bg-[#110F1D]/90"
                      : "bg-white text-[#110F1D] hover:bg-white/90"
                  )}
                >
                  Sign Up
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
