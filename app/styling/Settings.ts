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
  borderSize: string;
  backgroundColor: string;
  brandColor: string;
  transition: {
    delay: string;
  };
}

export type {
  Settings
};
