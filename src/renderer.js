/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 */

import { createApp } from 'vue';
import App from './vue/App.vue';
import router from './route';
import './index.css';

createApp(App).use(router).mount('#app');
