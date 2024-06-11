"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import js from "../_icons/js.svg";
import api from "../_icons/api.svg";
import react from "../_icons/react.svg";
import reactRedux from "../_icons/reactRedux.svg";
import reactRouter from "../_icons/reactRouter.svg";
import nodejs from "../_icons/nodejs.svg";
import nextjs from "../_icons/nextjs.svg";
// import github from "../_icons/github.svg";
// import codepen from "../_icons/codepen.svg";
import gmail from "../_icons/gmail.svg";
import facebook from "../_icons/facebook.svg";
import instagram from "../_icons/instagram.svg";
import telegram from "../_icons/telegram.svg";
import whatsapp from "../_icons/whatsapp.svg";

export default function Navabr() {
  const handelUlClasees = () => {
    const arrayLinks = Array.from(listItem.children);
    arrayLinks.forEach((e) => {
      e.addEventListener("click", () => {
        arrayLinks.map((e) => e.classList.remove("active"));
        e.classList.add("active");
      });
    });
  };
  useEffect(() => {
    handelUlClasees();
  }, []);
  return (
    <div className="relative h-full flex gap-[2rem] flex-col items-start justify-center">
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
      {/* skils */}
      <div>
        <p className="mb-1 tracking-widest font-mono text-primary font-bold">
          Skils
        </p>
        <ul className="flex border-l-2 mb-3 pl-2 flex-col border-line  *:capitalize *:font-mono *:text-textLight *:font-bold *:traking-wider">
          <li>
            javascript{" "}
            <Link href={""} className=" text-text/60">
              ES6
            </Link>
          </li>
          <li>
            APIs {"  "}
            <Link href={""} className=" text-text/60">
              Axios
            </Link>{" "}
            <Link href={""} className=" text-text/60">
              Postmen
            </Link>
          </li>
          <li>
            React{" "}
            <Link href={""} className=" text-text/60">
              Redux
            </Link>{" "}
            <Link href={""} className=" text-text/60">
              Redux_Toolkit
            </Link>{" "}
            <Link href={""} className=" text-text/60">
              Router
            </Link>{" "}
            <Link href={""} className=" text-text/60">
              Recoil
            </Link>
          </li>
          <li>
            Next.js{" "}
            <Link href={""} className=" text-text/60">
              SSR
            </Link>{" "}
            <Link href={""} className=" text-text/60">
              CSR
            </Link>
          </li>
          <li>Bootstrap</li>
          <li>
            tailwind{" "}
            <Link href={""} className=" text-text/60">
              daisyui{" "}
            </Link>
          </li>
        </ul>
        <div className="w-full flex gap-2 items-center">
          <Image width={20} alt="js" src={js} />
          <Image width={30} alt="api" src={api} />
          <Image width={20} alt="react" src={react} />
          <Image width={40} alt="next.js" src={nextjs} />
          <Image width={20} alt="nodeJs" src={nodejs} />
          <Image width={20} alt="reactRedux" src={reactRedux} />
          <Image width={20} alt="reactRouter" src={reactRouter} />
        </div>
      </div>
      {/* nav links */}
      <div
        className="flex z-[10] uppercase font-mono tracking-wider justify-center px-2 border-b border-line fixed top-0 left-0 pb-[1rem]  pt-[1rem] w-dvw backdrop-blur-sm flex-row gap-5 lg:gap-0 lg:p-0 lg:border-0 lg:pb-0 lg:w-full lg:flex-col lg:static"
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
        <p className=" mb-1 font-mono text-primary font-bold tracking-widest">
          Social
        </p>
        <ul className="flex border-l-2 mb-3 pl-2 flex-row gap-2 border-line  *:capitalize *:font-mono *:text-textLight *:font-bold *:traking-wider">
          <Image width={17.5} alt="api" src={facebook} />
          <Image width={17.5} alt="api" src={instagram} />
          <Image width={17.5} alt="api" src={telegram} />
          <Image width={17.5} alt="api" src={whatsapp} />
          <Image width={17.5} alt="api" src={gmail} />
        </ul>
      </div>
    </div>
  );
}
