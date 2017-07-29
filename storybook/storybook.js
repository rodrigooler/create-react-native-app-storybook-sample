import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { setOptions } from '@storybook/addon-options';

configure(() => {
  require('./stories');
}, module);

const StorybookUI = getStorybookUI({
  port: 7007,
  host: 'localhost',
  onDeviceUI: true,
  resetStorybook: true,
});

setTimeout(
  () =>
    setOptions({
      name: 'CRNA Storybook',
    }),
  100,
);

AppRegistry.registerComponent('CRNAStorybook', () => StorybookUI);

export { StorybookUI as default };
