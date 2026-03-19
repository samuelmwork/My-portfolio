"use client";

import { useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import ScrollStage from "@/components/ScrollStage";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <ScrollStage />
      <WhatsAppButton />
    </>
  );
}
