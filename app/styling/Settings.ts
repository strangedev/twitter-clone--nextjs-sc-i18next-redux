interface Settings {
  size: (n: number) => string;
  textColor: string;
  textSizes: {
    headline: string;
    content: string;
    finePrint: string;
  };
  backgroundColor: string;
  brandColor: string;
}

export type {
  Settings
};
