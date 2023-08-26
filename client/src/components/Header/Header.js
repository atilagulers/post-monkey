import {useState} from 'react';
import {FaBeer} from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <button>
          <FaBeer onClick={() => setIsOpen(!isOpen)} size={32} />
        </button>
      ) : (
        <div className="top-0 left-0 fixed bg-gray-200 dark:bg-black w-[20vw] h-full flex justify-end p-10">
          <h2 className="text-2xl text-black dark:text-white">
            this is sidebar
          </h2>
        </div>
      )}
    </>
  );
}

export default Header;
