import { defineConfig } from 'vite'

import htmlMinifier from 'vite-plugin-html-minifier';
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
    plugins: [
        createHtmlPlugin({
            pages: [
                {
                    filename: 'index.html',
                    template: 'index.html',
                    injectOptions: {
                        data: {
                            title: 'Index',
                        },
                    },
                },
                {
                    filename: 'geological.html',
                    template: 'geological.html',
                    injectOptions: {
                        data: {
                            title: 'Geological Art',
                        }
                    },
                },
            ],
        }),
        htmlMinifier({
            minify: true,
        }),
    ],
})