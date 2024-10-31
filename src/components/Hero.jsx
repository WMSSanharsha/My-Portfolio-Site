import { ButtonPrimary, ButtonOutline } from "./Button";

function Hero() {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            {/* <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/MyPortfolioPhoto-modified.png"
                alt="Sakila Sanharsha Photo"
                width={40}
                height={40}
                className="img-cover"
              />
            </figure> */}

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available For Work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10  ">
            Hey, I am <br />
            Sakila Sanharsha...
            <br />
            <span className="text-base mt-0">
              A Full Stack Developer - Software Engineer
            </span>
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" />
            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto">
            <img
              src="/images/MyPortfolioPhoto-modified.png"
              alt="Sakila Sanharsha - My Photo"
              width={656}
              height={800}
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
