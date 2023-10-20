/*
    File: Home.jsx
    Author: Ed Park
    Copyright: 2023 - Ed Park https://edpark.space
    Version: 1.0
*/

import { useOutletContext } from "react-router-dom";
import Socials from "../components/Socials";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import SplashSection from "../components/SplashSection";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const [isDarkMode] = useOutletContext();

  return (
    <>
      <SplashSection
        splashMessage={"Sameel Ahmad Security Engineer"}
        isDarkMode={isDarkMode}
        isErrorMode={false}
      />
      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h1 className="text-center max-w-[18em]">
          Protecting digital assets against online threats
        </h1>
        <p className="text-justify">
          "I am Sameel Ahmad, a final-year student at FAST NUCES, where I
          combine technical prowess with innovative solutions to specialize in
          Network Security. My current passion revolves around developing
          Machine Learning-based Intrusion Detection Systems (IDS) to enhance
          cyber defense capabilities."
        </p>
      </section>
      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h2>My Projects</h2>
        <Projects />
      </section>
      {/* <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h2>Testimonials</h2>
        <Testimonials />
      </section> */}
      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h2>Contact</h2>
        <Socials />
        <p className="text-center">
          Are you ready to get secure Let&apos;s chat!
        </p>
        <ContactForm />
      </section>
    </>
  );
}
