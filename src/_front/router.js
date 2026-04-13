import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import {
    initializeData,
    initializePlugins,
    initializeIntegrationInstances,
    onPageUnload,
} from '@/_common/helpers/data';
import { convertPathToRouterFormat } from '@/_common/helpers/urlParametersParsing';
import { isPublishedProductionHost } from '@/_common/helpers/publishedRuntimeEnv.js';

import { useBackAuthStore } from '@/pinia/backAuth.js';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"bd6c9360-77d1-4f21-bfb4-e9473a7c2ea4","homePageId":"97018d21-11cf-4343-b2fa-bc29165d1431","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":{},"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{"backgroundColor":"#f9f9ff"},"workflows":[],"back":{"isServerSetup":{"staging":false,"production":false}},"auth":null,"pages":[{"id":"30fedf6b-5f95-4f06-93e3-ece146627e39","linkId":"30fedf6b-5f95-4f06-93e3-ece146627e39","name":"Registrace","folder":null,"paths":{"en":"registrace","default":"registrace"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"92e95cab-bc54-4781-b4e9-af2ed3e60b6e","sectionTitle":"Sign up","linkId":"92aa4d56-c098-4697-8df8-c2db649e4ab4"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"","security":{}},{"id":"da77339e-2b38-45a5-bee1-b6b5e2b3cbb4","linkId":"da77339e-2b38-45a5-bee1-b6b5e2b3cbb4","name":"Nastavení","folder":null,"paths":{"en":"nastaveni","default":"nastaveni"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"e592dbf1-1564-448f-9fd7-e1e066b87af5","sectionTitle":"Sidebar Navigation","linkId":"e85a68db-0c7f-42a8-bb93-9bfdf7f94b5a"},{"uid":"8bcb2676-75a6-47f8-b98f-669d40942240","sectionTitle":"Section","linkId":"a49bbc2a-c5a5-4274-ac47-448ff1c05468"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"","security":{}},{"id":"0bd98884-77d8-4221-9a33-786ab5f5c2dd","linkId":"0bd98884-77d8-4221-9a33-786ab5f5c2dd","name":"Plan gdpr","folder":null,"paths":{"en":"home-copy","default":"home-copy"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"a695cfe6-4b2f-4b70-b478-842aec5fc4f6","sectionTitle":"Background Gradient","linkId":"f553f2e6-5d86-4463-b814-6b44b9d92c67"},{"uid":"dc444da6-09aa-4fc5-bbf3-2ba70a5e295d","sectionTitle":"Sidebar Navigation","linkId":"7aa26e92-d9dd-4dcd-9d42-0f207690a26e"},{"uid":"e9136520-7c13-4314-895c-12f518712561","sectionTitle":"nav","linkId":"caeedc39-c51a-4c62-95a6-a3b6fe0e49df"},{"uid":"f2225a48-79ad-4c0b-976f-7f49bcaa1dc5","sectionTitle":"Main Content Area","linkId":"9bdd257b-13b0-4993-9710-2aebb9c5a067"},{"uid":"482ea320-643d-4dd6-961a-fe76a871df10","sectionTitle":"Section","linkId":"7bd09541-10d5-409c-a3d5-fbe8437f6df8"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"","security":{}},{"id":"0ed43827-1bdf-41f5-9286-299de6a013b2","linkId":"0ed43827-1bdf-41f5-9286-299de6a013b2","name":"duchod plan","folder":null,"paths":{"en":"duchodplan","default":"duchodplan"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"42dbfeff-5406-4e6c-801d-283e8e526986","sectionTitle":"Sidebar Navigation","linkId":"893d8fa2-2bd7-45ad-b295-daa332ce90bf"},{"uid":"0819e862-d59a-4a61-80aa-dbfa165b5ac2","sectionTitle":"Sidebar Navigation","linkId":"4b2f37ab-8a3d-435d-80cc-2cc2eec015c1"},{"uid":"5074e5b1-9045-4926-82b5-0a3e03f6ef8e","sectionTitle":"nav","linkId":"180521ea-6319-46b5-8d84-24c0618e5fb1"},{"uid":"b06b117e-639b-421c-9ba1-3e24e5256548","sectionTitle":"Main Content Area","linkId":"06061573-a937-441f-8cc6-da19cff5256b"},{"uid":"529249fc-7ec0-46a0-9b56-1ae740764393","sectionTitle":"Překrytí","linkId":"330bdacc-1080-42b8-8246-284bf872bb50"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"","security":{}},{"id":"c57d39a0-74c0-42f4-90cb-cca890f55c63","linkId":"c57d39a0-74c0-42f4-90cb-cca890f55c63","name":"Plan zivota","folder":null,"paths":{"en":"planzivota","default":"planzivota"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"5887e249-33aa-4aa2-9617-a4a4b842203a","sectionTitle":"Sidebar Navigation","linkId":"4cd42273-4857-4a84-a39a-f261b6f7e891"},{"uid":"5b74ead1-91dc-4cf6-81b6-ab9cba7e0274","sectionTitle":"Sidebar Navigation","linkId":"ec6c947a-0801-4744-a453-ad4bb033dcf4"},{"uid":"4351f8a5-73cd-48a1-89a9-56cfc3233449","sectionTitle":"nav","linkId":"3188c0d1-dfaa-4608-bf37-2610127790fb"},{"uid":"c6d14f52-a122-4256-83ed-2b5f8d24223a","sectionTitle":"Main Content Area","linkId":"c96ed3f5-6fee-406f-9c77-31a7a3f6f4b5"},{"uid":"df934eb6-76ab-4349-920e-63315880cb8a","sectionTitle":"Překrytí","linkId":"43ed1d69-1d5a-4700-be2a-91a206a386ba"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"","security":{}},{"id":"06023897-70ec-4680-bace-cfd329217f99","linkId":"06023897-70ec-4680-bace-cfd329217f99","name":"Call journal","folder":null,"paths":{"en":"call-journal","default":"call-journal"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"663448f3-24ec-4bff-b9e0-5968808f4478","sectionTitle":"Main","linkId":"8f94e179-596a-4074-8f35-dc07590e5a3c"},{"uid":"7ed517a2-3c55-49e4-b096-73c84985b165","sectionTitle":"Sidebar Navigation","linkId":"bdae9718-bb39-48c0-adb0-2f501713faaf"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"","security":{}},{"id":"97018d21-11cf-4343-b2fa-bc29165d1431","linkId":"97018d21-11cf-4343-b2fa-bc29165d1431","name":"Dashboard","folder":null,"paths":{"en":"dashboard","default":"dashboard"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"55ae363e-ae24-490f-8b11-8722baccb62a","sectionTitle":"Sidebar Navigation","linkId":"675ef48b-fbd6-49a5-bb22-1436f1dc2fab"},{"uid":"f1900466-763a-4d34-a79f-8c3086ec8716","sectionTitle":"Main","linkId":"115030bf-2777-4321-afd0-f0bdf8b87c34"},{"uid":"00073971-aa6b-4883-a421-f41d32608ebe","sectionTitle":"Překryti","linkId":"53d1c960-da20-41e1-a73d-21613d569eaf"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"","security":{}},{"id":"63f8855d-9c2c-498e-8909-f753464a35e8","linkId":"63f8855d-9c2c-498e-8909-f753464a35e8","name":"Plan","folder":null,"paths":{"en":"home","default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"ece663d0-b610-416f-9612-d8b1f53e659a","sectionTitle":"Sidebar Navigation","linkId":"dcfb16ea-c711-48de-a324-8e36b8fb00dc"},{"uid":"2c85f714-af9f-403d-a843-65f2061f8edb","sectionTitle":"Sidebar Navigation","linkId":"c6bee7ad-86a0-489d-ac0b-5052ac1dcdff"},{"uid":"ae14c4f4-3059-460f-9ed4-2e6a583b6f2b","sectionTitle":"Main Content Area","linkId":"9e9440ba-57d7-4784-a85b-b73a5b5ea017"},{"uid":"3f379d04-3e7b-4e1f-942a-519f5ec69719","sectionTitle":"Překrytí","linkId":"05758b2e-899b-441c-b1f0-b7599148ff56"},{"uid":"b2466b73-26c8-458f-9cba-e960cb427472","sectionTitle":"A4 show up","linkId":"ee7d0098-50cc-437c-af33-861fc615a203"},{"uid":"c2e7c1f6-317e-4922-9b25-7aea0c04c9ff","sectionTitle":"Tisk","linkId":"370ef080-0d4e-4ed5-8d06-ca030345f4c7"},{"uid":"76509642-6d51-4193-a3ba-8c50205b1581","sectionTitle":"nav","linkId":"af3b4908-c29d-4dc9-bcc8-98de220589f2"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"","security":{}}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 264;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    path = convertPathToRouterFormat(path);

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Init integration instances
            await initializeIntegrationInstances();

            if (wwLib.wwAuth.plugin) {
                if (page.pageUserGroups?.length) {
                    await wwLib.wwAuth.init();

                    // Redirect to not sign in page if not logged
                    if (!wwLib.wwAuth.getIsAuthenticated()) {
                        window.location.href = `${wwLib.wwPageHelper.getPagePath(
                            wwLib.wwAuth.getUnauthenticatedPageId()
                        )}?_source=${to.path}`;

                        return null;
                    }

                    //Check roles are required
                    if (
                        page.pageUserGroups.length > 1 &&
                        !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                    ) {
                        window.location.href = `${wwLib.wwPageHelper.getPagePath(
                            wwLib.wwAuth.getUnauthorizedPageId()
                        )}?_source=${to.path}`;

                        return null;
                    }
                }
            } else {
                const backAuthStore = useBackAuthStore(wwLib.$pinia);
                if (!backAuthStore.projectAuth && window.wwg_designInfo.auth) {
                    backAuthStore.setProjectAuth(window.wwg_designInfo.auth);
                }
                await backAuthStore.refresh();
                const projectAuth = backAuthStore.projectAuth || {};

                //Check if private page
                if (page.security?.accessRule === 'authenticated') {
                    if (!backAuthStore.isAuthenticated) {
                        window.location.href = `${wwLib.wwPageHelper.getPagePath(
                            projectAuth.unauthenticatedPageId
                        )}?_source=${to.path}`;
                        return null;
                    } else if (page.security?.accessRoles?.length) {
                        const hasAccess =
                            page.security.accessRolesCondition === 'AND'
                                ? backAuthStore.matchAllRoles(page.security.accessRoles)
                                : backAuthStore.matchAnyRoles(page.security.accessRoles);
                        if (!hasAccess) {
                            window.location.href = `${wwLib.wwPageHelper.getPagePath(
                                projectAuth.unauthorizedPageId
                            )}?_source=${to.path}`;
                            return null;
                        }
                    }
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd = isPublishedProductionHost(window.location.host);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
