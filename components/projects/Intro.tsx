'use client'

import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

const Intro = () => {
  return (
    <div className="container max-w-7xl bg-emerald-50/25 w-full h-full flex flex-col py-20 gap-8">
      <motion.div
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, type: "tween"}}
      >
        <Image
          width={512}
          height={512}
          src='/images/pencil.svg'
          alt='pencil'
          className="w-52 mx-auto"
        />
      </motion.div>
      <motion.h3
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, type: "tween"}}
        className="text-emerald-500 text-3xl mx-auto font-light">
        What I've been up to.
      </motion.h3>
      <motion.div
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, type: "tween"}}
        className="flex flex-col gap-2 text-gray-500 text-lg mx-auto max-w-2xl tracking-wide text-center font-serif leading-relaxed"
      >
        <p>Here's a selection of some recent work.</p>
        <p>
          For more up to the minute work you can visit me on&nbsp;
          <span className="underline underline-offset-4 font-sans font-medium text-emerald-500 hover:text-emerald-700 transition-colors">
            <Link
              target="_blank"
              href='https://github.com/bose-aritra2003'
              className="cursor-none"
            >
              github
            </Link>
          </span>
          &nbsp;or&nbsp;
          <span className="underline underline-offset-4 font-sans font-medium text-emerald-500 hover:text-emerald-700 transition-colors cursor-none">
            <Link
              target="_blank"
              href='https://www.linkedin.com/in/bose-aritra2003/'
              className="cursor-none"
            >
              linkedin
            </Link>
          </span>
        </p>
      </motion.div>
    </div>
  )
}
export default Intro;