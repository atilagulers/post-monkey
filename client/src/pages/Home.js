import PageWrapper from '../components/PageWrapper/PageWrapper';
import Post from '../components/Post/Post';
import {useDispatch} from 'react-redux';
import {logout} from 'features/user/authSlice';

function Home() {
  const dispatch = useDispatch();

  return (
    <PageWrapper title="Home">
      <div>
        <button onClick={() => dispatch(logout())} className="btn btn-orange">
          Logout
        </button>

        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </PageWrapper>
  );
}

export default Home;
