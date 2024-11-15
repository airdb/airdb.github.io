// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "Solutions", url: "/solutions" },
  { name: "Docs", url: "/welcome-to-docs/" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Products & Tools", url: "/products" },
      { name: "Consultation Services", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  github: "https://github.com/airdb",
  wiki: "https://airdb.wiki",
  facebook: "https://www.facebook.com/xairdb/",
  discord: "https://discord.com/invite/Mp4xttEqnF",
  linkedin: "https://www.linkedin.com/company/xairdb",
  x: "https://x.com/xairdb",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};