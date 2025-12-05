import { ReactNode, ButtonHTMLAttributes } from "react";

const styles = {
  primary: "bg-[#3862F8] text-white border border-[#6D8BF8]",
  secondary:
    "bg-[#32313F] text-white border border-[#32313F] hover:border-[#6D8BF8]",
  ghost: "border border-[#6D8BF8] text-white",
  lightGhost: "text-[#110F1D] border border-[#708FFD] hover:border-[#6D8BF8]",
};

export const Button = ({
  children,
  className,
  styleType = "primary",
  loading,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  styleType?: "ghost" | "primary" | "secondary" | "lightGhost";
  loading?: boolean;
}) => {
  // Replace clsx with template literal
  const style = [
    "rounded-sm transition px-10 py-3 text-xl",
    styles[styleType],
    loading && "flex justify-center",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={style} {...rest} disabled={loading || rest.disabled}>
      {loading ? (
        // Replace SmallSpinner with a simple CSS spinner
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};
