import React, {useEffect, useState, useCallback} from 'react';
import PageWrapper from 'components/PageWrapper/PageWrapper';
import Post from 'components/Post/Post';
import {useSelector, useDispatch} from 'react-redux';
import {fetchProfilePostsAsync} from 'features/posts/postSlice';
import LoadingSpinner from 'components/Common/LoadingSpinner';
import CreatePostForm from 'components/CreatePostForm/CreatePostForm';

function Profile() {
  const {user} = useSelector((store) => store.auth);
  const {
    posts: profilePosts,
    loading: isFetching,
    page,
    limit,
  } = useSelector((state) => state.posts.profile);

  const dispatch = useDispatch();
  const [loadingMore, setLoadingMore] = useState(false);
  const [dataEndReached, setDataEndReached] = useState(false);

  const loadMorePosts = useCallback(async () => {
    setLoadingMore(true);
    try {
      const posts = await dispatch(
        fetchProfilePostsAsync({userId: user._id, page, limit})
      );

      if (posts.payload.length < limit) setDataEndReached(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingMore(false);
    }
  }, [dispatch, user._id, page, limit]);

  useEffect(() => {
    const postScrollEl = document.getElementById('post-scroll');

    const handleScroll = () => {
      const scrollThreshold = 100;

      if (
        postScrollEl.clientHeight + postScrollEl.scrollTop >=
        postScrollEl.scrollHeight - scrollThreshold
      ) {
        if (loadingMore || dataEndReached) return;
        loadMorePosts();
      }
    };

    postScrollEl.addEventListener('scroll', handleScroll);

    return () => {
      postScrollEl.removeEventListener('scroll', handleScroll);
    };
  }, [loadingMore, dataEndReached, loadMorePosts]);

  useEffect(() => {
    if (profilePosts.length !== 0) return;

    loadMorePosts();
    //dispatch(fetchProfilePostsAsync({userId: user._id, page, limit}));
  }, [dispatch, user._id, profilePosts, limit, page, loadMorePosts]);

  return (
    <PageWrapper title="Profile">
      <CreatePostForm />
      <button onClick={loadMorePosts}>load</button>

      {profilePosts.map((post) => (
        <Post content={post.content} key={post._id} />
      ))}

      {isFetching && <LoadingSpinner />}
    </PageWrapper>
  );
}

export default Profile;
