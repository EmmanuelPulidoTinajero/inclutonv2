// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'INCLUTON 2025',
  tagline: 'Hackathon por la inclusión',
  url: 'https://incluton.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo_incluton.png',

  // GitHub pages deployment config.
  organizationName: 'incluton',
  projectName: 'incluton-2025',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'INCLUTON 2025',
        logo: {
          alt: 'Incluton Logo',
          src: 'img/logo_incluton.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            to: '/challenges',
            label: 'Desafíos',
            position: 'left',
          },
          {
            to: '/about',
            label: 'Nosotros',
            position: 'left',
          },
          {
            to: '/contact',
            label: 'Contacto',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contenido',
            items: [
              {
                label: 'Documentación',
                to: '/docs/intro',
              },
              {
                label: 'Desafíos',
                to: '/challenges',
              },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/incluton',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/incluton',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/incluton',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} INCLUTON. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

export default config;
