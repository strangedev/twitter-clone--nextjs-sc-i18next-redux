import { Parser } from 'validate-value';
import { Session } from '../../../../../domainModel/Session';

const startSessionResponseSchema = new Parser<Session>({
  type: 'object',
  properties: {
    handle: {
      type: 'string'
    },
    accessToken: {
      type: 'string'
    },
    ttlSeconds: {
      type: 'number'
    },
    lastActiveAt: {
      type: 'string',
      format: 'date-time'
    }
  }
});

export {
  startSessionResponseSchema
};
