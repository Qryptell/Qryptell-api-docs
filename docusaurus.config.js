// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Lunar Loom',
    tagline: 'End To End Encrypted Chat App',
    favicon: 'img/LunarLoom.png',

    // Set the production url of your site here
    url: 'https://LoomingLunar.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/LunarLoom-api-docs',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'LoomingLunar', // Usually your GitHub org/user name.
    projectName: 'LunarLoom-api-docs', // Usually your repo name.
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    plugins: [
        // [require.resolve('@easyops-cn/docusaurus-search-local'),
        //     {
        //         hashed: true,
        //         indexBlog: false,
        //         docsRouteBasePath: '/',
        //     },
        // ],
        [
            '@docusaurus/plugin-content-docs',
            ({
                id: 'websocket',
                path: 'docs/websocket',
                routeBasePath: 'websocket',
                editUrl: (params) => {
                    return 'https://github.com/LoomingLunar/websocket/edit/main/' + params.docPath;
                },
                editCurrentVersion: true,
                sidebarPath: require.resolve('./sidebarsWebsocket.js'),
                showLastUpdateAuthor: false,
                showLastUpdateTime: true,
            }),
        ],
    ],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    path: 'docs/core',
                    routeBasePath: '/', // Serve the docs at the site's root
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: false,
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Lunar Loom',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/LunarLoom.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'welcome',
                        position: 'left',
                        label: '🏠 Home',
                    },
                    {
                        type: 'dropdown',
                        label: '🧩 Services',
                        position: 'left',
                        items: [{
                            type: 'docsVersion',
                            label: 'websocket',
                            docsPluginId: 'websocket',
                        }],
                    },
                    {
                        href: 'https://github.com/LoomingLunar/LunarLoom-backend',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/LoomingLunar/',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
