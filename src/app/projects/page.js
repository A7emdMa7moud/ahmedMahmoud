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
          title={"lorem lorem lorem"}
          description={
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          }
          github={"https://ahmed-mahmoud.vercel.app/projects"}
          skils={["reactjs", "nextjs", "tailwind", "nodejs", "redux"]}
        />
        <ItemsSection
          img={beach}
          title={"lorem lorem lorem"}
          description={
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          }
          github={"https://ahmed-mahmoud.vercel.app/projects"}
          skils={["nodejs", "nextjs", "tailwind", "js", "redux"]}
        />{" "}
        <ItemsSection
          img={macbook}
          title={"lorem lorem lorem"}
          description={
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          }
          github={"https://ahmed-mahmoud.vercel.app/projects"}
          skils={["reactjs", "nextjs", "tailwind", "nodejs", "redux"]}
        />
        <ItemsSection
          img={beach}
          title={"lorem lorem lorem"}
          description={
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          }
          github={"https://ahmed-mahmoud.vercel.app/projects"}
          skils={["nodejs", "nextjs", "tailwind", "js", "redux"]}
        />{" "}
        <ItemsSection
          img={macbook}
          title={"lorem lorem lorem"}
          description={
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          }
          github={"https://ahmed-mahmoud.vercel.app/projects"}
          skils={["reactjs", "nextjs", "tailwind", "nodejs", "redux"]}
        />
        <ItemsSection
          img={beach}
          title={"lorem lorem lorem"}
          description={
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          }
          github={"https://ahmed-mahmoud.vercel.app/projects"}
          skils={["nodejs", "nextjs", "tailwind", "js", "redux"]}
        />{" "}
        <ItemsSection
          img={macbook}
          title={"lorem lorem lorem"}
          description={
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          }
          github={"https://ahmed-mahmoud.vercel.app/projects"}
          skils={["reactjs", "nextjs", "tailwind", "nodejs", "redux"]}
        />
        <ItemsSection
          img={beach}
          title={"lorem lorem lorem"}
          description={
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          }
          github={"https://ahmed-mahmoud.vercel.app/projects"}
          skils={["nodejs", "nextjs", "tailwind", "js", "redux"]}
        />
      </div>
    </div>
  );
}
