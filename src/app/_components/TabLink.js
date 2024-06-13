"use client"
import Link from "next/link";

export default function TabLink({ text, url, icon }) {
  return (
    <Link target="blank" href={url}>
      {text}
      {icon}
    </Link>
  );
}
