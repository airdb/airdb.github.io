
const navBarLinks = [
  { name: "首页", url: "/zh-cn" },
  { name: "产品", url: "/zh-cn/products" },
  { name: "服务", url: "/zh-cn/services" },
  { name: "博客", url: "/zh-cn/blog" },
  { name: "联系我们", url: "/zh-cn/contact" },
];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Documentation", url: "/zh-cn/welcome-to-docs/" },
      { name: "Outils et Équipements", url: "/zh-cn/products" },
      { name: "Services de Construction", url: "/zh-cn/services" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "#" },
      { name: "Blog", url: "/zh-cn/blog" },
      { name: "Carrières", url: "#" },
      { name: "Clients", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "https://x.com/xairdb",
  github: "https://github.com/airdb",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};