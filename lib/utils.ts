import {ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'
import {Presentation, Scroll, User2} from "lucide-react";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
}

export const getNavItems = () => {
  return [
    {
      name: 'about',
      href: '/',
      icon: User2,
    },
    {
      name: 'projects',
      href: '/projects',
      icon: Presentation,
    },
    {
      name: 'resume',
      href: 'https://drive.google.com/file/d/1EGXCdzFfzvNo7MPXGNQWZA7sOiUAa-NB/view?usp=share_link',
      icon: Scroll,
    }
  ];
}

export const getSkills = () => {
  return [
    {
      name: 'nextjs',
      url: 'https://nextjs.org',
    },
    {
      name: 'react',
      url: 'https://react.dev',
    },
    {
      name: 'tailwind',
      url: 'https://tailwindcss.com',
    },
    {
      name: 'mongodb',
      url: 'https://www.mongodb.com',
    },
    {
      name: 'prisma',
      url: 'https://www.prisma.io',
    },
    {
      name: 'planetscale',
      url: 'https://planetscale.com',
    },
    {
      name: 'zustand',
      url: 'https://zustand-demo.pmnd.rs',
    },
    {
      name: 'github',
      url: 'https://github.com',
    },
    {
      name: 'cpp',
      url: 'https://isocpp.org',
    },
    {
      name: 'typescript',
      url: 'https://typescriptlang.org',
    },
    {
      name: 'java',
      url: 'https://java.com',
    },
    {
      name: 'python',
      url: 'https://python.org',
    }
  ];
}

export const getProjects = () => {
  interface Project {
    title: string;
    description: string;
    name: string;
    theme: "blue" | "orange" | "pink" | "emerald" | "yellow";
    background: "bg-blue-300" | "bg-orange-300" | "bg-pink-300" | "bg-emerald-300" | "bg-yellow-300";
    text: "text-blue-900" | "text-orange-900" | "text-pink-900" | "text-emerald-900" | "text-yellow-900";
    github: string;
    live: string;
  }

  const projects: Project[] = [
    {
      title: 'Portfolio',
      description: 'Minimalistic and fully responsive portfolio website inspired from Seán Halpin\'s design. Beautifully crafted with subtle yet elegant animations that bring the UI to life.',
      name: 'portfolio',
      theme: 'emerald',
      background: 'bg-emerald-300',
      text: 'text-emerald-900',
      github: 'https://github.com/bose-aritra2003/portfolio',
      live: 'https://aritrabose.vercel.app/',
    },
    {
      title: 'Moments',
      description: 'A simple and user-friendly web application that allows users to engage in meaningful discussions, share captivating stories, and discover a world of diverse communities.',
      name: 'moments',
      theme: 'blue',
      background: 'bg-blue-300',
      text: 'text-blue-900',
      github: 'https://github.com/bose-aritra2003/moments',
      live: 'https://moments-connect.vercel.app/',
    },
    {
      title: 'Rhythmix',
      description: 'A music streaming web app where simplicity, sleek UI, and effortless usability converge in perfect harmony to create a unique and immersive experience for users.',
      name: 'rhythmix',
      theme: 'orange',
      background: 'bg-orange-300',
      text: 'text-orange-900',
      github: 'https://github.com/bose-aritra2003/rhythmix',
      live: 'https://rhythmix-music.vercel.app/',
    },
    {
      title: 'Goalkeeper',
      description: 'A powerful web application designed to simplify your task management experience. With its drag and drop functionality and AI todo summarizer, Goalkeeper helps you stay organized and efficient.',
      name: 'goalkeeper',
      theme: 'pink',
      background: 'bg-pink-300',
      text: 'text-pink-900',
      github: 'https://github.com/bose-aritra2003/goalkeeper',
      live: 'https://goal-keeper.vercel.app',
    },
    {
      title: 'Together',
      description: 'A real-time messaging web app that allows users to chat with others, create groups, share photos, and more. Together also comes with a built-in sentiment analysis feature for messages.',
      name: 'together',
      theme: 'emerald',
      background: 'bg-emerald-300',
      text: 'text-emerald-900',
      github: 'https://github.com/bose-aritra2003/together',
      live: 'https://together-chat.vercel.app/',
    },
    {
      title: 'Silly Notes',
      description: 'A fun and interactive note taking web app that allows user to create and delete notes. With it\'s signature look it almost feels like a real sticky note, but with a modern twist.',
      name: 'silly-notes',
      theme: 'yellow',
      background: 'bg-yellow-300',
      text: 'text-yellow-900',
      github: 'https://github.com/bose-aritra2003/silly-notes',
      live: 'https://silly-notes.vercel.app/',
    }
  ];

  return projects;
}

export const getEducation = () => {
  return [
    {
      degree: 'Secondary',
      year: '2009',
      school: 'St. Mary\'s School',
      location: 'Dum Dum, Kolkata',
      image: '/education/school-bag.svg'
    },
    {
      degree: 'Higher Secondary',
      year: '2021',
      school: 'Aditya Academy',
      location: 'Kadambagachi, Barasat',
      image: '/education/high-school.svg'
    },
    {
      degree: 'Bachelor of Technology',
      year: '2025',
      school: 'IIEST Shibpur',
      location: 'Shibpur, Howrah',
      image: '/education/graduation-cap.svg',
      dept: 'Information Technology',
    },
  ];
}