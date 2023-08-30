import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  forYouPosts: [],
  friendPosts: [],
  profilePosts: [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setProfilePosts: (state, action) => {
      state.profilePosts = action.payload;
    },
    addPost: (state, action) => {
      const newPost = action.post;
      state.forYouPosts.push(newPost);
      state.profilePosts.push(newPost);
    },
  },
});

export const {setProfilePosts, addPost} = postSlice.actions;
export default postSlice.reducer;
