module.exports = {
  title: "sealos",
  tagline: "kubernetes-kernel-based cloud os! Let's sealos run kubernetes",
  url: "https://docs.sealos.io",
  baseUrl: "/",
  favicon: "img/sealos.ico",
  organizationName: "labring", // Usually your GitHub org/user name.
  projectName: "sealos", // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "sealos",
        src: "img/sealos-left.png",
      },
      links: [
        {
          to: "docs/doc1",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/labring/sealos",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/doc1",
            },
            {
              label: "Second Doc",
              to: "docs/doc2",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/labring/sealos",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} sealos. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/labring/sealos-site/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
