import macbook from "../_photos/macbook.jpg";
import beach from "../_photos/beach.jpg";
import ItemsSection from "../_components/ItemsSection";
export default function Projects() {
  return (
    <div className="projects w-full animate__animated animate__fadeIn min-h-[100%] relative pt-[8rem]">
      <div className="absolute top-[3rem] left-0 w-[5rem]">
        <h1 className="section w-[80dvw] text-textLight uppercase font-mono text-3xl mb-[2rem]">
          projects
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <ItemsSection
          img={macbook}
          title={"E-commerce"}
          description={
            "E-commerce, or electronic commerce, refers to the buying and selling of goods and services over the internet. It encompasses a wide range of business models, including Business-to-Consumer (B2C), Business-to-Business (B2B), Consumer-to-Consumer (C2C), and Consumer-to-Business (C2B). This digital marketplace allows consumers to shop from anywhere, anytime, providing convenience and a vast selection of products. E-commerce platforms typically feature user-friendly interfaces, secure payment methods, and efficient logistics systems to ensure a seamless shopping experience."
          }
          github={"https://ahmed-mahmoud.vercel.app/projects"}
          skils={["reactjs", "nextjs", "tailwind", "nodejs", "redux"]}
        />
        <ItemsSection
          img={beach}
          title={"To-Do List"}
          description={
            "Define the app's purpose, target audience, and core features Create wireframes and design the user Plan the tech stack and architecture"
          }
          github={"https://ahmed-mahmoud.vercel.app/projects"}
          skils={["nodejs", "nextjs", "tailwind", "js", "redux"]}
        />
      </div>
    </div>
  );
}
