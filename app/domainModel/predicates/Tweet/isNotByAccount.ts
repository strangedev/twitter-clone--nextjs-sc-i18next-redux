import { Account } from '../../Account';
import { Tweet } from '../../Tweet';

const isNotByAccount = function (handle: Account['handle']): (tweet: Tweet) => boolean {
  return (tweet: Tweet): boolean => tweet.account.handle !== handle;
};

export {
  isNotByAccount
};
