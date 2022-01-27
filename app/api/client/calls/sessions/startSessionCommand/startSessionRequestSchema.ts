import { Parser } from 'validate-value';

interface StartSessionRequestSchema {
  handle: string;
  password: string;
}

const startSessionRequestSchema = new Parser<StartSessionRequestSchema>({
  type: 'object',
  properties: {
    handle: {
      type: 'string',
      minLength: 1
    },
    password: {
      type: 'string',
      minLength: 1
    }
  }
});

export type {
  StartSessionRequestSchema
};
export {
  startSessionRequestSchema
};
