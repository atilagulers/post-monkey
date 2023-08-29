import React, {useEffect} from 'react';
import PageWrapper from 'components/PageWrapper/PageWrapper';
import Post from 'components/Post/Post';
import {getPostsByUsername as getPostsByUserID} from 'services/api';
import {useSelector} from 'react-redux';

function Profile() {
  const {user} = useSelector((store) => store.auth);

  useEffect(() => {
    const posts = getPostsByUserID(user._id);
    console.log(posts);
  }, []);

  return (
    <PageWrapper title="Profile">
      <Post content={''} />
    </PageWrapper>
  );
}

export default Profile;
