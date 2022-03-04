import { createGlobalTheme } from '@nhummel/styled-components-theming';
import { getBaseSettings } from './design-system/getBaseSettings';
import { ColorHex, ColorRgb, Duration } from '@nhummel/css-in-js';

const baseSettings = getBaseSettings();

const {
  createGlobalStyle,
  createLocalTheme,
  GlobalThemeProvider,
  useTheme
} = createGlobalTheme({
  globalThemes: {
    light: {
      ...baseSettings,
      textColor: ColorRgb.new(0, 0, 0),
      textSizes: {
        title: baseSettings.size(12),
        headline: baseSettings.size(8),
        content: baseSettings.size(5),
        finePrint: baseSettings.size(3)
      },
      borderRadius: baseSettings.size(1),
      borderSize: baseSettings.size('px'),
      backgroundColor: ColorRgb.new(255, 255, 255),
      brandColor: ColorRgb.new(155, 200, 100),
      transition: {
        delay: Duration.new(300, 'ms')
      }
    },
    dark: {
      ...baseSettings,
      textColor: ColorHex.new('#cccccc'),
      textSizes: {
        title: baseSettings.size(12),
        headline: baseSettings.size(8),
        content: baseSettings.size(5),
        finePrint: baseSettings.size(3)
      },
      borderRadius: baseSettings.size(0),
      borderSize: baseSettings.size('px'),
      backgroundColor: ColorHex.new('#1e1e1e'),
      brandColor: ColorRgb.new(60, 200, 255),
      transition: {
        delay: Duration.new(300, 'ms')
      }
    }
  },
  variants: [ 'dark', 'light' ] as const,
  defaultVariant: 'light' as const
});

export {
  createGlobalStyle,
  createLocalTheme,
  GlobalThemeProvider,
  useTheme
};
