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
    imgSrc: "/images/project-3.jpg",
    title: "Recipe app",
    tags: ["Development", "API"],
    projectLink: "",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real state website",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee-org/wealthome",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
  },
];

function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">Projects I Have Done</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
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
