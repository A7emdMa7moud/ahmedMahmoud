"use client";
import Image from "next/image";
import linkReview from "../_icons/link.svg";
import reactjs from "../_icons/react.svg";
import nextjs from "../_icons/nextjs.svg";
import js from "../_icons/js.svg";
import nodejs from "../_icons/nodejs.svg";
import tailwind from "../_icons/tailwind.svg";
import redux from "../_icons/reactRedux.svg";
import gitHub from "../_icons/github.svg";
import Link from "next/link";
export default function ItemsSection({
  img,
  title,
  description,
  github,
  skils,
}) {
  const handelIcon = (i) => {
    switch (i) {
      case "reactjs":
        return reactjs;
      case "nextjs":
        return nextjs;
      case "js":
        return js;
      case "nodejs":
        return nodejs;
      case "tailwind":
        return tailwind;
      case "redux":
        return redux;
    }
  };
  return (
    <div class="flex flex-col border border-line rounded-lg overflow-hidden lg:grid lg:grid-cols-8">
      <div className="col-span-3">
        <div className="overflow-hidden relative">
          <Image className=" w-full " src={img} alt="ahmedMahmoud" />
          <Link
            className="absolute bg-secondary/50 hover:bg-navShadow/0 hover:bottom-0 transition duration-300 flex justify-center pb-[1rem] items-end gap-2 w-full h-full z-[100] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            target="blank"
            href={github}
          >
            <Image width={20} height={20} alt="linkReview" src={linkReview} />
            <Image width={20} height={20} alt="github" src={gitHub} />
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="col-span-5 p-2 larg:pb-[1rem] pb-[2rem] relative">
        <p className="text-textLight">{title}</p>
        <div className="animateText ">
          <p className="overflow-hidden max-h-[3.14em]">
            {description} {description}
          </p>
        </div>
        <div className="absolute w-full bottom-[.5rem] left-[0] px-[.5rem] flex items-center justify-end">
          <div className="flex gap-2 ">
            {skils.map((i) => {
              return (
                <>
                  <Image height={20} width={20} src={handelIcon(i)} alt={i} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
