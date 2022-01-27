import { Settings } from './Settings';
import { SettingsCollection } from 'react-component-theming';
import { ThemeVariant } from './ThemeVariant';

const size = function (n: number): string {
  return `${n * 30}px`;
};

const settingsCollection: SettingsCollection<Settings, ThemeVariant> = {
  light: {
    size,
    textColor: '#000',
    textSizes: {
      title: size(2),
      headline: size(1.3),
      content: size(0.66),
      finePrint: size(0.4)
    },
    borderRadius: size(0.2),
    borderSize: '1px',
    backgroundColor: '#fff',
    brandColor: 'hotpink',
    transition: {
      delay: '0.3s'
    }
  },
  dark: {
    size,
    textColor: '#ccc',
    textSizes: {
      title: size(2),
      headline: size(1.3),
      content: size(0.66),
      finePrint: size(0.2)
    },
    borderRadius: size(0.2),
    borderSize: '1px',
    backgroundColor: '#1e1e1e',
    brandColor: 'hotpink',
    transition: {
      delay: '0.3s'
    }
  }
};

export {
  settingsCollection
};
