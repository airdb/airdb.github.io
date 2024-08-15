// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "Solutions", url: "/solutions" },
  { name: "Consulting", url: "/consulting" },
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
  facebook: "https://www.facebook.com/xairdb/",
  x: "https://x.com/xairdb",
  github: "https://github.com/airdb",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
  discord: "https://discord.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};