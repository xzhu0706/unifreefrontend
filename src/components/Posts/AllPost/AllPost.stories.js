import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { MemoryRouter } from 'react-router-dom';
import { withInfo } from '@storybook/addon-info';
import '@storybook/addon-notes';
import { AllPost } from './AllPost';

storiesOf('Post', module)
  .addDecorator(StoryRouter())
  .add('All posts',
    withInfo({
      text: 'description: Display all post on the home page',
      inline: false,
      source: false,
    })(() => (
      <MemoryRouter>
        <AllPost />
      </MemoryRouter>
    )),
    { notes: 'MemoryRouter used to prevent invariant error.' });
