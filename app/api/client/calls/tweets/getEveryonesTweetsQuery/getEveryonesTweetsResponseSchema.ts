import { Parser } from 'validate-value';
import { Tweet } from '../../../../../domainModel/Tweet';

const getEveryonesTweetsResponseSchema = new Parser<Tweet[]>({
  type: 'array',
  items: {
    type: 'object',
    properties: {
      text: {
        type: 'string'
      },
      publishedAt: {
        type: 'string',
        format: 'date-time'
      },
      account: {
        type: 'object',
        properties: {
          handle: {
            type: 'string'
          },
          bio: {
            type: 'string'
          },
          picture: {
            type: 'object',
            properties: {
              data: {
                type: 'string'
              }
            }
          }
        }
      }
    }
  }
});

export {
  getEveryonesTweetsResponseSchema
};
