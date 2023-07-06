'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {FC} from "react";
import {motion} from "framer-motion";

interface NavlinksProps {
  href: string;
  name: string;
  idx: number
}

const Navlink: FC<NavlinksProps> = ({ href, name, idx }) => {
  const path = usePathname();

  return (
    <motion.div
      initial={{x: (50 + (idx * 50)), opacity: 0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{duration: 0.5 + (idx * 0.25), type: "tween"}}
    >
      <Link
        href={href}
        className={cn(
          "hover:text-emerald-900 transition-colors duration-300 cursor-none",
          path === href && 'text-emerald-900'
        )}
      >
        {name}
      </Link>
    </motion.div>

  )
}
export default Navlink;