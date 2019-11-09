import React from 'react';
import { StateProvider } from '../../components/StateProvider';
import { AllPost } from '../../components/Posts/AllPost';

export const Home = () => {
  const initialState = {
    posts: [],
    page: { pageSize: 25, currentPage: 1, totalPages: 1 },
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changePage':
        return {
          ...state,
          page: action.newPage,
        };
      case 'changePosts':
        return {
          ...state,
          posts: action.posts,
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <AllPost />
    </StateProvider>
  );
};
