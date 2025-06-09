"use client";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface AnimateProps {
  children: ReactNode;
  animationType?:
    | "fadeIn"
    | "slideInRight"
    | "slideInLeft"
    | "slideUp"
    | "slideDown"
    | "zoomIn"
    | "bounce";
  once?: boolean;
  amount?: number;
  delay?: number;
  duration?: number;
  className?: string;
}

const pageVariants: any = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  bounce: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  },
};

const Animate: React.FC<AnimateProps> = ({
  children,
  animationType = "fadeIn",
  once = true,
  amount = 0.2,
  delay = 0,
  duration = 1,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const transition =
    animationType === "bounce"
      ? undefined
      : {
          type: "tween",
          ease: "easeInOut",
          duration,
          delay,
        };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={pageVariants[animationType]}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
