import {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {useSelector} from 'react-redux';
import './Navbar.css';

function Navbar() {
  const {token} = useSelector((store) => store.auth);

  const [isOpen, setIsOpen] = useState(false);

  const handleClickNavbar = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      document.documentElement.classList.add('navbar-open');
    } else {
      document.documentElement.classList.remove('navbar-open');
    }
  };

  return (
    <>
      {token && (
        <nav
          className={`navbar ${
            isOpen ? 'navbar-open' : ''
          } top-0 left-0 m-0 shadow-lg  bg-white dark:bg-dark`}
        >
          {/*<div className="flex justify-center items-center ">
          <button onClick={handleClickNavbar}>
            <FaBars size={32} />
          </button>
        </div>*/}

          <div className="navbar-list flex">
            <h2 className="text-2xl text-black dark:text-white">
              this is sidebar
            </h2>
            <h2 className="text-2xl text-black dark:text-white">
              this is sidebar
            </h2>
            <h2 className="text-2xl text-black dark:text-white">
              this is sidebar
            </h2>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
