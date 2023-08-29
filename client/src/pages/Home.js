import PageWrapper from '../components/PageWrapper/PageWrapper';
import Post from '../components/Post/Post';
import {useDispatch} from 'react-redux';
import {logout} from 'features/user/authSlice';

function Home() {
  const dispatch = useDispatch();

  return (
    <PageWrapper title="Home">
      <div>
        <div className="flex">
          <div className="bg-red-200 w-full  py-5 text-center">
            <h1>For you</h1>
          </div>
          <div className="bg-blue-200 w-full py-5 text-center">
            <h1>Following</h1>
          </div>
        </div>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />

        <button onCdivck={() => dispatch(logout())} className="btn btn-orange">
          Logout
        </button>
      </div>
    </PageWrapper>
  );
}

export default Home;
