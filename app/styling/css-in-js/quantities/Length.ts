import { Cent } from './Percent';
import { Quantity } from './Quantity';
import { Stringable } from '../Stringable';

type Cm = 'cm';
type Mm = 'mm';
type In = 'in';
type Px = 'px';
type Pt = 'pt';
type Pc = 'pc';
type Em = 'em';
type Ex = 'ex';
type Ch = 'ch';
type Rem = 'rem';
type Vw = 'vw';
type Vh = 'vh';
type Vmin = 'vmin';
type Vmax = 'vmax';

type AbsoluteLengthSign = Cm | Mm | In | Px | Pt | Pc;
type RelativeLengthSign = Em | Ex | Ch | Rem | Vw | Vh | Vmin | Vmax;
type LengthSign = AbsoluteLengthSign | RelativeLengthSign | Cent;

class Length <TSign extends LengthSign = LengthSign> extends Quantity<number, TSign, Length<TSign>> implements Stringable {
  public static new <TSign extends LengthSign> (value: number, sign: TSign): Length<TSign> {
    return new Length({ value, sign });
  }

  public toString (): string {
    return `${this.value}${this.sign}`;
  }

  public clone (): Length<TSign> {
    return Length.new(this.value, this.sign);
  }

  public add (other: Length<TSign>): Length<TSign> {
    return Length.new(this.value + other.value, this.sign);
  }

  public negate (): Length<TSign> {
    return Length.new(-this.value, this.sign);
  }
}

export {
  Length
};
export type {
  Cm,
  Mm,
  In,
  Px,
  Pt,
  Pc,
  Em,
  Ex,
  Ch,
  Rem,
  Vw,
  Vh,
  Vmin,
  Vmax
};
