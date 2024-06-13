"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TabLink from "./TabLink";

import js from "../_icons/js.svg";
import react from "../_icons/react.svg";
// import reactRedux from "../_icons/reactRedux.svg";
// import reactRouter from "../_icons/reactRouter.svg";
import nodejs from "../_icons/nodejs.svg";
import nextjs from "../_icons/nextjs.svg";
import github from "../_icons/github.svg";
import codepen from "../_icons/codepen.svg";
import facebook from "../_icons/facebook.svg";
import instagram from "../_icons/instagram.svg";
import whatsapp from "../_icons/whatsapp.svg";
import tailwind from "../_icons/tailwind.svg";
import bootstrap from "../_icons/bootstrap.svg";

export default function Navabr() {
  const navLinks = () => {
    const arrayLinks = Array.from(listItem.children);
    arrayLinks.forEach((e) => {
      e.addEventListener("click", () => {
        arrayLinks.map((e) => e.classList.remove("active"));
        e.classList.add("active");
      });
    });
  };
  useEffect(() => {
    navLinks();
  }, []);
  return (
    <div className="relative lg:fixed lg:top-0  h-full flex gap-[2rem] flex-col items-start justify-center">
      {/* header details */}
      <div className="pt-[6rem] lg:pt-0">
        <h1 className="text-5xl font-bold lg:pt-0  text-textPrimary mb-5">
          Ahmed Mahmoud
        </h1>
        <p className="text-textLight text-2xl mb-1">
          Frontend <span className="text-primary">React</span> Dev
        </p>
        <p className="border-l-2 pl-2 border-line">
          I build web pages and web applications.
          <br />
          using new features in web world.
        </p>
      </div>
      {/* github codepen */}
      {/* skils */}
      <div>
        <p className="mb-1 tracking-widest font-mono text-primary font-bold">
          Skils
        </p>
        <ul className="flex border-l-2 mb-3 pl-2 flex-col border-line  *:capitalize *:font-mono *:text-textLight *:font-bold *:traking-wider">
          <li>
            javascript{" "}
            <Link
              href={"https://ecma-international.org"}
              className=" text-text/60"
            >
              ES6
            </Link>
          </li>
          <li>
            APIs {"  "}
            <Link href={"https://axios-http.com"} className=" text-text/60">
              Axios
            </Link>{" "}
            <Link href={"https://www.postman.com"} className=" text-text/60">
              Postmen
            </Link>
          </li>
          <li>
            React{" "}
            <Link href={"https://redux.js.org"} className=" text-text/60">
              Redux
            </Link>{" "}
            <Link
              href={"https://redux-toolkit.js.org"}
              className=" text-text/60"
            >
              Redux_Toolkit
            </Link>{" "}
            <Link href={"https://reactrouter.com"} className=" text-text/60">
              Router
            </Link>{" "}
            <Link href={"https://recoiljs.org"} className=" text-text/60">
              Recoil
            </Link>
          </li>
          <li>
            Next.js{" "}
            <Link
              href={
                "https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering"
              }
              className=" text-text/60"
            >
              SSR
            </Link>{" "}
            <Link
              href={
                "https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering"
              }
              className=" text-text/60"
            >
              CSR
            </Link>
          </li>
          <li>Bootstrap</li>
          <li>
            tailwind{" "}
            <Link href={"https://daisyui.com/"} className=" text-text/60">
              daisyui{" "}
            </Link>{" "}
            <Link href={"https://flowbite.com/"} className=" text-text/60">
              flowbite{" "}
            </Link>
          </li>
        </ul>
        <div className="w-full flex gap-2 items-center">
          <TabLink
            url={"https://en.wikipedia.org/wiki/JavaScript"}
            icon={<Image width={20} alt="js" src={js} />}
          />
          <TabLink
            url={"https://react.dev"}
            icon={<Image width={20} alt="react" src={react} />}
          />
          <TabLink
            url={"https://nextjs.org"}
            icon={<Image width={40} alt="next.js" src={nextjs} />}
          />
          <TabLink
            url={"https://nodejs.org/en"}
            icon={<Image width={20} alt="nodeJs" src={nodejs} />}
          />
          <TabLink
            url={"https://tailwindcss.com"}
            icon={<Image width={20} alt="tailwind" src={tailwind} />}
          />{" "}
          <TabLink
            url={"https://getbootstrap.com"}
            icon={<Image width={20} alt="bootstrap" src={bootstrap} />}
          />
        </div>
      </div>
      {/* nav links */}
      <div
        className="flex z-[10] uppercase font-mono tracking-wider justify-center px-2 border-b border-line fixed top-0 left-0 pb-[1rem]  pt-[1rem] w-dvw backdrop-blur-sm lg:backdrop-blur-none flex-row gap-5 lg:gap-0 lg:p-0 lg:border-0 lg:pb-0 lg:w-full lg:flex-col lg:static"
        id="listItem"
      >
        <Link href={"/"} className="active">
          home
        </Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      {/* social links */}
      <div>
        <p className="mb-1 font-mono text-primary font-bold tracking-widest">
          Social
        </p>
        <ul className=" border-l-2 mb-3 pl-2 flex flex-col gap-[.5rem] border-line *:font-mono *:text-textLight *:font-bold *:traking-wider">
          <div className="flex flex-row gap-2">
            <Link
              target="_blank"
              href={"https://www.facebook.com/A7mdMa7mwd?mibextid=ZbWKwL"}
            >
              <Image width={17.5} alt="api" src={facebook} />
            </Link>{" "}
            <Link
              target="_blank"
              href={
                "https://www.instagram.com/a7mdma7mwd?igsh=MTE5ZWJhb3p2M2t3cg%3D%3D"
              }
            >
              <Image width={17.5} alt="api" src={instagram} />
            </Link>
            <Link target="_blank" href={"https://wa.me/201147823132"}>
              <Image width={17.5} alt="api" src={whatsapp} />
            </Link>{" "}
          </div>
          <div className="flex flex-row gap-2">
            <Link target="blank" href={"https://github.com/A7emdMa7moud"}>
              <Image width={17.5} alt="github" src={github} />
            </Link>
            <Link target="blank" href={"https://codepen.io/A7MD-Mahmoud"}>
              <Image width={17.5} alt="codepen" src={codepen} />
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}
