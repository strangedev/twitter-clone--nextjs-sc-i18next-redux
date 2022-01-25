import { Account } from './Account';

interface Tweet {
  text: string;
  publishedAt: string;
  account: Account;
}

export type {
  Tweet
};
