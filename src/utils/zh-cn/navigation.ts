
const navBarLinks = [
  { name: "首页", url: "/zh-cn" },
  { name: "产品", url: "/zh-cn/products" },
  { name: "方案", url: "/zh-cn/solutions" },
  { name: "咨询", url: "/zh-cn/consulting" },
  { name: "博客", url: "/zh-cn/blog" },
  { name: "联系我们", url: "/zh-cn/contact" },
];

const footerLinks = [
  {
    section: "生态系统",
    links: [
      { name: "文档", url: "/zh-cn/welcome-to-docs/" },
      { name: "产品", url: "/zh-cn/products" },
      { name: "技术咨询服务", url: "/zh-cn/services" },
    ],
  },
  {
    section: "公司",
    links: [
      { name: "关于我们", url: "#" },
      { name: "博客", url: "/zh-cn/blog" },
      { name: "招聘", url: "#" },
      { name: "客户", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/xairdb/",
  x: "https://x.com/xairdb",
  github: "https://github.com/airdb",
  google: "#",
  slack: "#",
  discord: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};