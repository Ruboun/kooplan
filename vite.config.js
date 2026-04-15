import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import { parseEnv } from 'node:util';
import handlebars from 'handlebars';

const pages = {"da77339e-2b38-45a5-bee1-b6b5e2b3cbb4-en":{"outputDir":"./nastaveni","lang":"en","cacheVersion":286,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<script src=\"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js\"></script>\r\n\r\n<style>\r\n    /* Na obrazovce může být print-root klidně skrytý */\r\n    @media screen {\r\n        #print-root {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    /* Tyto styly používá html2pdf při renderu */\r\n    #print-root {\r\n        width: 190mm;\r\n        margin: 0 auto;\r\n        padding: 0;\r\n        background: #fff;\r\n    }\r\n\r\n    #print-root .print-item {\r\n        break-inside: avoid;\r\n        page-break-inside: avoid;\r\n        margin-bottom: 8mm;\r\n    }\r\n\r\n    #print-root .print-break {\r\n        break-before: page;\r\n        page-break-before: always;\r\n    }\r\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/nastaveni/"},{"rel":"alternate","hreflang":"en","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/nastaveni/"}]},"c57d39a0-74c0-42f4-90cb-cca890f55c63-en":{"outputDir":"./planzivota","lang":"en","cacheVersion":286,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<script src=\"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js\"></script>\r\n\r\n<style>\r\n    /* Na obrazovce může být print-root klidně skrytý */\r\n    @media screen {\r\n        #print-root {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    /* Tyto styly používá html2pdf při renderu */\r\n    #print-root {\r\n        width: 190mm;\r\n        margin: 0 auto;\r\n        padding: 0;\r\n        background: #fff;\r\n    }\r\n\r\n    #print-root .print-item {\r\n        break-inside: avoid;\r\n        page-break-inside: avoid;\r\n        margin-bottom: 8mm;\r\n    }\r\n\r\n    #print-root .print-break {\r\n        break-before: page;\r\n        page-break-before: always;\r\n    }\r\n</style>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js\"></script>","body":"\n<style>\r\n@media print {\r\n    /* Vynutí barvy pozadí a grafiku i v PDF */\r\n    * { \r\n        -webkit-print-color-adjust: exact !important; \r\n        print-color-adjust: exact !important; \r\n    }\r\n\r\n    /* Nastavení pro váš hlavní kontejner */\r\n    #export-oblast {\r\n        background-color: #F8F9FA !important; /* Šedobílé pozadí z vašeho webu */\r\n        padding: 20px !important;\r\n        width: 100% !important;\r\n    }\r\n\r\n    /* Aby se karty (Zdraví, Auto, atd.) nerozsekly v půlce na dvě stránky */\r\n    .card, [class*=\"card\"], [class*=\"section\"] { \r\n        page-break-inside: avoid !important;\r\n        break-inside: avoid !important;\r\n        margin-bottom: 20px !important;\r\n    }\r\n}\r\n</style>"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/planzivota/"},{"rel":"alternate","hreflang":"en","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/planzivota/"}]},"30fedf6b-5f95-4f06-93e3-ece146627e39-en":{"outputDir":"./registrace","lang":"en","cacheVersion":286,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<script src=\"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js\"></script>\r\n\r\n<style>\r\n    /* Na obrazovce může být print-root klidně skrytý */\r\n    @media screen {\r\n        #print-root {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    /* Tyto styly používá html2pdf při renderu */\r\n    #print-root {\r\n        width: 190mm;\r\n        margin: 0 auto;\r\n        padding: 0;\r\n        background: #fff;\r\n    }\r\n\r\n    #print-root .print-item {\r\n        break-inside: avoid;\r\n        page-break-inside: avoid;\r\n        margin-bottom: 8mm;\r\n    }\r\n\r\n    #print-root .print-break {\r\n        break-before: page;\r\n        page-break-before: always;\r\n    }\r\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/registrace/"},{"rel":"alternate","hreflang":"en","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/registrace/"}]},"06023897-70ec-4680-bace-cfd329217f99-en":{"outputDir":"./call-journal","lang":"en","cacheVersion":286,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<script src=\"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js\"></script>\r\n\r\n<style>\r\n    /* Na obrazovce může být print-root klidně skrytý */\r\n    @media screen {\r\n        #print-root {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    /* Tyto styly používá html2pdf při renderu */\r\n    #print-root {\r\n        width: 190mm;\r\n        margin: 0 auto;\r\n        padding: 0;\r\n        background: #fff;\r\n    }\r\n\r\n    #print-root .print-item {\r\n        break-inside: avoid;\r\n        page-break-inside: avoid;\r\n        margin-bottom: 8mm;\r\n    }\r\n\r\n    #print-root .print-break {\r\n        break-before: page;\r\n        page-break-before: always;\r\n    }\r\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/call-journal/"},{"rel":"alternate","hreflang":"en","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/call-journal/"}]},"63f8855d-9c2c-498e-8909-f753464a35e8-en":{"outputDir":"./home","lang":"en","cacheVersion":286,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<script src=\"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js\"></script>\r\n\r\n<style>\r\n    /* Na obrazovce může být print-root klidně skrytý */\r\n    @media screen {\r\n        #print-root {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    /* Tyto styly používá html2pdf při renderu */\r\n    #print-root {\r\n        width: 190mm;\r\n        margin: 0 auto;\r\n        padding: 0;\r\n        background: #fff;\r\n    }\r\n\r\n    #print-root .print-item {\r\n        break-inside: avoid;\r\n        page-break-inside: avoid;\r\n        margin-bottom: 8mm;\r\n    }\r\n\r\n    #print-root .print-break {\r\n        break-before: page;\r\n        page-break-before: always;\r\n    }\r\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/home/"},{"rel":"alternate","hreflang":"en","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/home/"}]},"97018d21-11cf-4343-b2fa-bc29165d1431-en":{"outputDir":"./","lang":"en","cacheVersion":286,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<script src=\"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js\"></script>\r\n\r\n<style>\r\n    /* Na obrazovce může být print-root klidně skrytý */\r\n    @media screen {\r\n        #print-root {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    /* Tyto styly používá html2pdf při renderu */\r\n    #print-root {\r\n        width: 190mm;\r\n        margin: 0 auto;\r\n        padding: 0;\r\n        background: #fff;\r\n    }\r\n\r\n    #print-root .print-item {\r\n        break-inside: avoid;\r\n        page-break-inside: avoid;\r\n        margin-bottom: 8mm;\r\n    }\r\n\r\n    #print-root .print-break {\r\n        break-before: page;\r\n        page-break-before: always;\r\n    }\r\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/"}]},"0ed43827-1bdf-41f5-9286-299de6a013b2-en":{"outputDir":"./duchodplan","lang":"en","cacheVersion":286,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<script src=\"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js\"></script>\r\n\r\n<style>\r\n    /* Na obrazovce může být print-root klidně skrytý */\r\n    @media screen {\r\n        #print-root {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    /* Tyto styly používá html2pdf při renderu */\r\n    #print-root {\r\n        width: 190mm;\r\n        margin: 0 auto;\r\n        padding: 0;\r\n        background: #fff;\r\n    }\r\n\r\n    #print-root .print-item {\r\n        break-inside: avoid;\r\n        page-break-inside: avoid;\r\n        margin-bottom: 8mm;\r\n    }\r\n\r\n    #print-root .print-break {\r\n        break-before: page;\r\n        page-break-before: always;\r\n    }\r\n</style>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js\"></script>","body":"\n<style>\r\n@media print {\r\n    /* Vynutí barvy pozadí a grafiku i v PDF */\r\n    * { \r\n        -webkit-print-color-adjust: exact !important; \r\n        print-color-adjust: exact !important; \r\n    }\r\n\r\n    /* Nastavení pro váš hlavní kontejner */\r\n    #export-oblast {\r\n        background-color: #F8F9FA !important; /* Šedobílé pozadí z vašeho webu */\r\n        padding: 20px !important;\r\n        width: 100% !important;\r\n    }\r\n\r\n    /* Aby se karty (Zdraví, Auto, atd.) nerozsekly v půlce na dvě stránky */\r\n    .card, [class*=\"card\"], [class*=\"section\"] { \r\n        page-break-inside: avoid !important;\r\n        break-inside: avoid !important;\r\n        margin-bottom: 20px !important;\r\n    }\r\n}\r\n</style>"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/duchodplan/"},{"rel":"alternate","hreflang":"en","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/duchodplan/"}]},"0bd98884-77d8-4221-9a33-786ab5f5c2dd-en":{"outputDir":"./home-copy","lang":"en","cacheVersion":286,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<script src=\"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js\"></script>\r\n\r\n<style>\r\n    /* Na obrazovce může být print-root klidně skrytý */\r\n    @media screen {\r\n        #print-root {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    /* Tyto styly používá html2pdf při renderu */\r\n    #print-root {\r\n        width: 190mm;\r\n        margin: 0 auto;\r\n        padding: 0;\r\n        background: #fff;\r\n    }\r\n\r\n    #print-root .print-item {\r\n        break-inside: avoid;\r\n        page-break-inside: avoid;\r\n        margin-bottom: 8mm;\r\n    }\r\n\r\n    #print-root .print-break {\r\n        break-before: page;\r\n        page-break-before: always;\r\n    }\r\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/home-copy/"},{"rel":"alternate","hreflang":"en","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/home-copy/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        structuredData: pageConfig.structuredData || null,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rolldownOptionsInput = {};
for (const pageName in pages) {
    rolldownOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

function getFrontEnvironmentValues(root, mode) {
    const filePath = path.resolve(root, `.env.${mode}`);
    if (!fs.existsSync(filePath)) {
        return {};
    }

    return Object.fromEntries(Object.entries(parseEnv(fs.readFileSync(filePath, 'utf8'))).filter(([key]) => !key.startsWith('VITE_')));
}

export default defineConfig(() => {
    return {
        plugins: [vue()],
        base: "/",
        define: {
            global: 'globalThis',
            __WW_FRONT_ENV_VARIABLES__: JSON.stringify({
                staging: getFrontEnvironmentValues(__dirname, 'staging'),
                production: getFrontEnvironmentValues(__dirname, 'production'),
            }),
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rolldownOptions: {
                input: rolldownOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    if (/Use of direct `eval`/.test(entry.message)) return;
                    return next(entry);
                },
            },
        },
        logLevel: 'warn',
    };
});
