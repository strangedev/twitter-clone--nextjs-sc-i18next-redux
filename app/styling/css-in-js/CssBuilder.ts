import { Stringable } from './Stringable';

type CssClause = [ string, Stringable ];

class CssBuilder implements Stringable {
  private readonly clauses: CssClause[];

  protected constructor (clauses: CssClause[]) {
    this.clauses = clauses;
  }

  public static new (): CssBuilder {
    return new CssBuilder([]);
  }

  public add (...clause: CssClause): CssBuilder {
    return new CssBuilder([
      ...this.clauses,
      clause
    ]);
  }

  public toString (): string {
    return this.clauses.
      map(([ key, value ]): string => `${key}: ${value};`).
      join('\n');
  }
}

export {
  CssBuilder
};
export type {
  CssClause
};
