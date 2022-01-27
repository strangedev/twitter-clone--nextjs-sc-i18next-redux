import React, { Fragment, FunctionComponent, ReactElement, useState } from 'react';
import { FloatingComposeNewTweetButton } from '../FloatingPublishTweetButton';
import { FloatingTweetComposer } from '../FloatingTweetComposer';

const FloatingTweetPublisher: FunctionComponent = function (): ReactElement {
  const [ draftTweet, setDraftTweet ] = useState<string>('');
  const [ isComposerOpen, setIsComposerOpen ] = useState<boolean>(false);

  return (
    <Fragment>
      <FloatingComposeNewTweetButton
        onComposeNewTweet={
          (): void => {
            setIsComposerOpen(true);
          }
        }
      />
      {
        isComposerOpen && (
          <FloatingTweetComposer
            onChange={
              (text): void => {
                setDraftTweet(text);
              }
            }
            onCancel={
              (): void => {
                setIsComposerOpen(false);
              }
            }
            onPublish={
              (): void => {
                alert(draftTweet);
              }
            }
          />
        )
      }
    </Fragment>
  );
};

export {
  FloatingTweetPublisher
};
