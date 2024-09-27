import { createPlugin } from '@backstage/core-plugin-api';

const pluginId = 'test-theme';

export const testThemePlugin = createPlugin({
  id: pluginId,
  routes: {},
  apis: [],
});
