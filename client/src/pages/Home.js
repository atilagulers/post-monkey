import PageWrapper from '../components/PageWrapper/PageWrapper';
import Post from '../components/Post/Post';
import {useDispatch} from 'react-redux';
import {logout} from 'features/user/authSlice';

function Home() {
  const dispatch = useDispatch();

  return (
    <PageWrapper title="Home">
      <div>
        <div className="flex items-end">
          <div className="w-full py-3 text-center flex justify-center hover:bg-stone-200">
            <h1 className="border-b-2 border-b-orange-500 w-fit">For you</h1>
          </div>
          <div className="w-full py-3 text-center flex justify-center  hover:bg-stone-200">
            <h1 className="border-b-2 border-b-orange-500 w-fit">Following</h1>
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
