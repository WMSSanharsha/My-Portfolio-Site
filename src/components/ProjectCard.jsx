const ProjectCard = ({
  imgSrc,
  title,
  description,
  tags,
  projectLink,
  classes,
}) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors flex flex-col items-center md:flex-row items-start gap-4 mb-6 " +
        classes
      }
    >
      {/* Responsive Image Box */}
      <figure className="w-full h-[15rem] md:w-[15rem] md:h-[15rem] rounded-lg overflow-hidden flex-shrink-0 ">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </figure>

      {/* Content Section with Left Alignment */}
      <div className="flex-1 text-left">
        <h3 className="title-1 mb-3 text-white">{title}</h3>
        {/* Description */}
        {description && <p className="text-zinc-400 mb-3">{description}</p>}

        {/* Tags with Left Alignment */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {tags.map((label, key) => (
            <span
              key={key}
              className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
            >
              {label}
            </span>
          ))}
        </div>
        <hr className="pb-3" />
        {/* Link Icon */}
        <div className="w-20 h-12 rounded-lg grid place-items-center bg-amber-500 text-zinc-950 ml-auto">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>

      {/* Clickable Overlay */}
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
      ></a>
    </div>
  );
};

export default ProjectCard;
