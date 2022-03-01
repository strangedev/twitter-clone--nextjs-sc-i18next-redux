import color from 'color';
import { Quantity } from './Quantity';
import { Stringable } from '../Stringable';

type Rgba = 'rgba';
type Rgb = 'rgb';
type Hex = 'hex';

type RgbValue = [ number, number, number ];
type RgbaValue = [ number, number, number, number ];
type HexValue = `#${string}`;

type ColorValue = RgbValue | RgbaValue | HexValue;
type ColorSign = Rgb | Rgba | Hex;

abstract class Color<TValue extends ColorValue = ColorValue, TSign extends ColorSign = ColorSign> extends Quantity<TValue, TSign, Color<TValue, TSign>> implements Stringable {
  public abstract toString (): string;

  public abstract valueRgba (): RgbaValue;

  public negate (): ColorRgba {
    const rgba = this.valueRgba();
    const newRgb = color(rgba.slice(0, -1)).negate().rgb().array() as RgbValue;

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return ColorRgba.new(
      ...newRgb,
      rgba[3]
    );
  }

  public lighten (amount: number): ColorRgba {
    const rgba = this.valueRgba();
    const newRgb = color(rgba.slice(0, -1)).lighten(amount).rgb().array() as RgbValue;

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return ColorRgba.new(
      ...newRgb,
      rgba[3]
    );
  }

  public darken (amount: number): ColorRgba {
    const rgba = this.valueRgba();
    const newRgb = color(rgba.slice(0, -1)).darken(amount).rgb().array() as RgbValue;

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return ColorRgba.new(
      ...newRgb,
      rgba[3]
    );
  }

  public setLightness (amount: number): ColorRgba {
    const rgba = this.valueRgba();
    const newRgb = color(rgba.slice(0, -1)).lightness(amount).rgb().array() as RgbValue;

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return ColorRgba.new(
      ...newRgb,
      rgba[3]
    );
  }

  public saturate (amount: number): ColorRgba {
    const rgba = this.valueRgba();
    const newRgb = color(rgba.slice(0, -1)).saturate(amount).rgb().array() as RgbValue;

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return ColorRgba.new(
      ...newRgb,
      rgba[3]
    );
  }

  public desaturate (amount: number): ColorRgba {
    const rgba = this.valueRgba();
    const newRgb = color(rgba.slice(0, -1)).desaturate(amount).rgb().array() as RgbValue;

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return ColorRgba.new(
      ...newRgb,
      rgba[3]
    );
  }

  public grayscale (): ColorRgba {
    const rgba = this.valueRgba();
    const newRgb = color(rgba.slice(0, -1)).grayscale().rgb().array() as RgbValue;

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return ColorRgba.new(
      ...newRgb,
      rgba[3]
    );
  }

  public whiten (amount: number): ColorRgba {
    const rgba = this.valueRgba();
    const newRgb = color(rgba.slice(0, -1)).whiten(amount).rgb().array() as RgbValue;

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return ColorRgba.new(
      ...newRgb,
      rgba[3]
    );
  }

  public blacken (amount: number): ColorRgba {
    const rgba = this.valueRgba();
    const newRgb = color(rgba.slice(0, -1)).blacken(amount).rgb().array() as RgbValue;

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return ColorRgba.new(
      ...newRgb,
      rgba[3]
    );
  }

  public isDark (): boolean {
    const rgba = this.valueRgba();

    return color(rgba.slice(0, -1)).isDark();
  }

  public isLight (): boolean {
    const rgba = this.valueRgba();

    return color(rgba.slice(0, -1)).isLight();
  }
}

class ColorRgb extends Color<RgbValue, Rgb> {
  public static new (...value: RgbValue): ColorRgb {
    return new ColorRgb({ value, sign: 'rgb' });
  }

  public toString (): string {
    return `rgb(${this.value.join(',')})`;
  }

  public valueRgba (): RgbaValue {
    return [ ...this.value, 1 ];
  }

  public clone (): ColorRgb {
    return ColorRgb.new(...this.value);
  }
}

class ColorRgba extends Color<RgbaValue, Rgba> {
  public static new (...value: RgbaValue): ColorRgba {
    return new ColorRgba({ value, sign: 'rgba' });
  }

  public toString (): string {
    return `rgba(${this.value.join(',')})`;
  }

  public valueRgba (): RgbaValue {
    return [ ...this.value ];
  }

  public clone (): ColorRgba {
    return ColorRgba.new(...this.value);
  }
}

class ColorHex extends Color<HexValue, Hex> {
  public static new (value: HexValue): ColorHex {
    return new ColorHex({ value, sign: 'hex' });
  }

  public toString (): string {
    return this.value;
  }

  public valueRgba (): RgbaValue {
    const rgb = color(this.value).rgb().array() as RgbValue;

    return [ ...rgb, 1 ];
  }

  public clone (): ColorHex {
    return ColorHex.new(this.value);
  }
}

export {
  ColorHex,
  ColorRgb,
  ColorRgba
};
export type {
  Color,
  HexValue,
  RgbValue,
  RgbaValue
};
