// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    app: {
        baseURL: '/',
        buildAssetsDir: '_nuxt',
        cdnURL: '',
        head: {
            meta: [
                {
                    "name": "viewport",
                    "content": "width=device-width, initial-scale=1"
                },
                {
                    "charset": "utf-8"
                }
            ],
            link: [],
            style: [],
            script: [],
            noscript: []
        }
    },
    components: {
        dirs: [
            {
                "path": "~/components/global",
                "global": true
            },
            "~/components"
        ]
    },
    css: [
        'assets/icon/font-awesome-6-pro/css/all.css',
        'assets/scss/main.scss'
    ],
    postcss: {
      plugins: {
          tailwindcss: {},
          autoprefixer: {}
      }
    },
    devServer: {
        // https: {
        //     key: './server.key',
        //     cert: './server.crt'
        // },
        port: 2511,
        url: 'https://localhost:2511'
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/variables.scss" as *;'
                }
            }
        }
    },
    modules: [
        '@element-plus/nuxt'
    ],
    elementPlus: { /** Options */ }
})
