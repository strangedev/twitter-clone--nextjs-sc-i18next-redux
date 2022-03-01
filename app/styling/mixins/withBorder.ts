import { Mixin } from '../helpers/mixins/Mixin';
import { Settings } from '../Settings';
import { ThemeVariant } from '../ThemeVariant';

const withBorder: Mixin<Settings, ThemeVariant> =
  ({ settings }): string => `
  border-color: ${settings.brandColor};
  border-width: ${settings.borderSize};
  border-radius: ${settings.borderRadius};
`;
