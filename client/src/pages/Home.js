import PageWrapper from '../components/PageWrapper/PageWrapper';
import Post from '../components/Post/Post';
import {logout} from 'features/auth/authSlice';
import {useDispatch, useSelector} from 'react-redux';
import {selectTab} from 'features/tabs/tabSlice';
import PostForm from 'components/PostForm/PostForm';

function Home() {
  const dispatch = useDispatch();
  const {currentTab} = useSelector((store) => store.tabs.home);
  const handleClickTab = (tabIndex) => {
    dispatch(selectTab({section: 'home', tabIndex}));
  };

  return (
    <PageWrapper title="Home">
      <div>
        <div className="flex items-end border-b-2 border-r-2">
          <Tab
            handleClick={handleClickTab}
            text={'For you'}
            tabIndex={0}
            currentTab={currentTab}
          />
          <Tab
            handleClick={handleClickTab}
            text={'Following'}
            tabIndex={1}
            currentTab={currentTab}
          />
        </div>
      </div>
      <div>
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />

        <button onClick={() => dispatch(logout())} className="btn btn-orange">
          Logout
        </button>
      </div>
    </PageWrapper>
  );
}

export default Home;

const Tab = ({handleClick, text, tabIndex, currentTab}) => {
  return (
    <div
      onClick={() => handleClick(tabIndex)}
      className="w-full py-3 text-center flex justify-center hover:bg-stone-200"
    >
      <h1
        className={`${
          tabIndex === currentTab ? 'border-b-2 border-b-orange-500' : ''
        }`}
      >
        {text}
      </h1>
    </div>
  );
};
