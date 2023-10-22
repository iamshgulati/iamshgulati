"use client";

import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";

export function FramerMotionProvider({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
