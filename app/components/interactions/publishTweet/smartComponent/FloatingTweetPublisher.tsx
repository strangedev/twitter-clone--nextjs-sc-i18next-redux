import axios from 'axios';
import { FloatingComposeNewTweetButton } from '../FloatingPublishTweetButton';
import { FloatingTweetComposer } from '../FloatingTweetComposer';
import { getClient } from '../../../../api/client/getClient';
import { publishTweet } from '../../../../store/actions/tweets/publishTweet';
import { useAppDispatch } from '../../../../store/typing';
import { useAuthentication } from '../../../../api/hooks/useAuthentication';
import React, { Fragment, FunctionComponent, ReactElement, useState } from 'react';

const FloatingTweetPublisher: FunctionComponent = function (): ReactElement | null {
  const apiClient = getClient(axios.create({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    baseURL: 'http://localhost:4000/'
  }));
  const { isAuthenticated, session } = useAuthentication();
  const dispatch = useAppDispatch();
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
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                dispatch(publishTweet({
                  apiClient,
                  parameters: {
                    text: draftTweet,
                    token: session!.accessToken
                  }
                })).then((action): void => {
                  if (action.meta.requestStatus === 'fulfilled') {
                    setIsComposerOpen(false);
                    setDraftTweet('');
                  }
                });
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
