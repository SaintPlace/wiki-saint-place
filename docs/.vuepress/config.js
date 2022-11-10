const path = require('path');

module.exports = {
    title: 'Wiki | SaintPlace',
    description: ' ',
    head: [
        ['meta', { name: 'theme-color', content: '#a545d7' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'icon', href: '/favicon.svg' }]
    ],
    locales: {
        '/': {
            lang: 'ru-RU'
        }
    },
    markdown: {
        extractHeaders: [ 'h2', 'h3', 'h4', 'h5' ]
    },
    themeConfig: {
        editLinks: false,
        docsDir: '',
        lastUpdated: false,
        search: true,
        nav: [
            {
                text: 'Инструкция',
                link: '/guide/',
                // items: [
                //   {
                //     text: 'Регистрация',
                //     link: '/guide/',
                //     items: [
                //       {
                //         text: 'Выбор тарифа',
                //         link: '/guide/#выбор-тарифа'
                //       },
                //       {
                //         text: 'Форма регистрации',
                //         link: '/guide/#форма-регистрации'
                //       }
                //     ]
                //   }
                // ]
            },
            {
                text: 'SaintPlace',
                link: 'https://saint-place.ru'
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Инструкция',
                    collapsable: true,
                    sidebarDepth: 5,
                    children: [
                        '',
                        // 'product_import',
                        'product_add'
                    ]
                }
            ],
        }
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom', true]
    ],
    extraWatchFiles: ['.vuepress/config/**'],
}
