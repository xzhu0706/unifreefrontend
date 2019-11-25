import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { IndividualPost } from '../IndividualPost';
import { serviceRequest } from '../../../../services/serviceRequest';
import { StateProvider } from '../../../StateProvider';

jest.mock('../../../../services/serviceRequest');

describe('Individual Post test', () => {
  const initialState = {
    post: {
      label: 'general',
      title: '',
      content: '',
      updatedAt: '',
      username: '',
      postID: 1,
      posterID: 1,
    },
  };

  const mockReducer = jest.fn();

  const successPayLoad = {
    status: 'success',
    data: {
      label: 'sample',
      title: 'sample title',
      content: 'This is a sample content for the sample post with sample title',
      updatedAt: '2019-11-07T09:26:51.822Z',
      username: 'sample',
      postID: 1,
    },
  };

  const failPayLoad = {
    status: 'error',
    message: 'Cannot read property "dataValues" of null',
  };

  beforeAll(() => {
    // eslint-disable-next-line no-console
    console.error = jest.fn();
  });

  beforeEach(() => {
    serviceRequest.mockClear();
  });

  it('should render without crash', () => {
    serviceRequest.mockImplementation(async () => (successPayLoad));
    const { baseElement } = render(
      <StateProvider initialState={initialState} reducer={mockReducer}>
        <IndividualPost />
      </StateProvider>,
    );

    expect(baseElement.outerHTML).toBeDefined();
  });

  it('should catch error for internal service error', async () => {
    serviceRequest.mockReturnValue(failPayLoad);
    const { getByText } = render(
      <StateProvider initialState={initialState} reducer={mockReducer}>
        <IndividualPost />
      </StateProvider>,
    );
    await new Promise((_) => setTimeout(_, 100));
    expect(getByText('Internal Service Error, Please Return to the Home Page')).toBeInTheDocument();
  });

  it('should catch error for internal service error', async () => {
    serviceRequest.mockReturnValue({});
    const { getByText } = render(
      <StateProvider initialState={initialState} reducer={mockReducer}>
        <IndividualPost />
      </StateProvider>,
    );
    await new Promise((_) => setTimeout(_, 100));
    expect(getByText('Internal Service Error, Please Return to the Home Page')).toBeInTheDocument();
  });
});
