import {useSelector} from 'react-redux';

function SideContent() {
  const {token} = useSelector((store) => store.auth);

  return (
    <>
      {token && (
        <div className="side-content w-full p-5 border-l border-gray-300 dark:border-gray-700 shadow">
          <div className="w-[250px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            perferendis animi illo deserunt incidunt blanditiis excepturi vitae
            eius. Sed necessitatibus ipsa ex. Eaque quas pariatur omnis nobis
            quo maiores magni.
          </div>
        </div>
      )}
    </>
  );
}

export default SideContent;
