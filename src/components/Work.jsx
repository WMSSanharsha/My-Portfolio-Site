import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/FarAwayProject.png",
    title: "Far Away Items Tracker App",
    tags: ["React", "CSS", "Development"],
    projectLink: "https://github.com/WMSSanharsha/Far-Away-Items-Tracker",
  },
  {
    imgSrc: "/images/CatMemePurrfect.png",
    title: "Meme Picker - Purrfect Meme Generator",
    tags: ["JavaScript", "CSS"],
    projectLink: "https://github.com/WMSSanharsha/Cat-Meme-Purrfect",
  },
  {
    imgSrc: "/images/git.png",
    title: "Git FindX App",
    tags: [
      "React",
      "Github API",
      "Tailwind CSS",
      "Daisy UI",
      "React Router",
      "Context API",
    ],
    projectLink: "https://github.com/WMSSanharsha/Git-Finder",
  },
  {
    imgSrc: "/images/casaesttae.png",
    title: "Casa Estate",
    tags: [
      "Real Estate",
      "Development",
      "Firebase",
      "Leaflet",
      "CSS",
      "React",
      "Google Api",
    ],
    projectLink: "https://github.com/WMSSanharsha/Casa-Estate-App",
  },
  {
    imgSrc: "/images/feedbackUI.png",
    title: "Feedback UI",
    tags: ["React", "Development", "CSS"],
    projectLink: "https://github.com/WMSSanharsha/Feedback-UI",
  },
  {
    imgSrc: "/images/MovieApp.png",
    title: "Movie Search App",
    tags: ["React", "Development", "CSS", "OMDb API"],
    projectLink: "https://github.com/WMSSanharsha/UsePopcorn-Movie-App",
  },
];

function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">Projects I Have Done</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => {
            return (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Work;
