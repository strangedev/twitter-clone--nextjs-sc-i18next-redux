import { Parser } from 'validate-value';

interface PublishTweetRequestSchema {
  text: string;
}

const publishTweetRequestSchema = new Parser<PublishTweetRequestSchema>({
  type: 'object',
  properties: {
    text: {
      type: 'string',
      minLength: 1,
      maxLength: 240
    }
  }
});

export type {
  PublishTweetRequestSchema
};
export {
  publishTweetRequestSchema
};
