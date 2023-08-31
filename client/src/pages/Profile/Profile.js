import React, {useEffect} from 'react';
import PageWrapper from 'components/PageWrapper/PageWrapper';
import Post from 'components/Post/Post';
import {useSelector, useDispatch} from 'react-redux';
import {setProfilePosts} from 'features/posts/postSlice';
import {fetchProfilePosts} from 'features/posts/postSlice';
import LoadingSpinner from 'components/Common/LoadingSpinner';
import CreatePostForm from 'components/CreatePostForm/CreatePostForm';

function Profile() {
  const {user} = useSelector((store) => store.auth);
  const profilePosts = useSelector((state) => state.posts.profile.posts);
  const isFetching = useSelector((state) => state.posts.profile.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (profilePosts.length !== 0) return;

    dispatch(fetchProfilePosts(user._id));
  }, [dispatch, user._id, profilePosts]);

  if (isFetching) return <LoadingSpinner />;

  return (
    <PageWrapper title="Profile">
      <CreatePostForm />
      {profilePosts.map((post) => (
        <Post content={post.content} key={post._id} />
      ))}
    </PageWrapper>
  );
}

export default Profile;
