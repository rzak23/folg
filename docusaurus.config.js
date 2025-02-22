const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'FOLG',
  tagline: 'Belajar Bahasa Pemrograman Gratis',
  url: 'https://folg.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
   // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },
  favicon: 'img/favicon.ico',
  organizationName: 'Re.Studio', // Usually your GitHub org/user name.
  projectName: 'folg', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'FOLG',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Pemrograman Web',
        },
        {
          type: 'doc',
          docId: 'git',
          position: 'left',
          label: 'Git'
        },
        {
          type: 'doc',
          docId: 'codeigniter/intro',
          position: 'left',
          label: 'Codeigniter 4'
        },
        {
          type: 'doc',
          docId: 'laragon/index_laragon',
          position: 'left',
          label: 'Laragon'
        },
        {
          type: 'doc',
          docId: 'flyenv/index_flyenv',
          position: 'left',
          label: 'FlyEnv'
        },
        {
          type: 'doc',
          docId: 'contoh',
          position: 'right',
          label: 'Contoh'
        },
        {to: 'blog/', label: 'Blog', position: 'right'}
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Materi',
              to: '/docs/intro',
            }
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/rzak23',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Re.Studio Project`,
    },
    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
      additionalLanguages: [
        'php', 'bash',
      ]
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexDocs: true,
        indexBlog: false
      }),
    ]
  ]
};
