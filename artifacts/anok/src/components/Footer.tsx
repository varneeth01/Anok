import { FaDiscord, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const DISCORD = "https://discord.gg/eg7A4hVPEu";

const sections = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "#features", title: "Explore ANOK features for players, creators and teams" },
      { label: "Tournaments", href: "#tournaments", title: "View active ANOK esports tournaments" },
      { label: "Community", href: "#community", title: "Join the ANOK gaming community" },
      { label: "Launch", href: "#launch", title: "ANOK app launch countdown and waitlist" },
    ],
  },
  {
    title: "For Gamers",
    links: [
      { label: "Players", href: "#features", title: "ANOK features for competitive players" },
      { label: "Creators", href: "#features", title: "ANOK tools for content creators" },
      { label: "Teams & Clans", href: "#community", title: "Build and manage your esports team on ANOK" },
      { label: "Organizers", href: "#features", title: "Host tournaments on ANOK" },
    ],
  },
  {
    title: "Games",
    links: [
      { label: "Valorant", href: "#tournaments", title: "Valorant tournaments on ANOK" },
      { label: "BGMI", href: "#tournaments", title: "BGMI – Battlegrounds Mobile India tournaments" },
      { label: "More Coming Soon", href: "#launch", title: "More games coming to ANOK soon" },
    ],
  },
];

const socials = [
  { icon: <FaDiscord className="w-5 h-5" />, href: DISCORD, label: "Join ANOK on Discord" },
  { icon: <FaInstagram className="w-5 h-5" />, href: "https://www.instagram.com/anokesports", label: "Follow ANOK on Instagram" },
  { icon: <FaTwitter className="w-5 h-5" />, href: "https://twitter.com/anokgg", label: "Follow ANOK on Twitter / X" },
  { icon: <FaLinkedin className="w-5 h-5" />, href: "https://linkedin.com/company/anokgg", label: "ANOK on LinkedIn" },
];

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-black border-t border-white/10 px-4 sm:px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <a href="#main-content" aria-label="ANOK – Back to top" className="inline-block mb-4">
              <span className="font-display font-black text-3xl tracking-wider text-white">ANOK</span>
            </a>
            <p className="text-sm text-foreground/50 leading-relaxed mb-6 max-w-xs">
              India's next-gen gaming and esports platform built for Gen-Z players, creators, teams, and tournament organizers.
            </p>
            <nav aria-label="Social media links">
              <ul className="flex gap-4 list-none p-0 m-0" role="list">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      title={s.label}
                      className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-primary/20 hover:border-primary/40 flex items-center justify-center text-foreground/50 hover:text-white transition-all"
                    >
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Link columns */}
          {sections.map((sec) => (
            <nav key={sec.title} aria-label={`${sec.title} links`}>
              <h3 className="text-xs font-bold tracking-widest text-foreground/40 uppercase mb-5">{sec.title}</h3>
              <ul className="space-y-3 list-none p-0 m-0" role="list">
                {sec.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      title={link.title}
                      className="text-sm text-foreground/60 hover:text-primary transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/30 font-medium text-center sm:text-left">
            © {new Date().getFullYear()} ANOK Esports Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#main-content" className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors" title="Back to top of ANOK page">Back to Top</a>
            <a href={DISCORD} target="_blank" rel="noopener noreferrer" className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors" title="Contact ANOK on Discord">Contact Us</a>
            <a href="/sitemap.xml" className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors" title="ANOK XML Sitemap for search engines">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

