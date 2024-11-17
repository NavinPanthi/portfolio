"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

const LenisScrollLayout = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisScrollLayout;
