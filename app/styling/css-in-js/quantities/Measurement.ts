interface Measurement<TValue, TSign extends string> {
  value: TValue;
  sign: TSign;
}

export type {
  Measurement
};
