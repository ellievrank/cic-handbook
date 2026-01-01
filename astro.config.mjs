// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: "http://cichandbook.com",
    integrations: [tailwind({
        applyBaseStyles: false,
    }), starlight({
        title: 'CIC Handbook',
        favicon: '/book.png',
        customCss: ['./src/styles/global.css'],
        markdown: {
            headingLinks: false,
        },
        sidebar: [
            {
                label: 'Start Here',
                items: [
                    { label: 'Home', link: '/' },
                ],
            },
            {
                label: 'Western Australia',
                items: [
                    { label: 'WA CIC Guide', link: '/wa-guide' },
                ],
            },
            // REMINDER: add other states here later
            {
                label: 'Resources',
                items: [
                    { label: 'Support Services', link: '/support-services' },
                ],
            },
        ],
        components: {
            Header: './src/components/layout/Header.astro',
            Footer: './src/components/layout/Footer.astro',
        },
    }), sitemap()],
});