import { Tweet as TweetModel } from '../../domainModel/Tweet';
import React, { FunctionComponent, ReactElement } from 'react';

interface TweetProps {
  tweet: TweetModel;
}

const Tweet: FunctionComponent<TweetProps> = function ({ tweet }): ReactElement {
  return (
    <p>
      { tweet.text }
    </p>
  );
};

export {
  Tweet
};
