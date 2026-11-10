import * as React from "react";
import { cn } from "@/lib/utils";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { className?: string; }
export default function Button({ className, ...props }: ButtonProps) {
  return <button className={cn("inline-flex items-center justify-center", className)} {...props} />;
}
