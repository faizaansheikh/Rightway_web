"use client";


import { useEffect, useState } from "react";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Insights from "./components/Insights";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Section from "./components/Section";
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div className="h-screen ">

      <Navbar />
      <Hero />
      <div className="mx-4 md:mx-[30px]">

        <Overview />
        <Expertise />
        <Section />
        <Insights />

      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
}
