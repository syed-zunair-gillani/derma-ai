'use client'

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  if (pathname === "/scan" || pathname.startsWith("/scan/")) return null;
  return <Footer />;
}
