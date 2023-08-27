import PageWrapper from '../components/PageWrapper/PageWrapper';
import Post from '../components/Post/Post';

function Home() {
  return (
    <PageWrapper title="Home">
      <div>
        <Post />
      </div>
    </PageWrapper>
  );
}

export default Home;
