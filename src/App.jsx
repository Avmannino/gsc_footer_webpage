import "./App.css";

/*
  UPDATE THIS ONE VALUE when the final public GSC
  Wix domain is connected.

  Every internal footer link below is built from
  this base URL.
*/
const SITE_URL =
  "https://wingsarenact.wixstudio.com/gscnewsite";

const MEMBER_LOGIN_URL =
  "https://www.greenwichskatingclub.org/login";

const ADMISSIONS_EMAIL =
  "gscadmissions@greenwichskatingclub.org";

const exploreGroups = [
  {
    title: "About GSC",
    href: `${SITE_URL}/about-gsc`,
    links: [
      {
        label: "Club History",
        href: `${SITE_URL}/club-history`,
      },
      {
        label: "Board of Governors",
        href: `${SITE_URL}/board-of-governors`,
      },
      {
        label: "GSC Alumni",
        href: `${SITE_URL}/gsc-alumni`,
      },
    ],
  },
  {
    title: "Membership",
    href: `${SITE_URL}/membership`,
    links: [
      {
        label: "Prospective Members",
        href: `${SITE_URL}/prospective-members`,
      },
      {
        label: "Proposing a Candidate",
        href: `${SITE_URL}/proposing-a-candidate`,
      },
      {
        label: "Change of Status",
        href: `${SITE_URL}/change-of-status`,
      },
    ],
  },
  {
    title: "Programs",
    href: `${SITE_URL}/programs`,
    links: [
      {
        label: "Learn to Skate",
        href: `${SITE_URL}/learn-to-skate`,
      },
      {
        label: "Mini Mites",
        href: `${SITE_URL}/mini-mites`,
      },
      {
        label: "Youth Travel Hockey",
        href: `${SITE_URL}/youth-travel-hockey`,
      },
      {
        label: "Stateline Girls",
        href: `${SITE_URL}/stateline-girls`,
      },
      {
        label: "Figure Skating",
        href: `${SITE_URL}/figure-skating`,
      },
      {
        label: "Adult Hockey",
        href: `${SITE_URL}/adult-hockey`,
      },
    ],
  },
  {
    title: "Contact",
    href: `${SITE_URL}/contact`,
    links: [
      {
        label: "Map & Directions",
        href: `${SITE_URL}/directions`,
      },
      {
        label: "Contact Form",
        href: `${SITE_URL}/contact-form`,
      },
    ],
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
      />

      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="
          M20 10
          c0 5-8 11-8 11
          S4 15 4 10
          a8 8 0 1 1 16 0Z
        "
      />

      <circle
        cx="12"
        cy="10"
        r="2.5"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        className="icon-fill"
        cx="17.5"
        cy="6.5"
        r="1"
      />
    </svg>
  );
}

function FooterLogo() {
  return (
    <a
      className="footer-logo"
      href={`${SITE_URL}/`}
      target="_top"
      aria-label="Greenwich Skating Club home"
    >
      <img
        src={`${
          import.meta.env.BASE_URL
        }gsc-logo.png`}
        alt="Greenwich Skating Club"
      />
    </a>
  );
}

function ExploreMenu() {
  return (
    <nav
      className="footer-menu"
      aria-label="Footer navigation"
    >
      <h2>Explore</h2>

      <div className="footer-menu__groups">
        {exploreGroups.map((group) => (
          <div
            className="footer-menu__group"
            key={group.title}
          >
            <a
              className="footer-menu__group-title"
              href={group.href}
              target="_top"
            >
              <span>{group.title}</span>

              <ArrowIcon />
            </a>

            <ul>
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_top"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

function ConnectPanel() {
  return (
    <section
      className="footer-connect"
      aria-labelledby="connect-title"
    >
      <div className="footer-connect__info">
        <h2 id="connect-title">
          Connect
        </h2>

        <p>
          Questions about joining Greenwich Skating
          Club or visiting the rink?
        </p>

        <div className="footer-connect__details">
          <a
            href={`${SITE_URL}/directions`}
            target="_top"
          >
            <PinIcon />

            <span>
              Cardinal Road · Greenwich, Connecticut
            </span>
          </a>

          <a href={`mailto:${ADMISSIONS_EMAIL}`}>
            <EmailIcon />

            <span>
              {ADMISSIONS_EMAIL}
            </span>
          </a>
        </div>

        <a
          className="member-button"
          href={MEMBER_LOGIN_URL}
          target="_blank"
          rel="noreferrer"
        >
          <span>Member Login</span>

          <ArrowIcon />
        </a>

        <a
          className="instagram-link"
          href="https://www.instagram.com/thegreenwichskatingclub/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />

          <span>
            Follow GSC on Instagram
          </span>
        </a>
      </div>

      <div className="footer-map">
        <iframe
          title="Greenwich Skating Club location"
          src="https://www.google.com/maps?q=Greenwich+Skating+Club,+Cardinal+Road,+Greenwich,+CT&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

function App() {
  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div
        className="site-footer__accent"
        aria-hidden="true"
      >
        <span />
        <span />
      </div>

      <div
        className="site-footer__rings"
        aria-hidden="true"
      />

      <div className="footer-container site-footer__main">
        <section
          className="footer-brand"
          aria-label="Greenwich Skating Club"
        >
          <FooterLogo />
        </section>

        <ExploreMenu />

        <ConnectPanel />
      </div>

      <div className="site-footer__bottom">
        <div className="footer-container site-footer__bottom-inner">
          <p>
            © {currentYear} Greenwich Skating Club
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;