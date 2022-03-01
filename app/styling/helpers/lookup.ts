type PathTree<TTheme> = {
  [TKey in keyof TTheme]-?: TTheme[TKey] extends object ?
    [TKey] | [TKey, ...Path<TTheme[TKey]>] :
    [TKey];
};
type Path<TTheme> = PathTree<TTheme>[keyof PathTree<TTheme>];

type Dotted<TPath> =
  TPath extends [ infer THead ] ?
    THead extends string ?
      THead :
      never :
    TPath extends [ infer THead, ...(infer TRest) ] ?
      THead extends string ?
        TRest extends string[] ?
          `${THead}.${Dotted<TRest>}` :
          never :
        never :
      never;

type TemplateFunction<TTheme> = (args: { componentTheme: TTheme }) => any;
type LookupFunction<TTheme, TPath extends Path<TTheme>>
  = (dottedPath: Dotted<TPath>) => TemplateFunction<TTheme>;

const getThemeLookupFunction = function<TTheme extends object> (): LookupFunction<TTheme, Path<TTheme>> {
  return <TPath extends Path<TTheme>>(path: Dotted<TPath>): TemplateFunction<TTheme> =>
    ({ componentTheme }): any => {
      let current = componentTheme;

      for (const property of path.split('.')) {
        // @ts-ignore
        current = current[property];
      }

      return current;
    };
};

export {
  getThemeLookupFunction
};
