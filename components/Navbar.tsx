import Logo from "@/components/Logo";
import Link from "next/link";
import Hamburger from "@/components/Hamburger";
import Navlink from "@/components/Navlink";
import {getNavItems} from "@/lib/utils";

const Navbar = () => {
  const navItems = getNavItems();

  return (
    <div className="sticky top-0 inset-x-0 bg-emerald-500/30 backdrop-blur-md z-10 py-7">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link className="cursor-none" href='/'>
          <Logo />
        </Link>
        <div className="flex gap-4 md:gap-6 items-center">
          <div className="gap-10 hidden md:flex text-emerald-600 font-light text-xl">
            {
              navItems.map(({name, href}, idx) => (
                <Navlink key={idx} href={href} name={name} idx={idx}/>
              ))
            }
          </div>
          <div className="md:hidden">
            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;