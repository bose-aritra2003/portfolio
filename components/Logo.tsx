'use client'

import Image from "next/image";
import {motion} from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{x: -50, opacity: 0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{duration: 0.5, type: "tween"}}
      className="w-24 md:w-28 h-fit"
    >
      <Image
        src='/images/logo.svg'
        alt='logo'
        width={128}
        height={128}
      />
    </motion.div>

  )
}
export default Logo;