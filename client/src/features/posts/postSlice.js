import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchPostsByUserID} from 'services/api';

const initialState = {
  forYou: {
    posts: [],
    loading: false,
  },
  friends: {
    posts: [],
    loading: false,
  },
  profile: {
    posts: [],
    loading: false,
  },
};

export const fetchProfilePosts = createAsyncThunk(
  'posts/fetchProfilePosts',
  async (userId) => {
    const response = await fetchPostsByUserID(userId);
    return response;
  }
);

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      const newPost = action.post;
      state.forYouPosts.push(newPost);
      state.profilePosts.push(newPost);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfilePosts.pending, (state) => {
        state.profile.loading = true;
      })
      .addCase(fetchProfilePosts.fulfilled, (state, action) => {
        state.profile.loading = false;
        state.profile.posts = action.payload;
      })
      .addCase(fetchProfilePosts.rejected, (state, action) => {
        state.profile.loading = false;
        console.error('Fetch profile posts error: ', action.error);
      });
  },
});

export const {setProfilePosts, addPost} = postSlice.actions;
export default postSlice.reducer;
