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
      <head>
        <link
          rel="icon"
          href="data:image/png;base64,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"
          sizes="any"
        />
        {/* google adsense */}
        <meta
          name="google-adsense-account"
          content="ca-pub-7025460416385128"
        ></meta>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7025460416385128"
          crossorigin="anonymous"
        ></script>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7025460416385128"
          crossorigin="anonymous"
        ></script>
        {/* google adsense */}
      </head>
      <body className={`${inter.className}`}>
        <div className="container min-h-dvh p-[1rem] flex gap-[1rem] flex-col lg:flex-row">
          <div className="lg:w-[40%] w-full">
            <Navabr />
          </div>
          <div className="min-h-[90dvh] lg:w-[60%] flex items-center pt-[3rem] lg:pt-[0rem] border-line">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
