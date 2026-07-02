"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

interface CTAButtonProps {
  variant?: "primary" | "secondary" | "emergency";
  href?: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  onClick?: () => void;
}

export default function CTAButton({
  variant = "primary",
  href,
  children,
  className = "",
  showIcon = false,
  onClick,
}: CTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-bold rounded-lg transition-all duration-200 cursor-pointer";

  const variantClasses = {
    primary:
      "bg-red-600 hover:bg-red-700 text-white py-3 px-6 text-base shadow-lg hover:shadow-xl",
    secondary:
      "border-2 border-white text-white hover:bg-white hover:text-gray-900 py-3 px-6 text-base",
    emergency:
      "bg-red-600 hover:bg-red-700 text-white py-4 px-8 text-lg shadow-xl hover:shadow-2xl w-full sm:w-auto",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {showIcon && <Phone className="w-5 h-5" />}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
