"use client";

import React, {
  ReactNode,
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import clsx from "clsx";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

// Create a context to track the currently open accordion
const AccordionGroupContext = createContext<{
  openAccordionId: string | null;
  setOpenAccordionId: (id: string | null) => void;
} | null>(null);

// Create a wrapper component for the accordion group
export const AQAccordionGroup = ({ children }: { children: ReactNode }) => {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  return (
    <AccordionGroupContext.Provider
      value={{ openAccordionId, setOpenAccordionId }}
    >
      {children}
    </AccordionGroupContext.Provider>
  );
};

export const AQAccord = ({
  id,
  title,
  children,
  defaultOpen = false,
  className = "",
  onToggle,
  image,
  chevronColor = "#110F1D",
}: {
  id?: string; // Optional ID
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  onToggle?: (isOpen: boolean) => void;
  image?: ReactNode;
  chevronColor?: string;
}) => {
  // Get the accordion group context
  const accordionGroup = useContext(AccordionGroupContext);

  // Determine if this accordion is open based on the group context
  const isControlled = !!accordionGroup;
  const isOpenFromContext = isControlled
    ? accordionGroup.openAccordionId === id
    : undefined;

  // Use local state as fallback when not in a group
  const [isOpenLocal, setIsOpenLocal] = useState(defaultOpen);

  // The effective open state is determined by the context if in a group, or local state otherwise
  const isOpen = isControlled ? isOpenFromContext! : isOpenLocal;

  const detailsRef = useRef<HTMLDetailsElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Makes the smooth transition
  const updateParentHeight = () => {
    if (contentRef.current && isOpen) {
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    if (isOpen) {
      updateParentHeight();
    }
  }, [isOpen]);

  // Set default open accordion in the group on first render
  useEffect(() => {
    if (isControlled && defaultOpen && !accordionGroup.openAccordionId && id) {
      accordionGroup.setOpenAccordionId(id);
    }
  }, []);

  const handleToggle = (e: React.MouseEvent<HTMLElement>) => {
    // Only proceed if the click was on the summary or its children
    if (!e.target || !(e.target as HTMLElement).closest("summary")) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    const newState = !isOpen;

    if (contentRef.current) {
      if (newState) {
        // Opening
        contentRef.current.style.height = "0";
        contentRef.current.style.opacity = "0";

        // Update the context if in a group
        if (isControlled && id) {
          accordionGroup.setOpenAccordionId(id);
        } else {
          setIsOpenLocal(true);
        }

        // Force reflow
        contentRef.current.offsetHeight;
        contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
        contentRef.current.style.opacity = "1";
      } else {
        // Closing
        contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
        // Force reflow
        contentRef.current.offsetHeight;
        contentRef.current.style.height = "0";
        contentRef.current.style.opacity = "0";

        // Update the context if in a group
        if (isControlled) {
          accordionGroup.setOpenAccordionId(null);
        } else {
          // Wait for animation to finish before closing
          setTimeout(() => setIsOpenLocal(false), 300);
        }
      }
    }

    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <details
      ref={detailsRef}
      open={isOpen}
      className={clsx([
        "backdrop:opacity-50 rounded-xl py-4 pl-6 pr-4 overflow-y-auto overflow-x-hidden",
        "w-full rounded-none",
        className,
      ])}
      onClick={handleToggle}
    >
      <summary className="cursor-pointer flex items-center justify-between list-none [&::-webkit-details-marker]:hidden py-2">
        <div className="flex items-center gap-3 leading-tight">
          {image && <div className="flex-shrink-0">{image}</div>}
          <div className="text-lg">{title}</div>
        </div>
        <div
          className={clsx(
            "transition-transform duration-300",
            isOpen ? "rotate-180" : ""
          )}
        >
          <ChevronDown className="w-4 h-4" style={{ color: chevronColor }} />
        </div>
      </summary>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          height: isOpen ? "auto" : "0",
          opacity: isOpen ? "1" : "0",
        }}
        onTransitionEnd={() => {
          if (isOpen && contentRef.current) {
            contentRef.current.style.height = "auto";
          }
        }}
      >
        <div className="pt-6 text-md">{children}</div>
      </div>
    </details>
  );
};
