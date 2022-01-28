import { FloatingComposeNewTweetButton } from '../FloatingPublishTweetButton';
import { FloatingTweetComposer } from '../FloatingTweetComposer';
import { useAuthentication } from '../../../../api/hooks/useAuthentication';
import React, { Fragment, FunctionComponent, ReactElement, useState } from 'react';

const FloatingTweetPublisher: FunctionComponent = function (): ReactElement | null {
  const { isAuthenticated } = useAuthentication();
  const [ draftTweet, setDraftTweet ] = useState<string>('');
  const [ isComposerOpen, setIsComposerOpen ] = useState<boolean>(false);

  if (!isAuthenticated) {
    return null;
  }

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
