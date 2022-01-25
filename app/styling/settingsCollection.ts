import { Settings } from './Settings';
import { SettingsCollection } from 'react-component-theming';
import { ThemeVariant } from './ThemeVariant';

const size = function (n: number): string {
  return `${n * 2}rem`;
};

const settingsCollection: SettingsCollection<Settings, ThemeVariant> = {
  light: {
    size,
    textColor: '#000',
    textSizes: {
      title: size(2),
      headline: size(1.3),
      content: size(0.66),
      finePrint: size(0.5)
    },
    backgroundColor: '#fff',
    brandColor: 'hotpink'
  },
  dark: {
    size,
    textColor: '#ccc',
    textSizes: {
      title: size(2),
      headline: size(1.3),
      content: size(0.66),
      finePrint: size(0.5)
    },
    backgroundColor: '#1e1e1e',
    brandColor: 'hotpink'
  }
};

export {
  settingsCollection
};
