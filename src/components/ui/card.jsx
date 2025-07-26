import React from "react";
import { cn } from "../../lib/utils";

export const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ className, children, ...props }) => {
  return (
    <div className={cn("p-2", className)} {...props}>
      {children}
    </div>
  );
};
