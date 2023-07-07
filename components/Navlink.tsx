'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {FC} from "react";

interface NavlinksProps {
  href: string;
  name: string;
}

const Navlink: FC<NavlinksProps> = ({ href, name }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "hover:text-emerald-900 transition-colors duration-300 cursor-none",
        path === href && 'text-emerald-900'
      )}
    >
      {name}
    </Link>
  )
}
export default Navlink;