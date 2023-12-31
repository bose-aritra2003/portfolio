'use client'

import Image from "next/image";
import {motion} from "framer-motion";

const Intro = () => {
  return (
    <div className="container max-w-7xl bg-emerald-50/25 w-full h-full flex flex-col pt-16 gap-8">

      <motion.div
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1, type: "spring"}}
      >
        <Image
          width={512}
          height={512}
          src='/images/profile.png'
          alt='profile photo'
          className="w-52 mx-auto"
        />
      </motion.div>

      <motion.h3
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1, type: "spring"}}
        className="text-emerald-500 text-2xl md:text-3xl mx-auto font-light"
      >
        Hello.
      </motion.h3>

      <motion.p
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1, type: "spring"}}
        className="text-gray-500 text-base md:text-lg mx-auto max-w-lg tracking-wide text-center font-serif leading-relaxed"
      >
        I&apos;m a fullstack web developer based in India.
        I enjoy building full-stack web applications with a passion for crafting elegant digital experiences.
      </motion.p>
    </div>
  )
}
export default Intro;