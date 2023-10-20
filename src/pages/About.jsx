/*
    File: About.jsx
    Author: Ed Park
    Copyright: 2023 - Ed Park https://edpark.space
    Version: 1.0
*/

import CubeCarousel from "../components/CubeCarousel";
import { dessertImages } from "../constants/data";

export default function About() {
  return (
    <section className="w-[100%] mt-9 sm:mt-10 md:mt-11 flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
      <h1 className="text-center max-w-[18em]">About Sameel</h1>
      <img
        className="w-[300px] profile-border"
        src="/assets/images/projects/me.webp"
        alt="Profile of Ed Park"
      />
      <p className="text-justify">
        My name is Sameel Ahmad, and I am a final year student at FAST NUCES,
        Pakistan. My primary focus centers on constructing and providing
        secuirty solutions .
      </p>
      <p className="text-justify">
        Throughout my academic career, I wokred on many projects such as Malware
        Analysis, Reverse Engineering, OSINT (Open Source Intelligence) ,
        Cryptography, Blockchain and IDS(Intrusoin Detetction System).{" "}
      </p>
      <p className="text-justify">
        Beyond coding, I find joy in giving back to the community. Volunteer
        teaching at the KIFES (Khalida Iqbal Free Education School) allows me to
        polish my communicaton and leading skills. I was also the part of
        academia for eight months as Computer Science teacher at The Concept
        Academy, Islamabad
      </p>
      {/* <p className="text-center">Here are a few of my baking creations:</p>
            <CubeCarousel name="desserts" carouselImages={dessertImages} /> */}
      {/* <p className="text-justify">
        My journey in web development is driven by the desire to make a
        meaningful impact on businesses and individuals alike. Combining my
        technical expertise, creativity, and dedication to continuous
        improvement, I strive to create compelling digital experiences that
        exceed expectations.
      </p> */}
    </section>
  );
}
