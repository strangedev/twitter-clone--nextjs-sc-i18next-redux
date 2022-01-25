interface Settings {
  size: (n: number) => string;
  textColor: string;
  textSizes: {
    title: string;
    headline: string;
    content: string;
    finePrint: string;
  };
  borderRadius: string;
  backgroundColor: string;
  brandColor: string;
}

export type {
  Settings
};
