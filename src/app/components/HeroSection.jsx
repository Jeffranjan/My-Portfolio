"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              Hello, I am{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Ranjan",
                1000,
                "Front-End Developer",
                1000,
                "Back-End Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl">
            Feel free to get in touch with me! Check out my CV from down here
          </p>
          <div>
            <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
              Hire Me
            </button>
            <button className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1  text-white rounded-full">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative overflow-hidden">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
