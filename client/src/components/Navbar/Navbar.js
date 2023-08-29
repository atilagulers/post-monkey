import React from 'react';
import {FaHome, FaBell} from 'react-icons/fa';

import {useSelector} from 'react-redux';
import './Navbar.css';

function Navbar() {
  const {token} = useSelector((store) => store.auth);

  return (
    <>
      {token && (
        <nav
          className={`navbar top-0 left-0 m-0 shadow-lg  bg-white dark:bg-dark`}
        >
          <div className="navbar-list flex  h-full">
            {/* Dinamik NavbarItem kullanımı */}
            <NavbarItem Icon={FaHome} text="Home" />
            <NavbarItem Icon={FaBell} text="Notifications" />
            <NavbarItem Icon={FaBell} text="Messages" />
            <NavbarItem Icon={FaBell} text="Profile" />

            {/* İhtiyaca göre diğer NavbarItem bileşenleri */}
          </div>
        </nav>
      )}
    </>
  );
}

const NavbarItem = ({Icon, text}) => {
  return (
    <div className="navbar-item flex items-center mb-3 ">
      <div className="navbar-item-content flex justify-start items-center gap-5 px-5 py-3 rounded-full hover:hover:bg-gray-200">
        {Icon && <Icon size={28} className="" />}
        <h2 className="navbar-item-text text-xl text-black dark:text-white font-light">
          {text}
        </h2>
      </div>
    </div>
  );
};

export default Navbar;

{
  /*<div className="flex justify-center items-center ">
          <button onClick={handleClickNavbar}>
            <FaBars size={32} />
          </button>
        </div>*/
}
