"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        Return to <span className="text-primary">Home page</span>
      </Link>
    </div>
  );
}
