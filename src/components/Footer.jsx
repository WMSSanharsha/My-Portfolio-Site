import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/WMSSanharsha",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sakila-sanharsha/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_sakila_sanharsha_/",
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/sakila_sanharsha",
  },
];

function Footer() {
  return (
    <footer className="section">
      <div className="container">
        <hr className="pb-10" />
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Hope to hear from you soon!
            </h2>

            <ButtonPrimary
              href="mailto:sakila.sanharsha2k19@gmail.com"
              label="Email Address"
              icon="chevron_right"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20 ml-auto content-between">
            <div>
              <p className="mb-2">
                Sitemap
                <ul>
                  {sitemap.map(({ label, href }, key) => {
                    return (
                      <li key={key}>
                        <a
                          href={href}
                          className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                        >
                          {label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </p>
            </div>

            <div>
              <p className="mb-2 ml-20">
                Socials
                <ul>
                  {socials.map(({ label, href }, key) => {
                    return (
                      <li key={key}>
                        <a
                          href={href}
                          className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                          target="_blank"
                        >
                          {label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="">
            <img
              src="/images/my-logo.png"
              alt="My Logo"
              width={40}
              height={40}
            />
          </a>

          <p className="text-zinc-500 text-sm">
            &copy; 2024 <span className="text-zinc-200">Sakila Sanharsha</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
