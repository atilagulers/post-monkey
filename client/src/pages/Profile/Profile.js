import React, {useEffect} from 'react';
import PageWrapper from 'components/PageWrapper/PageWrapper';
import Post from 'components/Post/Post';
import {getPostsByUsername as fetchPostsByUserID} from 'services/api';
import {useSelector, useDispatch} from 'react-redux';
import {setProfilePosts} from 'features/posts/postSlice';

function Profile() {
  const {user} = useSelector((store) => store.auth);
  const {profilePosts} = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await fetchPostsByUserID(user._id);
        dispatch(setProfilePosts(posts));
      } catch (error) {
        console.log('Failed to fetch posts.');
      }
    };

    if (profilePosts.length === 0) {
      fetchPosts();
    }
  }, [dispatch, user._id, profilePosts]);

  return (
    <PageWrapper title="Profile">
      {profilePosts.map((post) => (
        <Post content={post.content} key={post._id} />
      ))}
    </PageWrapper>
  );
}

export default Profile;
