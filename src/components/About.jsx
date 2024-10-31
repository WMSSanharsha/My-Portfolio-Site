const aboutItems = [
  {
    label: "Project done",
    number: 45,
  },
  {
    label: "Years of experience",
    number: 1,
  },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl ">
            Welcome! I&apos;m Sakila Sanharsha, a full-stack developer from Sri
            Lanka specializing in the MERN stack. I am a fresh graduate from the
            University of Plymouth, UK, with a degree in software engineering.
            Although I&apos;m at the beginning of my professional journey, I
            have a strong foundation in web development and a passion for
            creating visually appealing and highly functional websites. You can
            see some of the projects I've completed below. Cheers!!
          </p>
          {/* <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => {
              return (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">
                      {number}
                    </span>
                    <span className="text-amber-500 font-semibold md:text-3xl">
                      +
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              );
            })}

            <img
              src="/images/my-logo.png"
              alt="My Logo"
              className="ml-auto md:w-[40px] md:h-[40px]"
              width={30}
              height={30}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;
