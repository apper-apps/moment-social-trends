import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

const Button = forwardRef(({ className, variant = "primary", size = "default", children, ...props }, ref) => {
  const variants = {
    primary: "bg-gradient-to-r from-secondary to-primary text-white shadow-lg hover:shadow-xl hover:from-secondary hover:to-primary transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
    secondary: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all duration-200",
    outline: "border-2 border-gray-300 text-gray-700 bg-transparent hover:border-primary hover:text-primary transition-all duration-200",
    ghost: "text-gray-600 hover:text-primary hover:bg-gray-50 transition-all duration-200"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm font-medium",
    default: "px-6 py-3 text-base font-semibold",
    lg: "px-8 py-4 text-lg font-bold",
    xl: "px-12 py-5 text-xl font-bold"
  };

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = "Button";

export default Button;