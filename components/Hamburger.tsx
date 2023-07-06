'use client';

import {useState} from 'react';
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/DropdownMenu";
import Link from "next/link";
import {Menu} from "lucide-react";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownMenu
      open={isOpen}
      onOpenChange={toggleDropdown}
    >
      <DropdownMenuTrigger className="focus:outline-none">
        <Menu className="h-8 w-8 rounded-md text-emerald-900" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium truncate">
              Portfolio
            </p>
            <p className="w-[200px] truncate text-sm text-gray-700">
              Aritra Bose
            </p>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link className="cursor-none" href={'/'}>About</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link className="cursor-none" href={'/projects'}>Projects</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link className="cursor-none" href={'/resume'}>Resume</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Hamburger;