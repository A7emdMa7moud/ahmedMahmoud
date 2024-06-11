export default function About() {
  return (
    <div className="about min-h-[100%] relative pt-[8rem]">
      <div className="absolute top-[3rem] left-0 w-[5rem]">
        <h1 className="section min-w-[30rem] text-textLight uppercase font-mono text-3xl mb-[2rem]">
          about me
        </h1>
      </div>
      <div className="flex flex-col gap-[3rem]">
        <div className="flex gap-[1rem] flex-col lg:gap-[3rem] lg:flex-row">
          <p className="text-textLight  font-mono">2005</p>
          <p>
            I am Ahmed Mahmoud, from Cairo,{" "}
            <span className="text-textLight">Egypt</span>. I was born and raised
            in this vibrant city, which continues to be my home.
          </p>
        </div>
        <div className="flex gap-[1rem] flex-col lg:gap-[3rem] lg:flex-row">
          <p className="text-textLight font-mono ">2019</p>
          <p>
            My educational journey began in public schools in Helwan, where I
            developed a solid foundation in various subjects. In high school, I
            specialized in{" "}
            <span className="text-textLight">Computer and Networks</span>{" "}
            Training at a vocational school, which honed my technical skills and
            passion for <span className="text-textLight">technology</span>.
          </p>
        </div>
        <div className="flex gap-[1rem] flex-col lg:gap-[3rem] lg:flex-row">
          <p className="text-textLight font-mono ">2023</p>
          <p>
            I took a significant step forward by enrolling in the university to
            study{" "}
            <span className="text-textLight">
              Management Information Systems{" "}
              <span className="text-primary">MIS</span>
            </span>
            . This program has further broadened my understanding of how
            information systems can be applied to manage and support business
            operations effectively.
          </p>
        </div>
        <div className="flex gap-[1rem] flex-col lg:gap-[3rem] lg:flex-row">
          <p className="font-mono text-textLight ">2024</p>
          <p>
            I am eager to apply my skills and knowledge in a professional
            setting, contributing to innovative projects and continuing to learn
            and grow as a frontend developer.
          </p>
        </div>
      </div>
    </div>
  );
}
