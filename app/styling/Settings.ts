import { BaseSettings } from './design-system/getBaseSettings';
import { Color } from './css-in-js/quantities/Color';
import { Duration } from './css-in-js/quantities/Duration';
import { Length } from './css-in-js/quantities/Length';

interface Settings extends BaseSettings {
  textColor: Color;
  textSizes: {
    title: Length;
    headline: Length;
    content: Length;
    finePrint: Length;
  };
  borderRadius: Length;
  borderSize: Length;
  backgroundColor: Color;
  brandColor: Color;
  transition: {
    delay: Duration;
  };
}

export type {
  Settings
};
