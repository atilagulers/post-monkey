import React, {useEffect, useState} from 'react';
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

  const loadMorePosts = async () => {
    setLoadingMore(true);
    try {
      console.log(page + 1, limit);
      const posts = await dispatch(
        fetchProfilePostsAsync({userId: user._id, page: page + 1, limit})
      );
      console.log(posts);
    } catch (error) {
      console.log(error);
    } finally {
      //setLoadingMore(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (loadingMore) return;
      //loadMorePosts();
    }
  };

  useEffect(() => {
    const postScrollEl = document.getElementById('post-scroll');
    postScrollEl.addEventListener('scroll', handleScroll);
    return () => {
      postScrollEl.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (profilePosts.length !== 0) return;

    dispatch(fetchProfilePostsAsync({userId: user._id, page, limit}));
  }, [dispatch, user._id, profilePosts, limit, page]);

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
