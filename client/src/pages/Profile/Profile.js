import React, {useEffect} from 'react';
import PageWrapper from 'components/PageWrapper/PageWrapper';
import Post from 'components/Post/Post';

function Profile() {
  return (
    <PageWrapper title="Profile">
      <Post />
      <Post />
      <Post />
    </PageWrapper>
  );
}

export default Profile;
