import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/git.png",
    title: "Git FindX App",
    description:
      "This project is a GitHub User Profile Viewer built with React. It allows users to search for GitHub users and view their profiles, including information such as followers, following, public repositories, and more. The application fetches data from the GitHub API and displays it in a user-friendly interface.",
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
    imgSrc: "/images/FarAwayProject.png",
    title: "Far Away Items Tracker App",
    description:
      "This project is a simple and interactive packing list application built with React. It allows users to add items to their packing list, manage the packed status, delete individual items, and clear the entire list. The app also provides a summary of the total items and the percentage of packed items.",
    tags: ["React", "CSS", "Development"],
    projectLink: "https://github.com/WMSSanharsha/Far-Away-Items-Tracker",
  },
  {
    imgSrc: "/images/feedbackUI.png",
    title: "Feedback UI",
    description:
      "This is a simple React application that allows users to submit feedback, view feedback statistics, and explore an about page. It utilizes React Router for navigation and context for state management.",
    tags: ["React", "Development", "CSS"],
    projectLink: "https://github.com/WMSSanharsha/Feedback-UI",
  },

  {
    imgSrc: "/images/ticket.png",
    title: "Support Ticket App",
    description:
      "A full-stack support ticket application (MERN) that allows users to create, view, and manage support tickets. Built with React, Redux, Node.js, and MongoDB, this app provides a seamless experience for users and admins to handle support requests efficiently.",
    tags: [
      "React",
      "MERN Stack",
      "ExpressJS",
      "NodeJS",
      "MongoDB",
      "JWT",
      "Authentication",
    ],
    projectLink: "https://github.com/WMSSanharsha/Support-Ticket-App",
  },

  {
    imgSrc: "/images/CatMemePurrfect.png",
    title: "Meme Picker - Purrfect Meme Generator",
    description:
      "This project is a simple meme picker that lets users select a cat meme based on their current emotion, with an option to show only animated GIFs.",
    tags: ["JavaScript", "CSS"],
    projectLink: "https://github.com/WMSSanharsha/Cat-Meme-Purrfect",
  },

  {
    imgSrc: "/images/casa.png",
    title: "Casa Estate",
    description:
      "This is a Real Estate Listing application built using React and Firebase. The app allows users to view property listings, share links, and contact landlords via email.",
    tags: [
      "Real Estate",
      "Development",
      "Firebase",
      "Leaflet",
      "CSS",
      "React",
      "Google API",
    ],
    projectLink: "https://github.com/WMSSanharsha/Casa-Estate-App",
  },

  {
    imgSrc: "/images/MovieApp.png",
    title: "Movie Search App",
    description:
      "Created a Movie search site using react where user can search, select, rate, and also view details about movies!",
    tags: ["React", "Development", "CSS", "OMDb API"],
    projectLink: "https://github.com/WMSSanharsha/UsePopcorn-Movie-App",
  },
];

function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">Projects I Have Done</h2>

        <div className="">
          {works.map(
            ({ imgSrc, title, description, tags, projectLink }, key) => {
              return (
                <ProjectCard
                  key={key}
                  imgSrc={imgSrc}
                  title={title}
                  description={description}
                  tags={tags}
                  projectLink={projectLink}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

export default Work;
