import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'
import {defineConfig} from "vite";

export default defineConfig({
    resolve: {
        // avoid issues with multiple Vue instances for local development
        // see: https://github.com/vuejs/core/issues/4344
        dedupe: ['vue'],
        alias: {
            '~': resolve(__dirname, './'),
            '~~': resolve(__dirname, './'),
        },
    },
    plugins: [
        AutoImport({
            imports: ['vue'],
        }),
    ],
})
