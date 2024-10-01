import { createPlugin } from '@backstage/core-plugin-api';

const pluginId = 'example-theme';

export const exampleThemePlugin = createPlugin({
  id: pluginId,
  routes: {},
  apis: [],
});
