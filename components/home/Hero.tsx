'use client'

import '@/styles/clouds.css'
import Image from "next/image";
import {Sacramento} from 'next/font/google'
import {cn} from "@/lib/utils";
import {motion} from "framer-motion";

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
})

const Hero = () => {
  return (
    <div className="pt-24 bg-emerald-700/10 w-full h-full flex flex-col">
      <motion.div
        initial={{x: 50, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 0.5, type: "tween"}}
        className="flex justify-end mr-2 md:mr-64 mt-2"
      >
        <Image
          src='/images/cloud.svg'
          alt='cloud top right'
          width={128}
          height={128}
          className="right-cloud w-40"
        />
      </motion.div>

      <motion.div
        initial={{y: -50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, type: "tween"}}
        className="flex flex-col"
      >
        <h1 className={cn("text-7xl md:text-8xl text-emerald-500 flex justify-center", sacramento.className)}>
          I&apos;m Aritra .
        </h1>
        <p className="font-extralight text-emerald-500 text-xl md:text-2xl flex justify-center">
          a web developer.
        </p>
      </motion.div>
      <motion.div
        initial={{x: -50, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 0.5, type: "tween"}}
        className="flex justify-start ml-2 md:ml-64"
      >
        <Image
          src='/images/cloud.svg'
          alt='cloud top right'
          width={128}
          height={128}
          className="left-cloud w-40"
        />
      </motion.div>
      <motion.div
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, type: "tween"}}
      >
        <Image
          priority
          src='/images/land.svg'
          alt='hero image'
          width={800}
          height={800}
          className="mx-auto pt-24"
        />
      </motion.div>

    </div>
  );
};

export default Hero;
