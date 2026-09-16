"use client";

import React from "react";
import Link from "next/link";

export interface SketchCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  rotation?: "none" | "left" | "right" | "slight-left" | "slight-right";
  decoration?: "tape" | "tack" | "none";
  variant?: "default" | "post-it" | "wash";
}

export function SketchCard({
  children,
  className = "",
  rotation = "none",
  decoration = "none",
  variant = "default",
  style,
  ...props
}: SketchCardProps) {
  const rotationClass = {
    none: "",
    left: "-rotate-1",
    right: "rotate-1",
    "slight-left": "-rotate-0.5",
    "slight-right": "rotate-0.5",
  }[rotation];

  const variantStyle = {
    default: "bg-paper-bright text-foreground border-border",
    "post-it": "bg-[#fff9c4] text-[#2d2d2d] border-[#2d2d2d] dark:bg-[#323945] dark:text-[#f4f0ea] dark:border-[#f4f0ea]",
    wash: "bg-paper-wash text-foreground border-border",
  }[variant];

  return (
    <div
      className={`relative wobbly-card p-6 transition-all duration-150 ${variantStyle} ${rotationClass} ${className}`}
      style={{
        borderRadius: "20px 255px 20px 255px / 255px 20px 255px 20px",
        ...style,
      }}
      {...props}
    >
      {decoration === "tape" && <div className="tape-strip" aria-hidden="true" />}
      {decoration === "tack" && <div className="thumbtack-pin" aria-hidden="true" />}
      {children}
    </div>
  );
}

export interface SketchButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
}

export function SketchButton({
  children,
  className = "",
  variant = "primary",
  href,
  target,
  rel,
  onClick,
  type = "button",
  icon,
}: SketchButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2 font-body font-bold text-lg leading-none border-[3px] border-border shadow-sketch transition-all duration-100 cursor-pointer select-none active:translate-x-1 active:translate-y-1 active:shadow-sketch-none";

  const variantClasses = {
    primary:
      "bg-paper-bright text-foreground hover:bg-accent hover:text-white hover:border-border hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-sketch-sm",
    secondary:
      "bg-muted-bg text-foreground hover:bg-secondary-accent hover:text-white hover:border-border hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-sketch-sm",
    danger:
      "bg-accent text-white hover:bg-red-700 hover:border-border hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-sketch-sm",
    ghost:
      "bg-transparent text-foreground border-dashed hover:bg-paper-wash hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-sketch-sm",
  }[variant];

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  const styleObj = {
    borderRadius: "255px 25px 225px 25px / 25px 225px 25px 255px",
  };

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={`${baseClasses} ${variantClasses} ${className}`}
        style={styleObj}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={styleObj}
    >
      {content}
    </button>
  );
}

export interface SketchBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "secondary" | "post-it" | "muted";
  rotate?: boolean;
}

export function SketchBadge({
  children,
  className = "",
  variant = "default",
  rotate = false,
  style,
  ...props
}: SketchBadgeProps) {
  const variantClasses = {
    default: "bg-paper-bright text-foreground border-border shadow-sketch-sm",
    accent: "bg-accent text-white border-border shadow-sketch-sm",
    secondary: "bg-secondary-accent text-white border-border shadow-sketch-sm",
    "post-it": "bg-[#fff9c4] text-[#2d2d2d] border-[#2d2d2d] dark:bg-[#3a4454] dark:text-[#f4f0ea] dark:border-[#f4f0ea] shadow-sketch-sm",
    muted: "bg-muted-bg text-foreground border-border",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 font-body text-base font-semibold border-2 ${variantClasses} ${
        rotate ? "-rotate-1" : ""
      } ${className}`}
      style={{
        borderRadius: "120px 15px 100px 12px / 12px 100px 12px 120px",
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}

export function SketchArrow({
  className = "",
  direction = "down-right",
}: {
  className?: string;
  direction?: "down-right" | "down-left" | "right";
}) {
  if (direction === "down-right") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-12 h-12 stroke-accent ${className}`}
        aria-hidden="true"
      >
        <path
          d="M10 14 C 22 10, 42 16, 44 38 C 45 44, 46 50, 48 54"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="4 3"
        />
        <path
          d="M36 50 C 42 53, 46 54, 50 54 C 49 48, 49 42, 50 36"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 64 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-12 h-6 stroke-accent ${className}`}
      aria-hidden="true"
    >
      <path
        d="M6 16 C 20 13, 38 18, 54 16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="4 3"
      />
      <path
        d="M44 8 C 48 12, 53 15, 56 16 C 52 18, 47 21, 44 24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SquigglyUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-3 stroke-accent overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2 7 Q 16 1, 30 7 T 58 7 T 86 7 T 114 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
