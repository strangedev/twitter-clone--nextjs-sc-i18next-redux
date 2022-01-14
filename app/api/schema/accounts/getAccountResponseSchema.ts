import { Account } from '../../../domainModel/Account';
import { Parser } from 'validate-value';

const getAccountResponseSchema = new Parser<Account>({
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
});

export {
  getAccountResponseSchema
};
