// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "sealos",
  tagline: "Kubernetes-kernel-based cloud os! Let's sealos run kubernetes",
  url: "https://docs.sealos.io",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/sealos.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "labring", // Usually your GitHub org/user name.
  projectName: "sealos", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({ versionDocsDirPath, docPath, locale }) =>
            "https://github.com/labring/sealos/tree/main/docs/4.0/" +
            (locale === "en" ? `${versionDocsDirPath}` : `i18n/${locale}`) +
            `/${docPath}`,
          editLocalizedFiles: false,
          editCurrentVersion: false,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/fanux/sealos-site/tree/main/",
          editLocalizedFiles: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig: { // @type {import('@docusaurus/preset-classic').ThemeConfig}
    algolia: {
      // Algolia 提供的应用 ID
      appId: "IGHQQ39TE4",

      //  公开 API 密钥：提交它没有危险
      apiKey: "9545276ccf7d08aaf95e41ab74a2202a",

      indexName: "sealos",

      // 可选：见下文
      contextualSearch: true,

      // 可选：声明哪些域名需要用 window.location 型的导航而不是 history.push。 适用于 Algolia 配置会爬取多个文档站点，而我们想要用 window.location.href 在它们之间跳转时。
      externalUrlRegex: "sealos.io|docs.sealos.io",

      // 可选：Algolia 搜索参数
      searchParameters: {},

      // 可选：搜索页面的路径，默认启用（可以用 `false` 禁用）
      searchPagePath: "search",

        // ……其他 Algolia 参数
      },
      navbar: {
        title: "",
        logo: {
          alt: "sealos",
          src: "img/sealos-left.png",
          srcDark: "img/sealos-left-dark.png",
        },
        items: [
          {
            type: "doc",
            docId: "Intro",
            position: "left",
            label: "Docs",
            to: "/docs/Intro"
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "apiSidebar",
            label: "API",
            to: "/docs/api/sealos"
          },
          {
            type: "doc",
            docId: "cloud/Intro",
            position: "left",
            sidebarId: "cloudDocSidebar",
            label: "Cloud Docs",
            to: "/docs/cloud/Intro"
          },
          { 
            to: "/blog", 
            label: "Blog", 
            sidebarId: "docSidebar",
            position: "left" 
          },
          {
            position: "left",
            to: "https://www.wenjuan.com/s/UZBZJv9ToJ/#",
            label: "Contact",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/labring/sealos",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Labring",
            items: [
              {
                label: "Company",
                to: "/company",
              },
              {
                label: "Laf FaaS",
                to: "https://github.com/labring/laf",
              },
              {
                label: "Cloud",
                to: "https://cloud.sealos.io",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                to: "https://discord.gg/7bPNZfsjJu",
              },
              {
                label: "Stack Overflow",
                to: "https://stackoverflow.com/questions/tagged/sealos",
              },
              {
                label: "Telegram",
                to: "https://t.me/cloudnativer",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "CloudImages",
                to: "https://hub.docker.com/u/labring",
              },
              {
                label: "GitHub",
                to: "https://github.com/labring/sealos",
              },
              {
                label: "CloudNativeLab",
                to: "https://icloudnative.io",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} sealos. Built with Docusaurus2.`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        additionalLanguages: ["docker"],
        theme: require("prism-react-renderer/themes/github"),
        darkTheme: require("./src/theme/dracula"),
      },
  },
  scripts: [
    {
      src: "https://cdn.bootcdn.net/ajax/libs/wow/1.1.2/wow.min.js",
      async: false,
    }
  ],
  plugins: [
    'docusaurus-plugin-sass',
  ]
};

module.exports = config;
