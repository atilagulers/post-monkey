import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchPostsByUserID, createPost} from 'services/api';

const initialState = {
  explore: {
    posts: [],
    loading: false,
    errorMessage: '',
  },
  friends: {
    posts: [],
    loading: false,
    errorMessage: '',
  },
  profile: {
    posts: [],
    page: 1,
    limit: 10,
    loading: false,
    errorMessage: '',
  },
  currentPost: {
    content: '',
    loading: false,
    errorMessage: '',
  },
};

export const fetchProfilePostsAsync = createAsyncThunk(
  'posts/fetchProfilePosts',
  async ({userId, page, limit}) => {
    const response = await fetchPostsByUserID(userId, page, limit);
    return response;
  }
);

export const createPostAsync = createAsyncThunk(
  'posts/createPost',
  async (postBody) => {
    const response = await createPost(postBody);
    return response;
  }
);

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    //increasePage: (state, action) => {
    //  const newPost = action.post;
    //  state.explorePosts.push(newPost);
    //  state.profilePosts.push(newPost);
    //},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfilePostsAsync.pending, (state) => {
        state.profile.loading = true;
      })
      .addCase(fetchProfilePostsAsync.fulfilled, (state, action) => {
        state.profile.loading = false;
        state.profile.page++;
        state.profile.posts = [...state.profile.posts, ...action.payload];
      })
      .addCase(fetchProfilePostsAsync.rejected, (state) => {
        state.profile.loading = false;
        state.currentPost.errorMessage = 'Network Error.';
      })
      .addCase(createPostAsync.pending, (state) => {
        state.currentPost.loading = true;
      })
      .addCase(createPostAsync.fulfilled, (state, action) => {
        state.currentPost.loading = false;
        state.profile.posts.unshift(action.payload);
        state.explore.posts.unshift(action.payload);
      })
      .addCase(createPostAsync.rejected, (state) => {
        state.currentPost.loading = false;
        state.currentPost.errorMessage = 'Post could not be created.';
      });
  },
});

export const {setProfilePosts, addPost} = postSlice.actions;
export default postSlice.reducer;
