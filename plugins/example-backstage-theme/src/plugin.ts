import { createPlugin } from '@backstage/core-plugin-api';

const pluginId = 'example-theme';

export const testThemePlugin = createPlugin({
  id: pluginId,
  routes: {},
  apis: [],
});
