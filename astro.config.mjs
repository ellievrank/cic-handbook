// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'CIC Handbook',
            customCss: [
                './src/styles/global.css',
            ],
            // social line removed completely
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
        }),
    ],
});