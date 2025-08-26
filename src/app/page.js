"use client";


import Expertise from "./components/Expertise";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Insights from "./components/Insights";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Section from "./components/Section";
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {


  return (
    <div className="h-screen ">

      <Navbar />
      <Hero />
      <div className="md:mx-12">

        <Overview />
        <Expertise/>
        <Section/>
        <Insights/>
      </div>
    </div>
  );
}
