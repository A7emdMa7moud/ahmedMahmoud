import { Inter } from "next/font/google";
import Navabr from "./_components/Navbar";
import "animate.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Ahmed Mahmoud",
  description: "Frontend React Dev",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="bg-secondary text-text scroll-smooth	scroll-hidden"
    >
      <body className={`${inter.className}`}>
        <div className="container min-h-dvh p-[1rem] flex gap-[1rem] flex-col lg:flex-row">
          <div className="lg:w-[40%] w-full">
            <Navabr />
          </div>
          <div className="min-h-[90dvh] lg:w-[60%] flex items-center pt-[3rem] lg:pt-[0rem] lg:ml-[2rem] border-line">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
