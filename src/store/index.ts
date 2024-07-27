import type { App } from 'vue';
import { createPinia } from 'pinia';
import { useRouteStore } from './modules/route';
import useThemeStore from './modules/theme';
import useTabsStore from './modules/tabs';

export const store = createPinia();

export function mountStore(app: App<Element>) {
  app.use(store);
}

export { useRouteStore, useThemeStore, useTabsStore };
