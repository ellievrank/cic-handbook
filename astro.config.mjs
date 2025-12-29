// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        starlight({
            title: 'CIC Handbook',
            customCss: ['./src/styles/global.css'],
            sidebar: [
                {
                    label: 'Start Here',
                    items: [
                        { label: 'Home', link: '/' },
                        { label: 'All About CIC', link: '/about-cic' },
                    ],
                },
                {
                    label: 'Resources',
                    items: [
                        { label: 'Support Services', link: '/support-services' },
                    ],
                },
            ],
            components: {
                Header: './src/components/Header.astro',
                Footer: './src/components/Footer.astro',
            },
        }),
    ],
});