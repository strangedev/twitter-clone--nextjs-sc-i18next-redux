import { initializeSettingsContext } from 'react-component-theming';
import { Settings } from './Settings';
import { settingsCollection } from './settingsCollection';
import { ThemeVariant } from './ThemeVariant';

const {
  SettingsProvider,
  useComponentTheme,
  useThemingVariant,
  useSettings
} = initializeSettingsContext<Settings, ThemeVariant>({
  settingsCollection,
  initialThemingVariant: 'dark'
});

export {
  SettingsProvider,
  useComponentTheme,
  useSettings,
  useThemingVariant
};
