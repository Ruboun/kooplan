import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import { parseEnv } from 'node:util';
import handlebars from 'handlebars';

const pages = {"registrace":{"outputDir":"./registrace","lang":"en","cacheVersion":224,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\r\n@media print {\r\n    /* 1. Nastavení okrajů papíru */\r\n    @page {\r\n        size: A4;\r\n        margin: 15mm !important;\r\n    }\r\n\r\n    /* 2. Schování tlačítek */\r\n    .tlacitka-container {\r\n        display: none !important;\r\n    }\r\n\r\n    /* 3. Stránkování tvých hlavních sekcí */\r\n    .print-section > div {\r\n        page-break-after: always !important;\r\n        break-after: page !important;\r\n    }\r\n\r\n    /* 4. NOVINKA: Manuální zlom */\r\n    /* Když kdekoli vytvoříš prvek a dáš mu třídu 'zlom', tiskárna skočí na další list */\r\n    .zlom {\r\n        page-break-before: always !important;\r\n        break-before: page !important;\r\n        display: block !important;\r\n        height: 0 !important;\r\n        margin: 0 !important;\r\n    }\r\n}\r\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/registrace/"},{"rel":"alternate","hreflang":"en","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/registrace/"}]},"nastaveni":{"outputDir":"./nastaveni","lang":"en","cacheVersion":224,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\r\n@media print {\r\n    /* 1. Nastavení okrajů papíru */\r\n    @page {\r\n        size: A4;\r\n        margin: 15mm !important;\r\n    }\r\n\r\n    /* 2. Schování tlačítek */\r\n    .tlacitka-container {\r\n        display: none !important;\r\n    }\r\n\r\n    /* 3. Stránkování tvých hlavních sekcí */\r\n    .print-section > div {\r\n        page-break-after: always !important;\r\n        break-after: page !important;\r\n    }\r\n\r\n    /* 4. NOVINKA: Manuální zlom */\r\n    /* Když kdekoli vytvoříš prvek a dáš mu třídu 'zlom', tiskárna skočí na další list */\r\n    .zlom {\r\n        page-break-before: always !important;\r\n        break-before: page !important;\r\n        display: block !important;\r\n        height: 0 !important;\r\n        margin: 0 !important;\r\n    }\r\n}\r\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/nastaveni/"},{"rel":"alternate","hreflang":"en","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/nastaveni/"}]},"planzivota":{"outputDir":"./planzivota","lang":"en","cacheVersion":224,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\r\n@media print {\r\n    /* 1. Nastavení okrajů papíru */\r\n    @page {\r\n        size: A4;\r\n        margin: 15mm !important;\r\n    }\r\n\r\n    /* 2. Schování tlačítek */\r\n    .tlacitka-container {\r\n        display: none !important;\r\n    }\r\n\r\n    /* 3. Stránkování tvých hlavních sekcí */\r\n    .print-section > div {\r\n        page-break-after: always !important;\r\n        break-after: page !important;\r\n    }\r\n\r\n    /* 4. NOVINKA: Manuální zlom */\r\n    /* Když kdekoli vytvoříš prvek a dáš mu třídu 'zlom', tiskárna skočí na další list */\r\n    .zlom {\r\n        page-break-before: always !important;\r\n        break-before: page !important;\r\n        display: block !important;\r\n        height: 0 !important;\r\n        margin: 0 !important;\r\n    }\r\n}\r\n</style>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js\"></script>","body":"\n<style>\r\n@media print {\r\n    /* Vynutí barvy pozadí a grafiku i v PDF */\r\n    * { \r\n        -webkit-print-color-adjust: exact !important; \r\n        print-color-adjust: exact !important; \r\n    }\r\n\r\n    /* Nastavení pro váš hlavní kontejner */\r\n    #export-oblast {\r\n        background-color: #F8F9FA !important; /* Šedobílé pozadí z vašeho webu */\r\n        padding: 20px !important;\r\n        width: 100% !important;\r\n    }\r\n\r\n    /* Aby se karty (Zdraví, Auto, atd.) nerozsekly v půlce na dvě stránky */\r\n    .card, [class*=\"card\"], [class*=\"section\"] { \r\n        page-break-inside: avoid !important;\r\n        break-inside: avoid !important;\r\n        margin-bottom: 20px !important;\r\n    }\r\n}\r\n</style>"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/planzivota/"},{"rel":"alternate","hreflang":"en","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/planzivota/"}]},"home-copy":{"outputDir":"./home-copy","lang":"en","cacheVersion":224,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\r\n@media print {\r\n    /* 1. Nastavení okrajů papíru */\r\n    @page {\r\n        size: A4;\r\n        margin: 15mm !important;\r\n    }\r\n\r\n    /* 2. Schování tlačítek */\r\n    .tlacitka-container {\r\n        display: none !important;\r\n    }\r\n\r\n    /* 3. Stránkování tvých hlavních sekcí */\r\n    .print-section > div {\r\n        page-break-after: always !important;\r\n        break-after: page !important;\r\n    }\r\n\r\n    /* 4. NOVINKA: Manuální zlom */\r\n    /* Když kdekoli vytvoříš prvek a dáš mu třídu 'zlom', tiskárna skočí na další list */\r\n    .zlom {\r\n        page-break-before: always !important;\r\n        break-before: page !important;\r\n        display: block !important;\r\n        height: 0 !important;\r\n        margin: 0 !important;\r\n    }\r\n}\r\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/home-copy/"},{"rel":"alternate","hreflang":"en","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/home-copy/"}]},"home":{"outputDir":"./home","lang":"en","cacheVersion":224,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\r\n@media print {\r\n    /* 1. Nastavení okrajů papíru */\r\n    @page {\r\n        size: A4;\r\n        margin: 15mm !important;\r\n    }\r\n\r\n    /* 2. Schování tlačítek */\r\n    .tlacitka-container {\r\n        display: none !important;\r\n    }\r\n\r\n    /* 3. Stránkování tvých hlavních sekcí */\r\n    .print-section > div {\r\n        page-break-after: always !important;\r\n        break-after: page !important;\r\n    }\r\n\r\n    /* 4. NOVINKA: Manuální zlom */\r\n    /* Když kdekoli vytvoříš prvek a dáš mu třídu 'zlom', tiskárna skočí na další list */\r\n    .zlom {\r\n        page-break-before: always !important;\r\n        break-before: page !important;\r\n        display: block !important;\r\n        height: 0 !important;\r\n        margin: 0 !important;\r\n    }\r\n}\r\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/home/"},{"rel":"alternate","hreflang":"en","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/home/"}]},"call-journal":{"outputDir":"./call-journal","lang":"en","cacheVersion":224,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\r\n@media print {\r\n    /* 1. Nastavení okrajů papíru */\r\n    @page {\r\n        size: A4;\r\n        margin: 15mm !important;\r\n    }\r\n\r\n    /* 2. Schování tlačítek */\r\n    .tlacitka-container {\r\n        display: none !important;\r\n    }\r\n\r\n    /* 3. Stránkování tvých hlavních sekcí */\r\n    .print-section > div {\r\n        page-break-after: always !important;\r\n        break-after: page !important;\r\n    }\r\n\r\n    /* 4. NOVINKA: Manuální zlom */\r\n    /* Když kdekoli vytvoříš prvek a dáš mu třídu 'zlom', tiskárna skočí na další list */\r\n    .zlom {\r\n        page-break-before: always !important;\r\n        break-before: page !important;\r\n        display: block !important;\r\n        height: 0 !important;\r\n        margin: 0 !important;\r\n    }\r\n}\r\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/call-journal/"},{"rel":"alternate","hreflang":"en","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/call-journal/"}]},"duchodplan":{"outputDir":"./duchodplan","lang":"en","cacheVersion":224,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\r\n@media print {\r\n    /* 1. Nastavení okrajů papíru */\r\n    @page {\r\n        size: A4;\r\n        margin: 15mm !important;\r\n    }\r\n\r\n    /* 2. Schování tlačítek */\r\n    .tlacitka-container {\r\n        display: none !important;\r\n    }\r\n\r\n    /* 3. Stránkování tvých hlavních sekcí */\r\n    .print-section > div {\r\n        page-break-after: always !important;\r\n        break-after: page !important;\r\n    }\r\n\r\n    /* 4. NOVINKA: Manuální zlom */\r\n    /* Když kdekoli vytvoříš prvek a dáš mu třídu 'zlom', tiskárna skočí na další list */\r\n    .zlom {\r\n        page-break-before: always !important;\r\n        break-before: page !important;\r\n        display: block !important;\r\n        height: 0 !important;\r\n        margin: 0 !important;\r\n    }\r\n}\r\n</style>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js\"></script>","body":"\n<style>\r\n@media print {\r\n    /* Vynutí barvy pozadí a grafiku i v PDF */\r\n    * { \r\n        -webkit-print-color-adjust: exact !important; \r\n        print-color-adjust: exact !important; \r\n    }\r\n\r\n    /* Nastavení pro váš hlavní kontejner */\r\n    #export-oblast {\r\n        background-color: #F8F9FA !important; /* Šedobílé pozadí z vašeho webu */\r\n        padding: 20px !important;\r\n        width: 100% !important;\r\n    }\r\n\r\n    /* Aby se karty (Zdraví, Auto, atd.) nerozsekly v půlce na dvě stránky */\r\n    .card, [class*=\"card\"], [class*=\"section\"] { \r\n        page-break-inside: avoid !important;\r\n        break-inside: avoid !important;\r\n        margin-bottom: 20px !important;\r\n    }\r\n}\r\n</style>"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/duchodplan/"},{"rel":"alternate","hreflang":"en","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/duchodplan/"}]},"index":{"outputDir":"./","lang":"en","cacheVersion":224,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\r\n@media print {\r\n    /* 1. Nastavení okrajů papíru */\r\n    @page {\r\n        size: A4;\r\n        margin: 15mm !important;\r\n    }\r\n\r\n    /* 2. Schování tlačítek */\r\n    .tlacitka-container {\r\n        display: none !important;\r\n    }\r\n\r\n    /* 3. Stránkování tvých hlavních sekcí */\r\n    .print-section > div {\r\n        page-break-after: always !important;\r\n        break-after: page !important;\r\n    }\r\n\r\n    /* 4. NOVINKA: Manuální zlom */\r\n    /* Když kdekoli vytvoříš prvek a dáš mu třídu 'zlom', tiskárna skočí na další list */\r\n    .zlom {\r\n        page-break-before: always !important;\r\n        break-before: page !important;\r\n        display: block !important;\r\n        height: 0 !important;\r\n        margin: 0 !important;\r\n    }\r\n}\r\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4.weweb-preview.io/"}]}};

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
