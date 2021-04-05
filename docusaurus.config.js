const { toast } = require('react-toastify');
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

const githubOrgUrl = 'https://github.com/dekafinance';
const domain = 'https://deka.finance';

const customFields = {
  copyright: `© ${new Date().getFullYear()} <a target="_blank" rel="noopener noreferrer" href="https://deka.finance">DEKA.FINANCE</a>`,
  meta: {
    title: 'DEKA',
    image: '/img/meta.png',
    description: 'Official deka.finance blog',
    color: '#3BF0A2',
  },
  domain,
  githubOrgUrl,
  githubUrl: `${githubOrgUrl}/`,
  githubDocsUrl: `${githubOrgUrl}/deka-docs`,
  forum: 'https://discuss.deka.finance',
  app:'https://app.deka.finance',
  docs:'https://docs.deka.finance',
  stats: 'https://stats.deka.finance',
  discordUrl: `https://discord.gg/HASWTEbVa8`,
  twitterUrl: 'https://twitter.com/dekafinance',
  telegramUrl: 'https://t.me/dekafinanceofficial',
  version: '1.0.0',
  // announcementBarContent:
  //   '',
};

const config = {
  title: 'DEKA',
  tagline:
    '$DKA is a fully decentralized, autonomous & permissionless protocol for instant upfront yield on crypto assets.',
  url: customFields.domain,
  baseUrlIssueBanner: false,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: "throw",
  favicon: 'img/favicon.ico',
  organizationName: 'DekaFinance',
  projectName: 'DekaFinance',
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    'docusaurus-plugin-sass',
  ],
  customFields: { ...customFields },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'cn', 'fr'],
    localeConfigs: {
      en: {
        label: 'EN',
      },
      ru: {
        label: 'RU',
      },
      cn: {
        label: 'CN',
      },
      fr: {
        label: 'FR',
      }
    },
  },
  themeConfig: {
    hideableSidebar: true,
    algolia: {
      apiKey: '<apiKey>',
      indexName: 'dekafinance-blog',
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    // image: '/img/meta.png', // Gets used in Head as Meta Image (og:image)
    announcementBar: {
      id: 'github-star',
      content: customFields.announcementBarContent,
      backgroundColor: '#3bf0a2',
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: ' ',
      hideOnScroll: true,
      logo: {
        alt: 'deka.finance logo',
        src: 'img/logo.png',
      },
      items: [
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      copyright: customFields.copyright,
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: customFields.forum,
            },
            {
              label: 'Discord',
              href: customFields.discordUrl,
            },
            {
              label: 'Twitter',
              href: customFields.twitterUrl,
            },
            {
              label: 'Telegram',
              href: customFields.telegramUrl,
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'App',
              href: customFields.app,
            },
            {
              label: 'Docs',
              href: customFields.docs,
            },
            {
              label: 'Stats',
              href: customFields.stats,
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          path: './blog',
          routeBasePath: '/', // Set this value to '/'.
          showReadingTime: true,
          editUrl: `${customFields.githubDocsUrl}/tree/develop`,
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
      },
    ],
  ],
  stylesheets: [
    'https://deka-font-service.vercel.app/css?family=JetBrains%20Mono:ital,wght@0,300;0,500;0,700;0,800;0,600;0,400;0,200;0,100&display=swap',
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
  scripts: [
    {
      src: 'https://deka-analytics.vercel.app/dekatrack.js',
      async: true,
      defer: true,
      'data-ackee-server': 'https://deka-analytics.vercel.app',
      'data-ackee-domain-id': '30f8e775-f40a-4918-92b6-8242c0e9ea97',
    },
  ],
};

module.exports = { ...config };
