"use client";
import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  placeholder?: string;
  children: React.ReactNode;
}

export interface NativeSelectOptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
}

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  (
    { className, label, placeholder, children, id, value, onChange, ...props },
    ref
  ) => {
    const selectId =
      id || `select-${label?.toLowerCase().replace(/\s+/g, "-") || "select"}`;
    const [selectedValue, setSelectedValue] = React.useState(value || "");

    React.useEffect(() => {
      setSelectedValue(value || "");
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedValue(e.target.value);
      onChange?.(e);
    };

    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="text-[#110F1D] text-sm font-medium"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            value={selectedValue}
            onChange={handleChange}
            className={cn(
              "w-full appearance-none rounded-sm border border-gray-300 bg-white px-4 py-3 pr-10 focus:border-[#3862F8] focus:outline-none cursor-pointer transition-colors",
              selectedValue ? "text-[#110F1D]" : "text-gray-400",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}
            {children}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
      </div>
    );
  }
);
NativeSelect.displayName = "NativeSelect";

const NativeSelectOption = React.forwardRef<
  HTMLOptionElement,
  NativeSelectOptionProps
>(({ children, ...props }, ref) => {
  return (
    <option ref={ref} {...props}>
      {children}
    </option>
  );
});
NativeSelectOption.displayName = "NativeSelectOption";

export { NativeSelect, NativeSelectOption };
