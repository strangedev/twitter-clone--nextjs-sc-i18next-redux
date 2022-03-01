import { Quantity } from './Quantity';
import { Stringable } from '../Stringable';

type Sec = 's';
type Ms = 'ms';

type DurationSign = Sec | Ms;

class Duration <TSign extends DurationSign = DurationSign> extends Quantity<number, TSign, Duration<TSign>> implements Stringable {
  public static new <TSign extends DurationSign> (value: number, sign: TSign): Duration<TSign> {
    return new Duration({ value, sign });
  }

  public toString (): string {
    return `${this.value}${this.sign}`;
  }

  public clone (): Duration<TSign> {
    return Duration.new(this.value, this.sign);
  }
}

export {
  Duration
};
export type {
  Sec,
  Ms
};
